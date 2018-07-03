if (/localhost/i.test(window.location.hostname)) {
	const apiUrl = 'http://localhost:80/'
} else {
	const apiUrl = 'https://amirandjake.com/'
}
// const apiUrl = 'http://ec2-54-201-9-185.us-west-2.compute.amazonaws.com/'
export default apiUrl
