<template lang="pug">
	div(id="app")
		navigation
		router-view
</template>

<script>
import Navigation from './views/components/Navigation'

export default {
	name: 'app',
	components: {
		Navigation,
	},
}
</script>

<style lang="scss">
@import './styles/libs/modularized-normalize-scss/_normalize.scss';
@import './styles/libs/csswizardry-grids/csswizardry-grids.scss';

body {
	margin: 0;
	padding: 0;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	color: #2c3e50;
}
</style>
