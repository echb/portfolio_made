<template>
	<section :class="$style.projects">
		<HomeTitle :class="$style.title" msg="projects" />
		<div>
			<div v-for="project in store.projects" :key="project.name" :class="$style.job">
				<div>
					<a :href="project.url" target="blank">
						<img :class="$style.image" :src="project.img" :alt="project.name" />
					</a>
				</div>
				<figcaption :class="$style.projec_description">
					<a :href="project.url" target="blank">
						<span> {{ project.name }} </span>
					</a>
					<p :class="[
						store.state.isActive ? 'textLight' : 'textDark',
					]">
						{{ project.description }}
					</p>
				</figcaption>
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
.projects {
	display: flex;
}

@media screen and (max-width: 768px) {
	.projects {
		flex-direction: column;
	}
}

.job {
	display: flex;
	word-break: break-word;
	margin-bottom: 100px;
}

.job div {
	overflow: hidden;
	border-radius: 5px;
}

@media screen and (max-width: 768px) {
	.job {
		flex-direction: column;
		align-items: center;
		margin-bottom: 70px;
		padding-left: 50px;
	}
}

.image {
	display: block;
	max-width: 100%;
	transition: transform 0.5s ease-out;
}

.image:hover {
	transform: scale(1.1);
}

.projec_description {
	margin: 0;
	max-width: 170px;
	width: 100%;
	padding-left: 20px;
}

@media screen and (max-width: 768px) {
	.projec_description {
		padding-left: 0;
		max-width: initial;
	}
}

.projec_description a {
	display: inline-block;
	color: inherit;
	text-decoration: none;
	margin: 0;
	font-weight: 600;
	font-size: 19px;
	text-transform: capitalize;
}

@media screen and (max-width: 768px) {
	.projec_description a {
		padding-top: 25px;
	}
}

.projec_description p {
	margin: 0;
}

@media screen and (max-width: 768px) {
	.projec_description p {
		padding-top: 10px;
		flex-direction: column;
		align-items: center;
	}
}
</style>