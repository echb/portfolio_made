<template>
	<section :class="$style.experience">
		<HomeTitle :class="$style.title" msg="Experience" />
		<div :class="$style.jobs">
			<div :class="$style.job">
				<div :class="$style.company">
					<a href="https://www.g4a.mx/" target="blank">
						<h4>G4A</h4>
					</a>
					<span>Feb 2021 - Present</span>
				</div>
				<p :class="[store.state.isActive ? 'textLight' : 'textDark']">
					Front-end developer
				</p>
			</div>
			<a :class="$style.resume" href="CV_English.docx.pdf" target="blank"
				>View My Resume👉
			</a>
		</div>
	</section>
</template>

<script>
import HomeTitle from "./HomeTitle.vue";
import { inject } from "@vue/runtime-core";

// import "";

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
.experience {
	display: flex;
}
@media screen and (max-width: 768px) {
	.experience {
		flex-direction: column;
	}
}
.experience p {
	margin: 0;
}
.jobs {
	width: 100%;
	word-break: break-all;
}
@media screen and (max-width: 768px) {
	.jobs {
		padding-left: 50px;
	}
}
.job {
	margin-bottom: 100px;
}
.company {
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
}
.company a {
	text-decoration: none;
	color: inherit;
}
.company h4 {
	margin: 0;
	font-weight: 900;
}
.company span {
	font-weight: 300;
}
.resume {
	font-size: 18px;
	font-weight: 700;
	color: inherit;
	text-decoration: none;
}
</style>