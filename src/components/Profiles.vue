<template>
    <div class="profiles m-auto">
        <span v-for="profile in profiles" :key="profile.text">
            <a :href="profile.url" class="mx-3">
                <span :class="'fa fa-' + profile.icon"></span>
                <span class="sr-only">{{ profile.text }}</span>
            </a>
        </span>
    </div>
</template>

<script>
export default {
	name: 'Profiles',
	computed: {
		profiles () {
			return this.$store.state.profiles;
		}
	}
}
</script>