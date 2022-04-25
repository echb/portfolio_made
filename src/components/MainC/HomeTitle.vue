<template>
	<div>
		<h3 :class="$style.title">{{ msg }}</h3>
	</div>
</template>

<script>
export default {
	props: {
		msg: String,
	},
};
</script>

<style module>
.title {
	font-size: 18px;
	margin: 0;
	padding: 0;
	width: 200px;
	margin-right: 70px;
	text-transform: uppercase;
	color: #007bff;
	text-align: right;
	letter-spacing: 2px;
	position: sticky;
	top: 20px;
}
@media screen and (max-width: 1024px) {
	.title {
		margin-right: 50px;
		width: 150px;
	}
}
@media screen and (max-width: 768px) {
	.title {
		text-align: left;
		width: initial;
		margin: 0;
		width: auto;
		margin-bottom: 30px;
	}
}
</style>