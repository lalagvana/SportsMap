import React from 'react';
import styled, { CSSProp } from 'styled-components';
import tw from 'twin.macro';
import Image from 'next/image';

import ArrowRightIcon from 'client/images/arrow-right-icon.svg';
import { CardType } from 'client/components/features/types';

export const SectionHeading = tw.h2`text-4xl sm:text-5xl font-medium tracking-wide text-center`;
export const SubheadingBase = tw.h5`font-medium text-primary-500`;
export const ContentWithPaddingXl = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
export const SectionDescription = tw.p`mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl`;
const Container = tw.div`relative mt-10`;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;
const ThreeColumnContainer = styled.div`
    ${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;
const Column = styled.div`
    ${tw`lg:w-1/4 max-w-xs`}
`;

const Card = styled.a`
    ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
    .imageContainer {
        ${tw`text-center rounded-full p-4 bg-gray-100`}
        img {
            ${tw`w-8 h-8`}
        }
    }

    .title {
        ${tw`mt-4 font-bold text-xl leading-none`}
    }

    .description {
        ${tw`mt-4 text-sm font-medium text-secondary-300`}
    }

    .link {
        ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300`}
        .icon {
            ${tw`ml-2 w-4`}
        }
    }
`;

type ThreeColSimpleProps = {
    cards?: CardType[];
    linkText?: string;
    heading?: string | JSX.Element;
    subheading?: string | JSX.Element;
    description?: string;
    imageContainerCss: CSSProp | null;
    imageCss: CSSProp | null;
};

export default ({
    cards = [
        {
            // imageSrc: ShieldIconImage,
            title: 'Secure',
            description:
                'We strictly only deal with vendors that provide top notch security.',
            url: 'https://timerse.com',
        },
    ],
    linkText = '',
    heading = '',
    subheading = '',
    description = '',
    imageContainerCss = null,
    imageCss = null,
}: ThreeColSimpleProps) => {
    return (
        <Container>
            <ContentWithPaddingXl>
                {subheading && <Subheading>{subheading}</Subheading>}
                {heading && <Heading>{heading}</Heading>}
                {description && <Description>{description}</Description>}
                <ThreeColumnContainer>
                    {cards.map((card, i) => (
                        <Column key={i}>
                            <Card href={card.url}>
                                <span
                                    className="imageContainer"
                                    css={imageContainerCss}
                                >
                                    <Image
                                        src={card.imageSrc || ''}
                                        alt=""
                                        css={imageCss}
                                    />
                                </span>
                                <span className="title">{card.title}</span>
                                <p className="description">
                                    {card.description}
                                </p>
                                {linkText && (
                                    <span className="link">
                                        <span>{linkText}</span>
                                        <Image
                                            src={ArrowRightIcon}
                                            className="icon"
                                        />
                                    </span>
                                )}
                            </Card>
                        </Column>
                    ))}
                </ThreeColumnContainer>
            </ContentWithPaddingXl>
        </Container>
    );
};
