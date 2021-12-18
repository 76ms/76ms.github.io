<template>
	<main class="row h-100 align-items-center">
		<div class="wrapper">
			<div class="col-12">
				<Logo />
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
import Logo from '@/components/Logo.vue'
import Projects from '@/components/Projects.vue'
import Profiles from '@/components/Profiles.vue'

export default {
	name: 'Home',
	components: {
		Logo,
		Projects,
		Profiles
	}
}
</script>
