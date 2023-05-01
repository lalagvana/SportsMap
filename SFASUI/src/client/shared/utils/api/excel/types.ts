export namespace ExcelImport {
    export type Body = File;
}

export namespace ExcelValidate {
    export type Body = File;
    export type ResponseValidationError = Paths.NewApiV1ExcelValidate.Post.Responses.$400;
}

