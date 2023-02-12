export const prepareMessage = (error: any, messageText: string) => {
    return error?.response?.data?.message ? `${messageText}: ${error.response.data.message}` : messageText;
};
