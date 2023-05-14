import { UploadFile } from "antd/es/upload/interface";

export namespace ExcelImport {
    export type Body = UploadFile;
}

export namespace ExcelExport {
    export type Body = Paths.NewApiV1ExcelExport.Post.Parameters.Body;
    export type Response = Paths.NewApiV1ExcelExport.Post.Responses.$200;
}

export namespace ExcelValidate {
    export type Body = UploadFile;
    export type ResponseValidationError = Paths.NewApiV1ExcelValidate.Post.Responses.$400;
}

