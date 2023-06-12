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
				singleProjectTitle: 'Singgah Kost UI Design',
				singleProjectDate: 'Jan 2, 2022',
				singleProjectTag: 'UI / Frontend',
			},
			projectImages: [
				{
					id: 1,
					title: 'Singgah Kost UI Design',
					img: require('@/assets/images/singgahkost/singgah1.png'),
				},
				{
					id: 2,
					title: 'Singgah Kost UI Design',
					img: require('@/assets/images/singgahkost/singgah2.png'),
				},
				{
					id: 3,
					title: 'Singgah Kost UI Design',
					img: require('@/assets/images/singgahkost/singgah3.jpg'),
				},
			],
			projectInfo: {
				clientHeading: 'About',
				companyInfos: [
					{
						id: 1,
						title: 'Name',
						details: 'Singgah Kost',
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
							'Singgah Kost merupakan aplikasi yang dapat memudahkan user dalam mencari kost dengan harga yang terjangkau. Aplikasi ini memiliki target yaitu mahasiswa. Aplikasi ini akan memberikan rekomendasi kos murah berdasarkan lokasi yang dicari. Selain itu aplikasi ini juga banyak memberikan voucer atau dikson. Aplikasi ini terdapat 5 navbar dengan berbagai fungsinya masing-masing. Menu dari singgah kost ini adalah menu home, search, favorite, chat, dan profile.',
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