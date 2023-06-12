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
				singleProjectTitle: 'Smart Student',
				singleProjectDate: 'Jul 26, 2021',
				singleProjectTag: 'Web Application',
			},
			projectImages: [
				{
					id: 1,
					title: 'Smart Student Web Application',
					img: require('@/assets/images/crud/1.png'),
				},
				{
					id: 2,
					title: 'Smart Student Web Application',
					img: require('@/assets/images/crud/2.png'),
				},
				{
					id: 3,
					title: 'Smart Student Web Application',
					img: require('@/assets/images/crud/3.png'),
				},
			],
			projectInfo: {
				clientHeading: 'About',
				companyInfos: [
					{
						id: 1,
						title: 'Name',
						details: 'Smart Student',
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
							'Smart Student merupakan website crud untuk merekap data mahasiswa Fakultas Teknik  Indutsri pada UPN Veteran Yogyakarta. Website ini mampu menampilkan data, menambahkan data, edit data, dan hapus data mahasiswa yang diinputkan. Website ini dirancang menggunakan bahasa pemrograman php, dan penyimpanan database melalui Mysql.',
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