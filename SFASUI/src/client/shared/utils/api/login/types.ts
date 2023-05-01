export namespace Login {
    export type Body = Paths.NewApiV1UserLogin.Post.Parameters.Body;
    export type Response = Paths.NewApiV1UserLogin.Post.Responses.$200;
    export type ValidationError = Paths.NewApiV1UserLogin.Post.Responses.$422;
}

export namespace Register {
    export type Body = Paths.NewApiV1User.Post.Parameters.Body;
    export type Response = Paths.NewApiV1User.Post.Responses.$201;
    export type ValidationError = Paths.NewApiV1User.Post.Responses.$422;
}

export namespace RefreshToken {
    export type Body = Paths.NewApiV1UserTokenRefresh.Post.Parameters.Body;
    export type Response = Paths.NewApiV1UserTokenRefresh.Post.Responses.$200;
}
