let apiUrl
if (/localhost/i.test(window.location.hostname)) {
  apiUrl = 'http://localhost:80/'
} else {
  // apiUrl = 'https://jakeandamir.app/'
  apiUrl = 'https://lqhr8y7kl0.execute-api.us-west-2.amazonaws.com/prod/'
}
// const apiUrl = 'http://ec2-54-201-9-185.us-west-2.compute.amazonaws.com/'
export default apiUrl
