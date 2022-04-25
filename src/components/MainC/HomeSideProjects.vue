<template>
	<section :class="$style.projects">
		<HomeTitle :class="$style.title" msg="side projects" />
		<div :class="$style.box">
			<div
				v-for="project in store.sideProjects"
				:key="project.name"
				:class="$style.job"
			>
				<figcaption :class="$style.projec_description">
					<a
						:class="$style.arrow_link"
						:href="project.url"
						target="blank"
					>
						<span> {{ project.name }} </span>
						<HomeArrowSvg />
					</a>
					<p
						:class="[
							store.state.isActive ? 'textLight' : 'textDark',
						]"
					>
						{{ project.description }}
					</p>
					<HomeTechss :techs="project.techs" />
				</figcaption>
				<div :class="$style.job_img">
					<a :href="project.url" target="blank">
						<img
							:class="$style.image"
							:src="project.img"
							:alt="project.name"
						/>
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import HomeTitle from "./HomeTitle.vue";
import HomeTechss from "./HomeTechss.vue";
import HomeArrowSvg from "./HomeArrowSvg.vue";
import { inject } from "@vue/runtime-core";

export default {
	components: {
		HomeTitle,
		HomeTechss,
		HomeArrowSvg,
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
.box {
	width: 100%;
}
.projects {
	display: flex;
}
@media screen and (max-width: 768px) {
	.projects {
		flex-direction: column;
	}
}
.job {
	position: relative;
	word-break: break-word;
	padding-bottom: 70px;
}

@media screen and (max-width: 768px) {
	.job {
		padding-left: 50px;
	}
}
.projec_description {
	margin: 0;
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
	font-size: 17px;
	text-transform: capitalize;
}
@media screen and (max-width: 768px) {
	.projec_description a {
		padding-top: 25px;
	}
}
.arrow_link span {
	position: relative;
	top: -8px;
}
.arrow_link svg {
	color: #007bff;
	position: relative;
	top: -2px;
	transition: transform 0.4s ease-out;
}
.arrow_link:hover > svg {
	transform: translateX(10px);
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
.image {
	display: block;
	max-width: 100%;
}
.job_img {
	overflow: hidden;
	border-radius: 5px;
	margin-top: 10px;
	top: 0;
	left: 0;
	opacity: 0;
	transform: translateY(-50%);
	transform-origin: top;
	max-height: 0;
	transition: opacity 0.4s ease-out, transform 0.4s ease-out,
		max-height 0.4s ease-out;
}
.job:hover > .job_img {
	transform: translateY(0);
	opacity: 1;
	max-height: 500px;
}
</style>