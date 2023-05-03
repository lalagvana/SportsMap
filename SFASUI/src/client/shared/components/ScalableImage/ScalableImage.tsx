import { Image as ImageBase, ImageProps } from 'antd';

import './ScalableImage.css'

export const ScalableImage = ({ ...rest }: ImageProps) => {
    return <ImageBase {...rest} />;
};
