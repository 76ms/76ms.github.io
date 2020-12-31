<template>
	<div class="row h-100">
		<div class="col order-last d-flex align-items-center">
			<SiteHeader />
		</div>
		<div class="col">
			<AllPosts />
		</div>
	</div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import AllPosts from '@/components/AllPosts.vue'

export default {
	name: 'Posts',
	components: {
		SiteHeader,
		AllPosts
	}
}
</script>
