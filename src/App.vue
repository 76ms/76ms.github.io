<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {
	mounted () {
		firebase.database()
			.ref('posts')
			.once('value')
			.then((data) => {
				if(!data.val()) return;
				// Change to array of objects
				const arr = Object.entries(data.val());
				this.$store.commit(
					'posts',
					arr
						.map(item => item[1])
						.filter(post => !post.draft)
						.sort((a, b) => (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0))
				);
			});
	}
}
</script>

<style lang="scss">
body {
	color: #232323;
	background: #232323;
	font-family: sans-serif;
}

#app {
	overflow-x: hidden;
}

@media (max-width: 991px) {
	#app {
		min-height: 100vh;
	}
}

@media (min-width: 992px) {
	#app {
		height: 100vh;
	}

	.site-header {
		max-width: 450px;
	}
}

.loading {
	margin-top: 150px;
}

a {
	transition: color 0.3s;
}

a,
.cgx-blue {
	color: #5e96ca;
}

.cgx-grey {
	color: #979797;
}

.cgx-bg-grey {
	background: #979797;
}

.cgx-light-grey {
	color: #e0e0e0;
}

.cgx-bg-light-grey {
	background: #e0e0e0;
}

.cgx-white {
	color: #e9eef3;
}

.cgx-bg-white {
	background: #e9eef3;
}

h1,
h2,
h3,
h4,
h5,
h6,
.logo {
	font-family: monospace;
}

.logo {
	font-size: 2.75rem;
	.cgx-blue {
		font-size: 90%;
	}
	a {
		text-decoration: none;
	}
}

.projects {
	@extend .cgx-grey;

	max-width: 300px;

	a {
		text-decoration: none;
		font-size: 0.9rem;
		transition: color 0.3s;
		&:hover {
			@extend .cgx-white;
		}
		@extend .cgx-grey;
	}
}

.profiles {
	max-width: 300px;
	font-size: 1.3rem;

	a {
		&:hover {
			@extend .cgx-white;
		}
		@extend .cgx-grey;
	}
}

.post-wrapper {
	overflow-y: auto;
	min-height: calc(100vh - 196px);
}

.post {
	margin: 50px auto 100px;
	max-width: 600px;

	img {
		display: block;
		max-width: 100%;
		height: auto;
	}
}

.date,
.tag {
	font-size: 0.8rem;
	color: #808080;
	text-decoration: none;
}
</style>