import React from 'react';
import tw from 'twin.macro';
import Image from 'next/image';
import styled from 'styled-components';

import SapiensImg from 'client/images/sapiens-main.svg';

export const WatchVideoButton = styled((props) => <button {...props} />)`
    ${tw`mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-500 transition duration-300 hocus:text-primary-500 focus:outline-none`}
    .playIcon {
        ${tw`stroke-1 w-12 h-12`}
    }
    .playText {
        ${tw`ml-2 font-medium`}
    }
`;

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-10 md:py-5`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

const Heading = tw.h1`text-3xl md:text-5xl leading-snug max-w-3xl font-medium`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;

const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

type TwoColumnWithVideoProps = {
    heading?: string | JSX.Element;
    description?: string | JSX.Element;
    primaryButtonText?: string;
    primaryButtonUrl?: string;
    watchVideoButtonText?: string;
    imageDecoratorBlob?: boolean;
};

export default ({
    heading = '',
    description = '',
    primaryButtonText = 'На карту',
    primaryButtonUrl = '/map',
    watchVideoButtonText = 'Поиск',
}: TwoColumnWithVideoProps) => {
    return (
        <Container>
            <TwoColumn>
                <LeftColumn>
                    <Heading>{heading}</Heading>
                    <Paragraph>{description}</Paragraph>
                    <Actions>
                        <a href={primaryButtonUrl}>
                            <PrimaryButton>{primaryButtonText}</PrimaryButton>
                        </a>
                        <WatchVideoButton>
                            <span className="playText">
                                {watchVideoButtonText}
                            </span>
                        </WatchVideoButton>
                    </Actions>
                </LeftColumn>
                <RightColumn>
                    <IllustrationContainer>
                        <Image priority src={SapiensImg} />
                    </IllustrationContainer>
                </RightColumn>
            </TwoColumn>
        </Container>
    );
};
