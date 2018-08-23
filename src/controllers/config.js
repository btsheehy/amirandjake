let apiUrl
if (/localhost/i.test(window.location.hostname)) {
	apiUrl = 'http://localhost:80/'
} else {
	apiUrl = 'https://jakeandamir.app/'
}
// const apiUrl = 'http://ec2-54-201-9-185.us-west-2.compute.amazonaws.com/'
export default apiUrl
