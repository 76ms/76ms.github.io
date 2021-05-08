<template>
	<main class="row h-100 align-items-center">
		<div class="wrapper">
			<div class="col-12 text-center">
				<Projects />
			</div>
			<div class="col-12">
				<CorguxLogo />
			</div>
			<div class="col-12 text-center">
				<Profiles />
			</div>
		</div>
	</main>
</template>

<script>
import CorguxLogo from '@/components/CorguxLogo.vue'
import Projects from '@/components/Projects.vue'
import Profiles from '@/components/Profiles.vue'

export default {
	name: 'Home',
	components: {
		CorguxLogo,
		Projects,
		Profiles
	}
}
</script>
