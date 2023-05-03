import { UploadFile } from 'antd/es/upload/interface';

export namespace AddPhoto {
    export type Response = Paths.NewApiV1Facility$IdPhoto.Post.Responses.$201;
    export type Body = UploadFile;
}
