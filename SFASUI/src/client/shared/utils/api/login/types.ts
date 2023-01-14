export namespace Login {
    export type Body = Paths.AdminLogin.Post.Parameters.Body;
    export type Response = Paths.AdminLogin.Post.Responses.$200;
}

export namespace RefreshToken {
    export type Body = Paths.AdminTokenRefresh.Post.Parameters.Body;
    export type Response = Paths.AdminTokenRefresh.Post.Responses.$200;
}
