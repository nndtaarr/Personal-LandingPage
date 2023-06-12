<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';


export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,

	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'Artdya Batik UI Design',
				singleProjectDate: 'Dec 9, 2021',
				singleProjectTag: 'UI / Frontend',
			},
			projectImages: [
				{
					id: 1,
					title: 'Artdya Batik UI Design',
					img: require('@/assets/images/artdya/1.png'),
				},
				{
					id: 2,
					title: 'Artdya Batik UI Design',
					img: require('@/assets/images/artdya/2.png'),
				},
				{
					id: 3,
					title: 'Artdya Batik UI Design',
					img: require('@/assets/images/artdya/3.jpg'),
				},
			],
			projectInfo: {
				clientHeading: 'About',
				companyInfos: [
					{
						id: 1,
						title: 'Name',
						details: 'Artdya Batik',
					},
					{
						id: 2,
						title: 'Services',
						details: 'UI Design & Frontend Development',
					},
				],
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'Figma',
						],
					},
				],
				projectDetailsHeading: 'Detail',
				projectDetails: [
					{
						id: 1,
						details:
							'Artdya Batik merupakan aplikasi yang dapat memudahkan user dalam mencari dan melakukan jual beli batik di area jogja. Artdya batik menyajikan berbagai batik dari pakaian, celana, dan juga kain. Artdya Batik dilengkapi dengan fitur home, explore, cart, offer, dan account yang dapat memudahkan user dalam mencari dan akses menu yang terdapat pada aplikasi tersebut.',
					},
					
				],
				socialSharingsHeading: 'Share This',
				socialSharings: [
					{
						id: 1,
						name: 'Twitter',
						icon: 'twitter',
						url: 'https://twitter.com/cimolmaniez',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: 'instagram',
						url: 'https://instagram.com/ady.ry',
					},
					{
						id: 3,
						name: 'Github',
						icon: 'github',
						url: 'https://github.com/nndtaarr',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: 'linkedin',
						url: 'https://linkedin.com/',
					},
					{
						id: 5,
						name: 'Youtube',
						icon: 'youtube',
						url: 'https://www.youtube.com/@ninditaardya3349',
					},
				],
			},
			
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		
	</div>
</template>

<style scoped></style>