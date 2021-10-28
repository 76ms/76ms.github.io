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
					url: '//twitter.com/idouxui',
					icon: 'twitter'
				},
				{
					text: 'GitHub',
					url: '//github.com/idouxui',
					icon: 'github'
				},
				{
					text: 'SoundCloud',
					url: '//soundcloud.com/idouxui',
					icon: 'soundcloud'
				},
				{
					text: 'CodePen',
					url: '//codepen.io/idouxui/',
					icon: 'codepen'
				}
			]
		}
	}
}
</script>