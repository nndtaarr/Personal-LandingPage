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
				singleProjectTitle: 'Arbel Kost',
				singleProjectDate: 'Nov 25, 2021',
				singleProjectTag: 'Web Application',
			},
			projectImages: [
				{
					id: 1,
					title: 'Arbel Kost Web Application',
					img: require('@/assets/images/arbelkost/1.png'),
				},
				{
					id: 2,
					title: 'Arbel Kost Web Application',
					img: require('@/assets/images/arbelkost/2.png'),
				},
				{
					id: 3,
					title: 'Arbel Kost Web Application',
					img: require('@/assets/images/arbelkost/3.png'),
				},
			],
			projectInfo: {
				clientHeading: 'About',
				companyInfos: [
					{
						id: 1,
						title: 'Name',
						details: 'Arbel Kost',
					},
					{
						id: 2,
						title: 'Services',
						details: 'Web Application',
					},
				],
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'PHP, Mysql, Visual Studio Code, Xampp',
						],
					},
				],
				projectDetailsHeading: 'Detail',
				projectDetails: [
					{
						id: 1,
						details:
							'Arbel Kost merupakan website untuk melakukan pencarian kost putri yang tersedia di Yogyakarta. website ini menyediakan informasi kost mengenai ketersediaan kamar ( foto kamar, harga kamar),  pembayaran, dan keluhan yang dapat diinputkan oleh user. Arbel Kost ini dikelola oleh admin untuk dapat mengakses segala informasi yang masuk dari penyewa kost seperti memverifikasi pembayaran, keluhan, dan mengupdate ketersediaan dan infromasi kamar kost. Arbel Kost ini dirancang menggunakan bahasa pemrograman PHP dan dan penyimpanan database melalui Mysql.',
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