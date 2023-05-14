export namespace UpdateYourself {
    export type Body = Paths.NewApiV1User$Id.Patch.Parameters.Body;
    export type Response = Paths.NewApiV1User$Id.Patch.Responses.$200;
}

export namespace CreateUser {
    export type Body = Paths.NewApiV1User.Post.Parameters.Body;
    export type Response = Paths.NewApiV1User.Post.Responses.$201;
}

export namespace DeleteYourself {
    export type Response = never;
}

export namespace RefreshPassword {
    export type Body = Paths.NewApiV1UserPasswordRefresh$Secret.Post.Parameters.Body;
}
