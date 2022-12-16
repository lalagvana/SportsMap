import React from 'react';
import { GetServerSideProps, NextPage } from 'next';

import { ContactUs } from 'client/screens/ContactUs';

import NextError from 'src/pages/_error';

type ContactUsPageProps = {
    data?: any;
    error?: any;
};

export const getServerSideProps: GetServerSideProps<
    ContactUsPageProps
> = async () => {
    return {
        props: {},
    };
};

const ContactUsPage: NextPage<ContactUsPageProps> = ({
    data,
    error,
}: ContactUsPageProps) => {
    if (error) {
        return <NextError statusCode={500} />;
    }

    return <ContactUs {...data} />;
};

export default ContactUsPage;
