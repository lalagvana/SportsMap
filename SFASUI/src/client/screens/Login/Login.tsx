import React from 'react';
import { FormikProvider, useFormik, Form } from 'formik';
import tw from 'twin.macro';
import styled from 'styled-components';
import Image from 'next/image';

import { AnimationReveal } from 'src/client/shared/components/AnimationReveal';
import { Container as ContainerBase } from 'src/client/shared/components/Misc/Layouts';
import { TextInput } from 'src/client/shared/components/TextInput';

import logo from 'src/client/images/logo-simple.svg';
import LoginIcon from 'feather-icons/dist/icons/log-in.svg';

import { LoginFields, useLoginHandler, LOGIN_INITIAL_VALUES } from '.';

const Container = tw(ContainerBase)`min-h-screen bg-primary-300 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;
const SubmitButton = styled.button`
    ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
    .icon {
        ${tw`w-6 h-6 -ml-2`}
    }
    .text {
        ${tw`ml-3`}
    }
`;

type LoginPageProps = {
    forgotPasswordUrl?: string;
};

export const Login = ({ forgotPasswordUrl = '#' }: LoginPageProps) => {
    const handleSubmit = useLoginHandler();

    const formikStateAndHelpers = useFormik<LoginFields>({
        initialValues: LOGIN_INITIAL_VALUES,
        onSubmit: handleSubmit,
    });

    return (
        <AnimationReveal>
            <Container>
                <Content>
                    <MainContainer>
                        <LogoLink href="/#">
                            <Image src={logo} tw="h-12 mx-auto" />
                        </LogoLink>
                        <MainContent>
                            <Heading>Войти в SportsMap</Heading>
                            <FormContainer>
                                <FormikProvider value={formikStateAndHelpers}>
                                    <Form>
                                        <TextInput type="email" placeholder="Логин" name="email" />
                                        <TextInput type="password" placeholder="Пароль" name="password" />
                                        <SubmitButton type="submit">
                                            <Image src={LoginIcon} className="icon" />
                                            <span className="text">Войти</span>
                                        </SubmitButton>
                                    </Form>
                                </FormikProvider>
                                <p tw="mt-6 text-xs text-gray-600 text-center">
                                    <a href={forgotPasswordUrl} tw="border-b border-gray-500 border-dotted">
                                        Забыли пароль?
                                    </a>
                                </p>
                            </FormContainer>
                        </MainContent>
                    </MainContainer>
                </Content>
            </Container>
        </AnimationReveal>
    );
};
