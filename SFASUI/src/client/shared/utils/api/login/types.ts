export namespace Login {
    export type Body = Paths.ApiAdminLogin.Post.RequestBody;
    export type Response = Paths.ApiAdminLogin.Post.Responses.$200;
}

export namespace Confirm {
    export type Body = Paths.ApiAdminConfirm.Post.RequestBody;
    export type Response = Paths.ApiAdminConfirm.Post.Responses.$200;
}

export namespace RefreshToken {
    export type Body = Paths.ApiAdminTokenRefresh.Post.RequestBody;
    export type Response = Paths.ApiAdminTokenRefresh.Post.Responses.$200;
}

export namespace PasswordReset {
    export type Body = Paths.ApiAdminPasswordreset.Post.RequestBody;
    export type Response = Paths.ApiAdminPasswordreset.Post.Responses.$200;
}

export namespace PasswordResetLink {
    export type Body = Paths.ApiAdminSendpasswordresetlink.Post.RequestBody;
    export type Response =
        Paths.ApiAdminSendpasswordresetlink.Post.Responses.$200;
}
