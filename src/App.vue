<template>
	<div id="app">
		<HomePage />
	</div>
</template>

<script>
import HomePage from './views/Home.vue'
export default {
	name: 'App',
	components: {
		HomePage
	}
}
</script>

<style lang="scss">
body {
	color: #232323;
	background: white url("./assets/triangles.png");
	background-size: cover;
	background-position: center;
	font-family: sans-serif;
}

@keyframes fade-in {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

#app {
	overflow-x: hidden;
	height: 100vh;
	animation: fade-in 2s;
}

a {
	transition: color 0.3s;
}

a,
.cgx-blue {
	color: #376fa4;
}

.cgx-grey {
	color: #575353;
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
	color: #6b7681;
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

	max-width: 240px;
	.hide-on-mobile {
		display: none;
	}

	@media (min-width: 500px) {
		max-width: 580px;
		.hide-on-mobile {
			display: initial;
		}
	}

	a {
		text-decoration: none;
		font-size: 0.9rem;
		transition: color 0.3s;
		text-shadow: 0 1px 2px rgba(255, 255, 255, 0.2);
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
		text-decoration: none;
		&:hover {
			@extend .cgx-white;
		}
		@extend .cgx-grey;
	}

	.sr-only {
		color: #232323;
	}
}
</style>