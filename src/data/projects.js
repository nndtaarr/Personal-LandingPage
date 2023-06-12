// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Singah Kost',
		category: 'UI/UX Design',
		img: require('@/assets/images/singgahkost/singgah1.png'),
		path: 'singgahkost'
	},
	{
		id: 2,
		title: 'Tasty Food',
		category: 'Mobile Application',
		img: require('@/assets/images/tastyfood/1.png'),
		path: 'tastyfood'
	},
	{
		id: 3,
		title: 'Artdya Batik',
		category: 'UI/UX Design',
		img: require('@/assets/images/artdya/1.png'),
		path: 'artdyabatik'
	},
	{
		id: 4,
		title: 'Smart Student',
		category: 'Web Application',
		img: require('@/assets/images/crud/1.png'),
		path: 'crudweb'
	},
	{
		id: 5,
		title: 'Cake Kue',
		category: 'UI/UX Design',
		img: require('@/assets/images/cakekue/1.png'),
		path: 'cakekue'
	},
	{
		id: 6,
		title: 'Arbel Kost',
		category: 'Web Application',
		img: require('@/assets/images/arbelkost/1.png'),
		path: 'arbelkost'
	},
];

export default projects;
