import { Carousel as CarouselBase, CarouselProps } from 'antd';

export const Carousel = ({ ...rest }: CarouselProps) => {
    return <CarouselBase {...rest} />;
};
