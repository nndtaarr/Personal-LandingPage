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
				singleProjectTitle: 'Cake Kue UI Design',
				singleProjectDate: 'Dec 30, 2021',
				singleProjectTag: 'UI / Frontend',
			},
			projectImages: [
				{
					id: 1,
					title: 'Cake Kue UI Design',
					img: require('@/assets/images/cakekue/1.png'),
				},
				{
					id: 2,
					title: 'Cake Kue UI Design',
					img: require('@/assets/images/cakekue/2.png'),
				},
				{
					id: 3,
					title: 'Cake Kue UI Design',
					img: require('@/assets/images/cakekue/3.png'),
				},
			],
			projectInfo: {
				clientHeading: 'About',
				companyInfos: [
					{
						id: 1,
						title: 'Name',
						details: 'Cake Kue',
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
							'Cake Kue merupakan aplikasi penjualan roti yang didesain menggunakan palet warna yang menarik, sesuai dengan merek bakery untuk dapat menarik perhatian user. Cake Kue memiliki halaman utama dengan tampilan gambar dan juga logo. Cake Kue menyertakan navigasi yang jelas dan mudah diakses untuk memungkinkan pengguna melihat kategori produk roti yang berbeda, seperti roti tawar, roti manis, kue, dan lain sebagainya. Cake Kue dilengkapi dengan fitur pengantaran, pencarian produk, kategori produk, detail produk, keranjang produk, dsb.',
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