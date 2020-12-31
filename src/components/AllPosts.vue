<template>
	<div>
		{{ posts }}
	</div>
</template>

<script>
export default {
	name: 'SiteHeader',
	computed: {
		posts () {
			return this.$store.state.posts;
		}
	}
}
</script>
