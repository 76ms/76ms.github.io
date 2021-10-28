<template>
    <div class="projects m-auto">
        <span v-for="project in projects" :key="project.text">
            <a :href="project.url">
                {{ project.text }}
            </a>
            <span v-if="project.bullet" :class="{'hide-on-mobile': project.hideOnMobile}">&bull;</span>
        </span>		
    </div>
</template>

<script>
export default {
	name: 'Projects',
	data () {
		return {
			projects: [
				{
					text: 'WordMap',
					url: '/word-map',
					bullet: true
				},
				{
					text: 'Safe Plants for Cats',
					url: '/safe-plants-for-cats',
					bullet: true,
					hideOnMobile: true
				},
				{
					text: 'Gifstori',
					url: '/gifstori',
					bullet: true
				},
				{
					text: 'PhotoViewer',
					url: '/photos',
				}
			],
		}
	}
}
</script>