import httpProxy from 'http-proxy'

const API_URL = `https://sportsmap.spb.ru/api`
const proxy = httpProxy.createProxyServer()

export default (req, res) => {
  return new Promise((resolve, reject) => {
    proxy.web(req, res, { target: API_URL, changeOrigin: true }, (err) => {
      if (err) {
        return reject(err)
      }
      resolve()
    })
  })
}