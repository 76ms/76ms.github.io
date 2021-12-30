<template>
	<main class="row h-100 align-items-center">
		<div class="wrapper">
			<div class="col-12">
				<Avatar />
			</div>
			<div class="col-12 text-center">
				<Profiles />
			</div>
			<div class="col-12 text-center mb-5 mt-5">
				<Projects />
			</div>
		</div>
	</main>
</template>

<script>
import Avatar from '@/components/Avatar.vue'
import Projects from '@/components/Projects.vue'
import Profiles from '@/components/Profiles.vue'

export default {
	name: 'Home',
	components: {
		Avatar,
		Projects,
		Profiles
	}
}
</script>
