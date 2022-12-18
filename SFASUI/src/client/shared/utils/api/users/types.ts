export namespace UpdateUser {
    export type Body = Paths.ApiAdminUsers$UserID.Put.RequestBody;
    export type Response = Paths.ApiAdminUsers$UserID.Put.Responses.$200;
    export type Parameters = Paths.ApiAdminUsers$UserID.Put.PathParameters;
}

export namespace CreateUser {
    export type Body = Paths.ApiAdminUsers.Post.RequestBody;
    export type Response = Paths.ApiAdminUsers.Post.Responses.$200;
}

export namespace DeleteUser {
    export type Response = Paths.ApiAdminUsers$Id.Delete.Responses.$200;
    export type Parameters = Paths.ApiAdminUsers$Id.Delete.PathParameters;
}
