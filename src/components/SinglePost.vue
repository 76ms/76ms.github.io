<template>
	<div class="post">
		<span class="date">{{ $date(post.date) }}</span>
		<h2 class="cgx-blue mt-1 mb-4">{{ post.title }}</h2>
		<Tags v-if="post.tags" :tags="post.tags" />
		<div class="mt-5" v-html="post.content"></div>
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