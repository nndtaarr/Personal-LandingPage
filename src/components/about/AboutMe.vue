<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'An undergraduate student at University of Pembangunan Nasional "Veteran" Yogyakarta, majoring in Informatics with a creative and innovative interest in graphic design, websites, and developing mobile apps. Experienced in application data processing, data exploration analysis, and machine learning using Pyhton after completing the Bootcamp Sanbercode of Data Science Program. Highly determined individual, quick adapting and flexibility, quick problem-solving and good time-management, and responsible for my work.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/bagus.png"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
				
			</p>
			
		</div>
	</div>
</template>
