<template>
	<section :class="$style.skills">
		<HomeTitle :class="$style.title" msg="skills" />
		<div :class="$style.skillsBox">
			<div v-for="skill in store.skills" :key="skill">
				<h3>{{ skill.name }}</h3>
				<ul>
					<li
						:class="[
							store.state.isActive ? 'textLight' : 'textDark',
						]"
						v-for="nameSkill in skill.skillName"
						:key="nameSkill"
					>
						{{ nameSkill }}
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
import HomeTitle from "./HomeTitle.vue";
import { inject } from "@vue/runtime-core";

export default {
	components: {
		HomeTitle,
	},
	setup() {
		const store = inject("store");
		return {
			store,
		};
	},
};
</script>

<style module>
.skills {
	display: flex;
	justify-content: flex-start;
}
@media screen and (max-width: 768px) {
	.skills {
		flex-direction: column;
	}
}
.skillsBox {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	row-gap: 20px;
	column-gap: 50px;
	width: 100%;
}
@media screen and (max-width: 768px) {
	.skillsBox {
		padding-top: 30px;
		padding-left: 50px;
	}
}
.skillsBox h3 {
	margin: 0;
}
.skillsBox ul {
	margin: 0;
	padding: 0;
	list-style: none;
}
.skillsBox ul li {
	text-transform: capitalize;
}
</style>
