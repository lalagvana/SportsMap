import React from 'react';

const Error = ({ statusCode }: { statusCode: number }) => <p>Ошибка, статус: {statusCode}</p>;

export default Error;
