<template>
	<div class="row h-100">
		<header class="col-12 col-md order-md-last d-block d-md-flex align-items-center site-header">
			<SiteHeader />
		</header>
		<main class="col cgx-bg-white post-wrapper h-100">
			<div class="pt-5 pb-5 px-4 px-md-5">
				<template v-if="$store.state.posts.length">
					<AllPosts v-if="!slug" :tag="tag" />
					<SinglePost v-if="slug" :post="post" />
				</template>
				<div v-else class="text-center loading">
					Loading...
				</div>
			</div>
		</main>
		<footer class="col-12 d-md-none text-center py-3">
			<div class="mb-3">
				<Profiles />
			</div>
			<Projects />
		</footer>
	</div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import AllPosts from '@/components/AllPosts.vue'
import SinglePost from '@/components/SinglePost.vue'
import Projects from '@/components/Projects.vue'
import Profiles from '@/components/Profiles.vue'

export default {
	name: 'Blog',
	components: {
		SiteHeader,
		AllPosts,
		SinglePost,
		Projects,
		Profiles
	},
	props: {
		slug: {
			type: String,
			required: false
		},
		tag: {
			type: String,
			required: false
		}
	},
	computed: {
		posts () {
			return this.$store.state.posts;
		},
		post () {
			if(!this.$store.state.posts.length) return false;

			const singlePost = this.$store.state.posts.filter(post => this.$hyphenate(post.title) == this.slug)
			return singlePost.length ? singlePost[0] : false;
		},
		date () {
			if(!this.post) return '';

			const date = new Date(this.post.date);
			const day = date.getDate() < 10 ? `0${ date.getDate() }` : date.getDate();
			const month = date.toLocaleString('default', {month: 'short'});
			return `${ day } ${ month } ${ date.getFullYear() }`;
		}
	},
	methods: {
		setup () {
			// Bail if the tag or slug doesn't return any posts
			if(
				(this.tag && !this.posts.length) ||
				(this.slug && !this.post)
			) {
				this.$router.push({path: '/'});
			}

			// Update the page title
			const baseTitle = 'Corgux | UI, UX, web design';
			if(this.slug) document.title = `${ this.post.title } | ${ baseTitle }`;
			if(this.tag) document.title = `Tag: ${ this.$unhyphenate(this.tag) } | ${ baseTitle }`;

		}
	},
	watch: {
		tag () {
			this.setup();
		},
		slug () {
			this.setup();
		},
		posts () {
			this.setup();
		}
	}
}
</script>
