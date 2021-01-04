<template>
	<div class="row h-100">
		<header class="col-12 col-lg order-lg-last d-block d-lg-flex align-items-center site-header">
			<SiteHeader />
		</header>
		<main class="col cgx-bg-white post-wrapper h-100">
			<div class="pt-5 pb-5 px-4 px-lg-5">
				<template v-if="$store.state.posts.length">
					<p v-if="tag && !errorPage" class="cgx-max-width mb-5">Tag: {{ tag }}</p>
					<AllPosts v-if="!slug" :posts="posts" />
					<SinglePost v-if="slug && post" :post="post" />
				</template>
				<div v-else class="text-center loading">
					Loading...
				</div>
				<div v-if="errorPage" class="cgx-max-width">
					<p v-if="tag">Sorry, no posts for the tag &quot;{{ tag }}&quot;.</p>
					<p v-if="slug">Sorry, that post doesn't exist.</p>
					<router-link
						to="/"
						class="d-block mb-5 cgx-grey text-decoration-none"
					>
						<span class="fa fa-angle-left"></span> <small>All posts</small>
					</router-link>
				</div>
			</div>
		</main>
		<footer class="col-12 d-lg-none text-center py-3">
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
			// return this.$store.state.posts;
			return !this.tag ?
				this.$store.state.posts :
				this.$store.state.posts.filter(post => {
					let match = false;
					post.tags.forEach(tag => {
						if(tag.toLowerCase() == this.$unhyphenate(this.tag)) {
							match = true;
						}
					})
					return match;
				});
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
		},

		errorPage () {
			if(this.$store.state.loading) return false;
			return (this.tag && !this.posts.length) || (this.slug && !this.post);
		}
	},
	methods: {
		setup () {
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
