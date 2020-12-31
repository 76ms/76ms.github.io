import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		posts: []
	},
	mutations: {
		posts (state, posts) {
			state.posts = posts;
		},
	},
	actions: {
	},
	modules: {
	}
})
