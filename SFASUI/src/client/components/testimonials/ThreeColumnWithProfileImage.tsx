import React from 'react';
import tw from 'twin.macro';
import Image from 'next/image';

import { Container } from 'client/components/misc/Layouts';
import SpbuLogo from 'client/images/logo-spbu.svg';
import KrasLogo from 'client/images/logo-kras.svg';
import AdmLogo from 'client/images/logo-adm.png';

const Testimonials = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch lg:h-1/4`;
const TestimonialContainer = tw.div`mt-0 lg:w-1/3`;
const Testimonial = tw.div`px-4 text-center max-w-xs mx-auto flex flex-col items-center`;

export default () => {
    return (
        <Container>
            <Testimonials>
                <TestimonialContainer key={1}>
                    <Testimonial>
                        <Image priority src={SpbuLogo} alt="" />
                    </Testimonial>
                </TestimonialContainer>
                <TestimonialContainer key={2}>
                    <Testimonial>
                        <Image priority src={AdmLogo} alt="" />
                    </Testimonial>
                </TestimonialContainer>
                <TestimonialContainer key={3}>
                    <Testimonial>
                        <Image priority src={KrasLogo} alt="" />
                    </Testimonial>
                </TestimonialContainer>
            </Testimonials>
        </Container>
    );
};
