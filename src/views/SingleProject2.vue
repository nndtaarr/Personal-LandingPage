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
				singleProjectTitle: 'Tasty Food Mobile Application',
				singleProjectDate: 'May 21, 2023',
				singleProjectTag: 'Mobile Application',
			},
			projectImages: [
				{
					id: 1,
					title: 'Tasty Food Mobile Application',
					img: require('@/assets/images/tastyfood/1.png'),
				},
				{
					id: 2,
					title: 'Tasty Food Mobile Application',
					img: require('@/assets/images/tastyfood/2.png'),
				},
				{
					id: 3,
					title: 'Tasty Food Mobile Application',
					img: require('@/assets/images/tastyfood/3.jpg'),
				},
			],
			projectInfo: {
				clientHeading: 'About',
				companyInfos: [
					{
						id: 1,
						title: 'Name',
						details: 'Tasty Food',
					},
					{
						id: 2,
						title: 'Services',
						details: 'Mobile Application',
					},
				],
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'Flutter, Dart, Visual Studio, Android Studio, Canva',
						],
					},
				],
				projectDetailsHeading: 'Detail',
				projectDetails: [
					{
						id: 1,
						details:
							'Tasty Food merupakan aplikasi mobile yang dapat menyediakan informasi mengenai berbagai resep makanan. Dimana pengguna dapat mencari daftar resep berdasarkan kata kunci, kategori, ingredient, area, dan alphabet. Aplikasi ini deilengkapi dengan fitur "My Favorite" yang dapat memudahkan user menyimpan resep makanan yang disukainya. Selain itu, aplikasi ini dilengkapi dengan menu "My Receipes" yang dapat memudahkan user menyimpan recipenya sendiri secara manual.',
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