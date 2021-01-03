<template>
	<div class="post">
		<router-link
			to="/"
			class="d-block mb-5 cgx-grey text-decoration-none"
		>
			<span class="fa fa-angle-left"></span> <small>All posts</small>
		</router-link>
		<span class="date">{{ $date(post.date) }}</span>
		<h2 class="cgx-blue mt-1 mb-4">{{ post.title }}</h2>
		<Tags v-if="post.tags" :tags="post.tags" />
		<div class="mt-5 pb-5 border-bottom border-secondary" v-html="formattedContent(post.content)"></div>
	</div>
</template>

<script>
import Tags from '@/components/Tags.vue';

export default {
	name: 'SinglePost',
	components: {
		Tags
	},
	props: {
		post: {
			type: [Object, Boolean],
			required: true
		}
	},
	methods: {
		formattedContent (content) {

			// Check for [image] shortcode
			content = content
				.replace(/\[image/, '<img')
				.replace(/][/image]/, '>');

			// Then $sanitise
			return this.$sanitise(content);

		}
	}
}
</script>