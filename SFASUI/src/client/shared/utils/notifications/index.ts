export const prepareMessage = (error: any, messageText?: string) => {
    return error?.response?.data?.message ? error.response.data.message : messageText;
};
