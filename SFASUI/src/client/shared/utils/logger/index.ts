import { LogLevel_Level } from '@yandex-cloud/nodejs-sdk/dist/generated/yandex/cloud/logging/v1/log_entry';

export const getLogStatus = (statusMessage: number) => {
    const statusMessageString = statusMessage.toString();

    // любые пятисотки
    if (statusMessageString[0] === '5') {
        return LogLevel_Level.ERROR;
    }

    // ошибки вроде 404
    if (statusMessageString[0] === '4') {
        return LogLevel_Level.WARN;
    }

    return LogLevel_Level.INFO;
};
