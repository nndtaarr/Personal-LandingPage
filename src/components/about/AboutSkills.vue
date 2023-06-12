<script>
import AboutSkillSingle from './AboutSkillSingle.vue';


export default {
	components: {
    AboutSkillSingle,
},
	data: () => {
		return {
			skillsHeading: 'Explore Our Skills',
			skill: [
				{
					id: 1,
					title: 'UX/UI Design',
					img: require('@/assets/images/skill1.png'),
				},
				{
					id: 2,
					title: 'Android Development',
					img: require('@/assets/images/skill2.png'),
				},
				{
					id: 3,
					title: 'Web Technologies',
					img: require('@/assets/images/skill3.png'),
				},
				{
					id: 4,
					title: 'Data Analyst',
					img: require('@/assets/images/skill4.png'),
				},
			],
			programsHeading: 'Programming Language',
			programs: [
				{
					id: 1,
					title: 'PHP',
					img: require('@/assets/images/program/1.png'),
				},
				{
					id: 2,
					title: 'HTML',
					img: require('@/assets/images/program/2.png'),
				},
				{
					id: 3,
					title: 'C++',
					img: require('@/assets/images/program/3.png'),
				},
				{
					id: 4,
					title: 'Java',
					img: require('@/assets/images/program/4.png'),
				},
				{
					id: 5,
					title: 'R',
					img: require('@/assets/images/program/5.png'),
				},
				{
					id: 6,
					title: 'Python',
					img: require('@/assets/images/program/6.png'),
				},
				{
					id: 7,
					title: 'Dart',
					img: require('@/assets/images/program/8.png'),
				},
			],
		};
	},
};
</script>

<template>
	
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ skillsHeading }}
		</p>	
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutSkillSingle
				v-for="program in skill"
				:key="program.id"
				:program="program"
			/>
		</div>
	</div>
	
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ programsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutSkillSingle
				v-for="program in programs"
				:key="program.id"
				:program="program"
			/>
		</div>
	</div>


	
</template>
