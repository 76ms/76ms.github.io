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
	data () {
		return {
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
					url: '//profiles.wordpress.org/corgux/#content-plugins',
					icon: 'wordpress'
				},
				{
					text: 'CodePen',
					url: '//codepen.io/corgux/',
					icon: 'codepen'
				}
			]
		}
	}
}
</script>