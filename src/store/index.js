import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		loading: true,
		posts: [],
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
				url: '//codepen.io/corgux/',
				icon: 'codepen'
			}
		]
	},
	mutations: {
		posts (state, posts) {
			state.posts = posts;
		},
		loading (state, loading) {
			state.loading = loading;
		},
	},
	actions: {
	},
	modules: {
	}
})
