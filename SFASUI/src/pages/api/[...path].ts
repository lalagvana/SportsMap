import { IncomingMessage, ServerResponse } from 'http'
import httpProxy from "http-proxy";

const API_URL = `https://sportsmap.spb.ru`;
const proxy = httpProxy.createProxyServer();
export const config = {
  api: {
    bodyParser: false
  }
};

export default async (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
  return await new Promise<void>((resolve, reject) => {
    proxy.web(req, res, { target: API_URL, changeOrigin: true }, (err) => {
      if (err) {
        return reject(err)
      }
      resolve()
    })
  })
}