<template>
	<section :class="$style.experience">
		<HomeTitle :class="$style.title" msg="Experience" />
		<div :class="$style.jobs">
			<div v-for="job in store.jobs" :key="job.id" :class="$style.company">
				<div>
					<a :href="job.url" target="blank">
						<h4>{{ job.name }}</h4>
					</a>
					<span>{{ job.date }}</span>
				</div>
				<p :class="[store.state.isActive ? 'textLight' : 'textDark']">
					{{ job.role }}
				</p>
			</div>
			<a :class="$style.resume" href="CV_English.docx.pdf" target="blank">View My Resume👉
			</a>
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
		console.log(store);
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
	margin-bottom: 100px;
}

@media screen and (max-width: 768px) {
	.jobs {
		padding-left: 50px;
	}
}

.company {
	display: flex;
	justify-content: space-between;
	margin-bottom: 30px;
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