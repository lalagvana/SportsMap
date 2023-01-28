export namespace UpdateYourself {
    export type Body = Paths.AdminUsers.Put.Parameters.Body;
    export type Response = Paths.AdminUsers.Put.Responses.$200;
}

export namespace CreateUser {
    export type Body = Paths.AdminUsers.Post.Parameters.Body;
    export type Response = Paths.AdminUsers.Post.Responses.$201;
}

export namespace DeleteYourself {
    export type Response = never;
}
