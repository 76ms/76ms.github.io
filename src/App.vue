<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'App'
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

#app {
	height: 100vh;
}

a {
	transition: color 0.3s;
}

a,
.cgx-blue {
	color: #376fa4;
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

.cgx-dark-grey {
	color: #5e5e5e;
}

.cgx-white {
	color: #e9eef3;
}

.cgx-bg-white {
	background: #e9eef3;
}

.cgx-max-width {
	max-width: 600px;
	margin: 50px auto 100px;
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
</style>