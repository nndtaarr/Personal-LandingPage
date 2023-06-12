<script>
export default {
	props: ['program'],
};
</script>

<template>
	<div>
		<img
			:src="program.img"
			:alt="program.title"
		/>
	</div>
</template>

<style lang="scss" scoped></style>
