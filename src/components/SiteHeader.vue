<template>
	<div class="row">
		<div class="col-12 text-center">
			<div class="projects m-auto">
				<span v-for="(project, index) in projects" :key="project.text">
					<a :href="project.url">
						{{ project.text }}
					</a>
					<span v-if="index < projects.length - 1">&bull;</span>
				</span>		
			</div>
		</div>
		<div class="col-12">
			<CorguxLogo />
		</div>
		<div class="col-12 text-center">
			<div class="profiles m-auto">
				<span v-for="profile in profiles" :key="profile.text">
					<a :href="profile.url" class="mx-3">
						<span :class="'fa fa-' + profile.icon"></span>
						<span class="sr-only">{{ profile.text }}</span>
					</a>
				</span>
			</div>
		</div>
	</div>
</template>

<script>

import CorguxLogo from '@/components/CorguxLogo.vue'

export default {
	name: 'SiteHeader',
	components: {
		CorguxLogo
	},
	data () {
		return {
			projects: [
				{
					text: 'WordMap',
					url: '/word-map'
				},
				{
					text: 'Safe Plants for Cats',
					url: '/safe-plants-for-cats'
				},
				{
					text: 'Gifstori',
					url: '/gifstori'
				},
				{
					text: 'PhotoViewer',
					url: '/photos'
				},
				{
					text: 'WordPress plugins',
					url: '//profiles.wordpress.org/corgux/#content-plugins'
				}
			],
			profiles: [
				{
					text: 'Twitter',
					url: '//twitter.com/corgux',
					icon: 'twitter'
				},
				{
					text: 'GitHub',
					url: '//github.com/corgux',
					icon: 'github'
				},
				{
					text: 'SoundCloud',
					url: '//soundcloud.com/corgux',
					icon: 'soundcloud'
				},
				{
					text: 'WordPress',
					url: '//profiles.wordpress.org/corgux',
					icon: 'wordpress'
				},
				{
					text: 'CodePen',
					url: 'codepen.io/corgux/',
					icon: 'codepen'
				}
			],
		}
	}
}
</script>
