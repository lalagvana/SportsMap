import { Upload as UploadBase, UploadProps } from 'antd';

export const Upload = ({ ...rest }: UploadProps) => {
    return <UploadBase {...rest} />;
};
