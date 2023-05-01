import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { FormikProvider, useFormik } from 'formik';

import { SectionHeading, Subheading as SubheadingBase } from 'src/client/shared/components/Misc/Headings';
import { PrimaryButton as PrimaryButtonBase } from 'src/client/shared/components/Misc/Buttons';
import EmailIllustrationSrc from 'src/client/images/sapiens-contact.svg';
import { TextArea } from 'src/client/shared/components/TextArea';
import { TextInput } from 'src/client/shared/components/TextInput/TextInput';

import {
    FormFields,
    FormProps,
    FORM_INITIAL_VALUES,
    useSendEmailHandler,
} from 'src/client/screens/ContactUs/components/Form';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-10`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-full md:h-auto`;
const TextColumn = styled(Column)(({ textOnLeft }: { textOnLeft: boolean }) => [
    tw`md:w-7/12 mt-16 md:mt-0`,
    textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div(({ imageSrc }: { imageSrc: { src: string } }) => [
    `background-image: url("${imageSrc.src}");`,
    tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
    SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const FormBase = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

export const Form = ({ textOnLeft = true }: FormProps) => {
    const handleSubmit = useSendEmailHandler();

    const formikStateAndHelpers = useFormik<FormFields>({
        initialValues: FORM_INITIAL_VALUES,
        onSubmit: handleSubmit,
    });

    return (
        <Container>
            <TwoColumn>
                <ImageColumn>
                    <Image imageSrc={EmailIllustrationSrc} />
                </ImageColumn>
                <TextColumn textOnLeft={textOnLeft}>
                    <TextContent>
                        <Subheading>Контакты</Subheading>
                        <Heading>
                            Как с нами
                            <span tw="text-primary-500"> связаться?</span>
                            <wbr />
                        </Heading>
                        <Description>
                            Просто отправьте нам письмо с вашими пожеланиями и обратным почтовым адресом, и мы
                            обязательно вам ответим!
                        </Description>
                        <FormikProvider value={formikStateAndHelpers}>
                            <FormBase>
                                <TextInput
                                    type="email"
                                    name="email"
                                    placeholder="Ваш адрес электронной почты"
                                />
                                <TextInput type="text" name="name" placeholder="Ваше имя" />
                                <TextArea name="message" placeholder="Ваше пожелание/предложение" />
                                <SubmitButton type="submit">Отправить</SubmitButton>
                            </FormBase>
                        </FormikProvider>
                    </TextContent>
                </TextColumn>
            </TwoColumn>
        </Container>
    );
};
