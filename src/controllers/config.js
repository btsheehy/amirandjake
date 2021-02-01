import axios from 'axios'

const getType = (val) => {
  if (val === null) return 'Null'
  if (val === undefined) return 'Undefined'
  return Object.prototype.toString.call(val).slice(8, -1)
}

const toCamelCase = (str) =>
  str
    .split('_')
    .reduce(
      (acc, val) =>
        acc
          ? acc + val.charAt(0).toUpperCase() + val.slice(1)
          : val.charAt(0).toLowerCase() + val.slice(1),
      null
    )

const toSnakeCase = (str) =>
  str
    .split(/(?=[A-Z])/)
    .map((x) => x.toLowerCase())
    .join('_')

const convertKeys = (convertFn) => (data) => {
  if (getType(data) === 'Object') {
    const newObj = {}
    Object.keys(data).forEach(
      (key) => (newObj[convertFn(key)] = convertKeys(convertFn)(data[key]))
    )
    return newObj
  } else if (getType(data) === 'Array') return data.map(convertKeys(convertFn))
  return data
}

const camelizeData = convertKeys(toCamelCase)
const snakeCaseData = convertKeys(toSnakeCase)

axios.interceptors.response.use((res) => camelizeData(res.data))
axios.interceptors.request.use((req) => ({
  ...req,
  data: snakeCaseData(req.data),
}))

const apiUrl = 'https://lqhr8y7kl0.execute-api.us-west-2.amazonaws.com/prod/'

// const apiUrl = /localhost/i.test(window.location.hostname)
//   ? 'http://localhost:80/'
// : 'https://lqhr8y7kl0.execute-api.us-west-2.amazonaws.com/prod/'
export default apiUrl
