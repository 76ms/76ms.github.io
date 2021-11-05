<template>
    <div class="profiles mx-auto mb-4">
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
					url: '//twitter.com/uxuims',
					icon: 'twitter'
				},
				{
					text: 'GitHub',
					url: '//github.com/uxuims',
					icon: 'github'
				},
				{
					text: 'SoundCloud',
					url: '//soundcloud.com/uxuims',
					icon: 'soundcloud'
				},
				{
					text: 'CodePen',
					url: '//codepen.io/uxuims/',
					icon: 'codepen'
				}
			]
		}
	}
}
</script>