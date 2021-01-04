<template>
	<div>
		<div v-for="post in posts" :key="post.id" class="post">
			<span class="date">{{ $date(post.date) }}</span>
			<h2 class="mt-1 mb-4"><router-link :to="'/post/' + $hyphenate(post.title)">{{ post.title }}</router-link></h2>
			<Tags v-if="post.tags" :tags="post.tags" />
		</div>
		<div v-if="!posts">
			Nothing to see here yet...
		</div>
	</div>
</template>

<script>
import Tags from '@/components/Tags.vue';

export default {
	name: 'AllPosts',
	components: {
		Tags
	},
	props: {
		posts: {
			type: Array,
			required: true
		}
	}
}
</script>
