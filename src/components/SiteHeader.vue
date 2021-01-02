<template>
	<div class="row">
		<div class="d-none d-md-block col-12 text-center">
			<Projects />
		</div>
		<div class="col-12">
			<CorguxLogo />
		</div>
		<div class="d-none d-md-block col-12 text-center">
			<Profiles />
		</div>
	</div>
</template>

<script>

import CorguxLogo from '@/components/CorguxLogo.vue'
import Projects from '@/components/Projects.vue'
import Profiles from '@/components/Profiles.vue'

export default {
	name: 'SiteHeader',
	components: {
		CorguxLogo,
		Projects,
		Profiles
	}
}
</script>
