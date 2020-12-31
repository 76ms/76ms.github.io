<template>
	<div id="app">
		<router-view/>
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
				this.$store.commit('posts', arr.map(item => item[1]));
			});
	}
}
</script>

<style lang="scss">
html,
body,
#app {
	height: 100%;
	overflow-x: hidden;
}

body {
	color: #232323;
	background: #232323;
	font-family: "Fira Sans", sans-serif;
}

a,
.cgx-blue {
	color: #5e96ca;
}

.cgx-grey {
	color: #979797;
}

.cgx-white {
	color: #e9eef3;
}

h1,
h2,
h3,
h4,
h5,
h6,
.logo {
	font-family: "Fira Code", monospace;
}

.logo {
	font-size: 2.75rem;
	.cgx-blue {
		font-size: 90%;
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
</style>