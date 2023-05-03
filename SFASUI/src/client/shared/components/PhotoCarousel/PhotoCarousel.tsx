import { FacilityPhoto } from 'src/client/shared/types/facilities';
import { Carousel } from 'src/client/shared/components/Carousel';
import { ScalableImage } from 'src/client/shared/components/ScalableImage';

type PhotoCarouselProps = {
    photos: FacilityPhoto[];
    width: number;
    height: number;
    className?: string;
};

export const PhotoCarousel = ({ photos, width, height, className }: PhotoCarouselProps) => {
    return (
        <div className={className} style={{ width, height }}>
            <Carousel draggable>
                {photos.map(({ id, url }) => (
                    <ScalableImage src={url} key={id} width={width} height={height} />
                ))}
            </Carousel>
        </div>
    );
};
