<template>
	<ToggleDark />
	<HomeIntro />
	<HomeSkills />
	<HomeExperience />
	<HomeProjects />
	<HomeSideProjects />
	<HomeFooter />
</template>

<script>
import ToggleDark from "../ToggleDark.vue";
import HomeIntro from "./HomeIntro.vue";
import HomeSkills from "./HomeSkills.vue";
import HomeExperience from "./HomeExperience.vue";
import HomeProjects from "./HomeProjects.vue";
import HomeSideProjects from "./HomeSideProjects.vue";
import HomeFooter from "./HomeFooter.vue";

export default {
	components: {
		HomeIntro,
		HomeSkills,
		HomeExperience,
		HomeProjects,
		HomeSideProjects,
		ToggleDark,
		HomeFooter,
	},
};
</script>
<style module>
.dark {
	color: red;
}
</style>