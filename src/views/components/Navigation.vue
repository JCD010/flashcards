<template lang="pug">
	nav
		.nav__left
			img(src='/static/flashcards-logo-white.svg').nav__logo
		.nav__right
			img(src='/static/create-icon-white.svg').nav__create-icon
			p.create Create
			a(
				href="/"
			).home.active Home
			p.about About
			p.login Login
			p.signup Sign Up

			.hamburger-menu(
				v-bind:class="{ open }"
				v-on:click="open = !open"
			)
				.bar
				.bar
				.bar

		transition(name="fade")
			.hamburger-menu__container(
				v-if="open === true"
			)
				.hamburger-menu__items
</template>

<script>
export default {
	name: 'navigation',
	data() {
		return {
			open: false,
		}
	},
	methods: {
		// Closes the hamburger menu on window resize
		onResize(event) {
			if (this.open === true) {
				this.open = false
			}
		},
	},
	mounted() {
		// Registers an event listener when the Vue component is ready
		window.addEventListener('resize', this.onResize)
	},
	beforeDestroy() {
		// Unregisters the event listener before destroying this Vue instance
		window.removeEventListener('resize', this.onResize)
	},
}
</script>

<style lang="scss" scoped>
@import '../../../styles/variables';

nav {
	background-color: #E8374D;
	display: flex;
	height: 60px;
}

.nav__left {
	display: flex;
	align-items: center;
}

.nav__right {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: calc(100% - 108px);
	padding-right: 10px;
}

.nav__logo {
	width: 65px;
	margin: 0;
	padding: 14px;
	opacity: 0.9;
	transition: 0.2s all ease;
	cursor: pointer;

	&:hover {
		opacity: 1;
	}
}

.nav__create-icon {
	width: 30px;
	margin: 8px;
	cursor: pointer;

	@media (max-width: $break-mobile) {
		display: none;
	}
}

.home, .create, .about, .login, .signup {
	text-decoration: none;
	color: white;
	font-family: 'Avenir', sans-serif;
	font-weight: 500;
	font-size: 16px;
	letter-spacing: -0.5px;
	margin: 0 8px;
	opacity: 0.8;
	transition: 0.2s all ease;
	line-height: 57px;
	border-bottom: solid 4px transparent;
	cursor: pointer;

	@media (max-width: $break-mobile) {
		display: none;
	}

	&:hover {
		// opacity: 1;
		border-bottom: solid 4px #ffbaba;
	}
}

.active {
	border-bottom: solid 4px #9e4444;
	opacity: 1;

	&:hover {
		border-bottom: solid 4px #9e4444;
	}
}

.create {
	opacity: 1;
	margin-right: 60px;
}

// Hamburger Menu

.hamburger-menu {

	@media (min-width: $break-mobile) {
		display: none;
	}
}

.hamburger-menu {
	transition: .25s ease-in-out;
}

.hamburger-menu .bar {
	width: 26px;
	height: 4px;
	background-color: white;
	opacity: 0.8;
	margin-bottom: 4px;
	transition: .25s ease-in-out;
	margin-right: 12px;
}

.hamburger-menu .bar:nth-child(1) {
	transform-origin: left center;
}

.hamburger-menu .bar:nth-child(2) {
	transform-origin: left center;
}

.hamburger-menu .bar:nth-child(3) {
	transform-origin: left center;
}

.hamburger-menu.open .bar:nth-child(1) {
	transform: rotate(45deg);
	position: relative;
	top: 0;
	left: 0;
}

.hamburger-menu.open .bar:nth-child(2) {
	width: 0%;
	opacity: 0;
}

.hamburger-menu.open .bar:nth-child(3) {
	transform: rotate(-45deg);
	position: relative;
	top: 2px;
	left: 0px;
}

.hamburger-menu__container {
	position: absolute;
	color: white;
	left: 0;
	margin-top: 60px;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.33);

	@media (min-width: $break-mobile) {
		display: none;
	}
}

.hamburger-menu__items {
	height: 250px;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0
}
</style>
