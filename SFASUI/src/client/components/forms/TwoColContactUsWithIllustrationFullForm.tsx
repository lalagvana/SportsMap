import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

import {
    SectionHeading,
    Subheading as SubheadingBase,
} from 'client/components/misc/Headings';
import { PrimaryButton as PrimaryButtonBase } from 'client/components/misc/Buttons';
import EmailIllustrationSrc from 'client/images/sapiens-contact.svg';
import { FormProps } from 'client/components/forms/types';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-10`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-full md:h-auto`;
const TextColumn = styled(Column)(({ textOnLeft }: { textOnLeft: boolean }) => [
    tw`md:w-7/12 mt-16 md:mt-0`,
    textOnLeft
        ? tw`md:mr-12 lg:mr-16 md:order-first`
        : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div(({ imageSrc }: { imageSrc: string }) => [
    `background-image: url("${imageSrc}");`,
    tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
    SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
const Textarea = styled(Input).attrs({ as: 'textarea' })`
    ${tw`h-24`}
`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

export default ({
    subheading = 'Контакты',
    heading = (
        <>
            Как с нами<span tw="text-primary-500"> связаться?</span>
            <wbr />
        </>
    ),
    description = 'Просто отправьте нам письмо с вашими пожеланиями и обратным почтовым адресом, и мы обязательно вам ответим!',
    submitButtonText = 'Отправить',
    formAction = '#',
    formMethod = 'get',
    textOnLeft = true,
}: FormProps) => {
    return (
        <Container>
            <TwoColumn>
                <ImageColumn>
                    <Image imageSrc={EmailIllustrationSrc} />
                </ImageColumn>
                <TextColumn textOnLeft={textOnLeft}>
                    <TextContent>
                        {subheading && <Subheading>{subheading}</Subheading>}
                        <Heading>{heading}</Heading>
                        {description && (
                            <Description>{description}</Description>
                        )}
                        <Form action={formAction} method={formMethod}>
                            <Input
                                type="email"
                                name="email"
                                placeholder="Ваш адрес электронной почты"
                            />
                            <Input
                                type="text"
                                name="name"
                                placeholder="Ваше имя"
                            />
                            <Textarea
                                name="message"
                                placeholder="Ваше пожелание/предложение"
                            />
                            <SubmitButton type="submit">
                                {submitButtonText}
                            </SubmitButton>
                        </Form>
                    </TextContent>
                </TextColumn>
            </TwoColumn>
        </Container>
    );
};
