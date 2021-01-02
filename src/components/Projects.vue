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
	computed: {
		projects () {
			return this.$store.state.projects;
		}
	}
}
</script>