<template>
	<div class="darkButton">
		<img
			src="https://iconoir.com/source/icons/half-moon.svg"
			alt=""
			:class="[store.state.isActive ? '' : 'imgDark']"
		/>
		<div
			@click="store.methods.toggleBtn()"
			class="pillDark"
			:class="[store.state.isActive ? 'pillDarkActive' : '']"
		>
			<div
				class="round"
				:class="[store.state.isActive ? 'activeDarkPill' : '']"
			></div>
		</div>
		<img
			src="https://iconoir.com/source/icons/sun-light.svg"
			alt=""
			:class="[store.state.isActive ? '' : 'imgDark']"
		/>
	</div>
</template>

<script>
import { inject } from "@vue/runtime-core";

export default {
	setup() {
		const store = inject("store");
		return {
			store,
		};
	},
};
</script>

<style>
.darkButton {
	display: inline-flex;
	justify-content: flex-end;
	position: absolute;
	width: auto;
	float: right;
	top: 30px;
	right: 30px;
}
.imgDark {
	filter: invert(1);
}
.pillDark {
	cursor: pointer;
	width: 45px;
	height: 25px;
	background: #bae67e;
	display: block;
	border-radius: 100px;
	position: relative;
	transition: background-color 0.2s ease-out;
	margin-left: 10px;
	margin-right: 10px;
}
.pillDarkActive {
	background: gray;
}
.round {
	transition: transform 0.2s ease-out, background-color 0.2s ease-out;
	position: absolute;
	top: 3px;
	left: 3px;
	width: 19px;
	height: 19px;
	background-color: #fff;
	border-radius: 100%;
}
.activeDarkPill {
	transform: translateX(100%);
}
.activeDark {
	background-color: #fff;
	color: #444452;
}
</style>