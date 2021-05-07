<template>
    <div class="projects m-auto">
        <span v-for="project in projects" :key="project.text">
            <a :href="project.url">
                {{ project.text }}
            </a>
            <span v-if="project.bullet">&bull;</span>
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
					bullet: true
				},
				{
					text: 'Gifstori',
					url: '/gifstori'
				},
				{
					text: 'PhotoViewer',
					url: '/photos',
					bullet: true
				},
				{
					text: 'WordPress plugins',
					url: '//profiles.wordpress.org/corgux/#content-plugins'
				}
			],
		}
	}
}
</script>