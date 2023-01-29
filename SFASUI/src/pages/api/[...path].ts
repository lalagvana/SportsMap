import { IncomingMessage, ServerResponse } from 'http';
import httpProxy from 'http-proxy';
import { cloudApi, serviceClients, Session } from '@yandex-cloud/nodejs-sdk';
import { LogLevel_Level } from '@yandex-cloud/nodejs-sdk/dist/generated/yandex/cloud/logging/v1/log_entry';

const {
    logging: {
        log_ingestion_service: { WriteRequest },
    },
} = cloudApi;

const API_URL = `https://sportsmap.spb.ru`;
const proxy = httpProxy.createProxyServer();
export const config = {
    api: {
        bodyParser: false,
    },
};
const session = new Session({ oauthToken: process.env.OAUTH as string });
const loggerServiceClient = session.client(
    serviceClients.LogIngestionServiceClient
);

proxy.on('error', function (err, req) {
    loggerServiceClient.write(
        WriteRequest.fromPartial({
            destination: {
                logGroupId: process.env.LOG_GROUP_ID as string,
            },
            entries: [
                {
                    message: req.url,
                    timestamp: new Date(),
                    level: LogLevel_Level.ERROR,
                    jsonPayload: { error: err },
                },
            ],
        })
    );
});

proxy.on('proxyRes', function (proxyRes, req, res) {
    let body: any = [];
    proxyRes.on('data', function (chunk) {
        body.push(chunk);
    });
    proxyRes.on('end', function () {
        loggerServiceClient.write(
            WriteRequest.fromPartial({
                destination: {
                    logGroupId: process.env.LOG_GROUP_ID as string,
                },
                entries: [
                    {
                        message: req.url,
                        timestamp: new Date(),
                        level: LogLevel_Level.INFO,
                        jsonPayload: {
                            res: body,
                            statusCode: res.statusCode,
                            reqHeaders: req.headers,
                            resHeaders: res.getHeaders(),
                        },
                    },
                ],
            })
        );

        res.end(body);
    });
});

export default async (
    req: IncomingMessage,
    res: ServerResponse<IncomingMessage>
) => {
    return await new Promise<void>((resolve, reject) => {
        proxy.web(req, res, { target: API_URL, changeOrigin: true }, (err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
};
