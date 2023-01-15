import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import Image from 'next/image';
import { FormikProvider, useFormik } from 'formik';

import LogoImage from 'src/client/images/logo-simple.svg';
import VkIcon from 'src/client/images/vk-logo.svg';
import TelegramIcon from 'src/client/images/telegram-logo.svg';
import EmailIcon from 'src/client/images/email-icon.svg';

import { TextInput } from 'src/client/shared/components/TextInput';

import { useSubscribeHandler, FOOTER_INITIAL_FIELDS, FooterFields } from '.';

const PrimaryButtonBase = tw.button`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;

const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-20 lg:py-24`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const SixColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12`;
const ColumnHeading = tw.h5`uppercase font-bold`;

const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mr-8`;
const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;

const SubscribeNewsletterColumn = tw(
    Column
)`text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`;
const SubscribeNewsletterContainer = tw.div`max-w-sm mx-auto lg:mx-0 `;
const SubscribeText = tw.p`mt-2 lg:mt-6 text-sm font-medium text-gray-600`;
const SubscribeForm = tw.form`mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`;
const Input = tw.input`bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full`;
const SubscribeButton = tw(
    PrimaryButtonBase
)`mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3`;

const Divider = tw.div`my-16 border-b-2 border-gray-300 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw(Image)`w-8`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
    ${tw`cursor-pointer p-2 rounded-full bg-gray-300 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`}
    svg {
        ${tw`w-4 h-4`}
    }
`;

export const Footer = () => {
    const handleSubmit = useSubscribeHandler();

    const formikStateAndHelpers = useFormik<FooterFields>({
        initialValues: FOOTER_INITIAL_FIELDS,
        onSubmit: handleSubmit,
    });

    return (
        <Container>
            <Content>
                <SixColumns>
                    <Column>
                        <ColumnHeading>Навигация</ColumnHeading>
                        <LinksContainer>
                            <Link href="/">Главная</Link>
                            <Link href="/map">Карта</Link>
                            <Link href="/search">Поиск</Link>
                            <Link href="/contact-us">Контакты</Link>
                        </LinksContainer>
                    </Column>
                    <SubscribeNewsletterColumn>
                        <SubscribeNewsletterContainer>
                            <ColumnHeading>
                                Подписывайтесь на наши обновления
                            </ColumnHeading>
                            <SubscribeText>
                                Так вы первыми узнаете о новых спортивных
                                объектах и мероприятиях вашего района
                            </SubscribeText>
                            <FormikProvider value={formikStateAndHelpers}>
                                <SubscribeForm>
                                    <TextInput
                                        name="email"
                                        type="email"
                                        placeholder="Ваша электронная почта"
                                        inputComponent={Input}
                                    />
                                    <SubscribeButton type="submit">
                                        Подписаться
                                    </SubscribeButton>
                                </SubscribeForm>
                            </FormikProvider>
                        </SubscribeNewsletterContainer>
                    </SubscribeNewsletterColumn>
                </SixColumns>
                <Divider />
                <ThreeColRow>
                    <LogoContainer>
                        <LogoImg src={LogoImage} />
                    </LogoContainer>
                    <CopywrightNotice>&copy; 2022 Lalagvana</CopywrightNotice>
                    <SocialLinksContainer>
                        <SocialLink href="https://vk.com">
                            <Image src={VkIcon} />
                        </SocialLink>
                        <SocialLink href="https://telegram.org">
                            <Image src={TelegramIcon} />
                        </SocialLink>
                        <SocialLink href="https://vk.com">
                            <Image src={EmailIcon} />
                        </SocialLink>
                    </SocialLinksContainer>
                </ThreeColRow>
            </Content>
        </Container>
    );
};
