<template>
	<header :class="$style.header">
		<h1>Hello</h1>
		<h2>
			I'm <span>Emmanuel Correa</span>, a front-end focused developer with
			design skills capable of bringing a ui design to life.
		</h2>
		<p>
			Get in touch <span :class="$style.hand">👉</span>
			<a :class="$style.email" href="mailto:ech.emmanuel.ch@gmail.com"
				>Email</a
			>
		</p>
	</header>
</template>

<style module>
.header {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 100vh;
	font-weight: 400;
}
.header h1,
.header h2 {
	font-size: 2.5rem;
	max-width: 700px;
	font-weight: 400;
}
.header h2 {
	line-height: 1.5;
}
@media screen and (max-width: 1024px) {
	.header h1,
	.header h2 {
		font-size: 2.2rem;
	}
}
@media screen and (max-width: 768px) {
	.header h1,
	.header h2 {
		font-size: 2rem;
	}
}
@media screen and (max-width: 550px) {
	.header h1,
	.header h2 {
		font-size: 1.8rem;
	}
}
.header p {
	font-weight: 600;
	font-size: 1.2rem;
}
@media screen and (max-width: 550px) {
	.header p {
		font-size: 1rem;
	}
}
.header span {
	font-weight: 700;
}
.email {
	color: inherit;
}
.hand {
	position: relative;
	top: -3px;
}
</style>