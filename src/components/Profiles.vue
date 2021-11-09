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
					url: '//twitter.com/_76ms',
					icon: 'twitter'
				},
				{
					text: 'GitHub',
					url: '//github.com/76ms',
					icon: 'github'
				},
				{
					text: 'CodePen',
					url: '//codepen.io/76ms/',
					icon: 'codepen'
				},
				{
					text: 'SoundCloud',
					url: '//soundcloud.com/76ms',
					icon: 'soundcloud'
				}
			]
		}
	}
}
</script>