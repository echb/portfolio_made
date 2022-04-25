<template>
	<div>
		<Home />
	</div>
</template>

<script>
import Home from "@/components/MainC/Home.vue";
import store from "./store/store.js";
import { provide } from "@vue/runtime-core";

export default {
	components: {
		Home,
	},
	setup() {
		provide("store", store);
	},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800;900&display=swap");
::selection {
	background-color: #ffdc00;
	color: #000;
}
:root {
	--normal_button_bg: #808080;
	--dark_button_bg: #bae67e;
	--normal_body_bg: #ffffff;
	--dark_body_bg: #171c28;
	--normal_text_color: #444452;
	--dark_text_color: #e7e7e7;
	--dark_lighr_text_color: #afafbf;
	--blue_text_color: #007bff;
}
* {
	box-sizing: border-box;
	font-family: "Nunito", sans-serif;
}
html {
	font-size: 16px;
}
body {
	margin: 0;
	padding: 0;
	background-color: var(--dark_body_bg);
	color: var(--dark_text_color);
	transition: background-color 0.3s ease-out;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	max-width: 1440px;
	margin-left: auto;
	margin-right: auto;
}
#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
header,
section {
	padding: 100px 170px;
}
@media screen and (max-width: 1280px) {
	header,
	section {
		padding: 100px;
	}
}
@media screen and (max-width: 1024px) {
	header,
	section {
		padding: 50px;
	}
}
@media screen and (max-width: 480px) {
	header,
	section {
		padding: 50px 35px;
	}
}
.textLight {
	color: #444452;
}
.textDark {
	color: #b0b0b0;
}
</style>
