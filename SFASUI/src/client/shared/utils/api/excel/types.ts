import { UploadFile } from "antd/es/upload/interface";

export namespace ExcelImport {
    export type Body = UploadFile;
}

export namespace ExcelValidate {
    export type Body = UploadFile;
    export type ResponseValidationError = Paths.NewApiV1ExcelValidate.Post.Responses.$400;
}

