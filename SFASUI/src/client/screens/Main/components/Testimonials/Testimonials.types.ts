export type TestimonialsType = {
    stars?: number;
    profileImageSrc: string;
    imageSrc?: string;
    heading?: string;
    quote: string;
    customerName: string;
    customerTitle: string;
};

export type TestimonialProps = {
    imageSrc?: string;
    subheading?: string;
    heading?: string;
    description?: string;
    textOnLeft?: boolean;
    testimonials?: TestimonialsType[] | null;
};
