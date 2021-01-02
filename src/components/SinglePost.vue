<template>
	<div class="post">
		<router-link
			to="/"
			class="d-block mb-5"
		>
			<span class="fa fa-chevron-left"></span> All posts
		</router-link>
		<span class="date">{{ $date(post.date) }}</span>
		<h2 class="cgx-blue mt-1 mb-4">{{ post.title }}</h2>
		<Tags v-if="post.tags" :tags="post.tags" />
		<div class="mt-5" v-html="$sanitise(post.content)"></div>
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
	}
}
</script>