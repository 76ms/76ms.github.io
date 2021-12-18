<template>
    <div class="projects m-auto">
        <span v-for="project in projects" :key="project.text" class="px-1 px-md-2 d-inline-block py-1">
            <a :href="project.url">
                <img :src="project.img" alt="icon" aria-hidden="true" :class="{'rounded': project.rounded}">&nbsp;{{ project.text }}
            </a>
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
					img: 'word-map.png',
					rounded: true,
					bullet: true
				},
				{
					text: 'PhotoViewer',
					url: '/photos',
					img: 'photo-viewer.png'
				},
				{
					text: 'Safe Plants for Cats',
					url: '/safe-plants-for-cats',
					img: 'safe-plants-for-cats.png',
					bullet: true,
					hideOnMobile: true
				},
				{
					text: 'Gifstori',
					url: '/gifstori',
					img: 'gifstori.png',
					bullet: true
				}
			],
		}
	}
}
</script>

<style lang="scss" scoped>
img {
	width: 15px;
	filter: grayscale(1);

	a:hover & {
		filter: grayscale(0);
	}
}
</style>