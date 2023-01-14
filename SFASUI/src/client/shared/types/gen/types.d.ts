declare namespace Definitions {
    export interface CreateUserRequest {
        last_name?: string;
        first_name?: string;
        email: string; // email
        password: string;
    }
    export interface ErrorResponse {
        detail?: {
            [key: string]: any;
        };
        message?: string;
    }
    export interface LoginRequest {
        email: string; // email
        password: string;
    }
    export interface LoginResponse {
        first_name?: string;
        email?: string; // email
        access_token?: string;
        id?: string;
        last_name?: string;
        group?: string;
        access_token_expires_in?: number; // int32
        refresh_token?: string;
    }
    export interface RefreshTokenRequest {
        refresh_token: string;
        access_token: string;
    }
    export interface UpdateSelfRequest {
        last_name?: string;
        first_name?: string;
        password?: string;
    }
    export interface UserResponse {
        first_name?: string;
        email: string; // email
        id: string;
        last_name?: string;
        group?: string;
    }
}
declare namespace Paths {
    namespace AdminLogin {
        namespace Post {
            export interface BodyParameters {
                body?: Parameters.Body;
            }
            namespace Parameters {
                export type Body = Definitions.LoginRequest;
            }
            namespace Responses {
                export type $200 = Definitions.LoginResponse;
                export type $400 = Definitions.ErrorResponse;
            }
        }
    }
    namespace AdminTokenRefresh {
        namespace Post {
            export interface BodyParameters {
                body?: Parameters.Body;
            }
            namespace Parameters {
                export type Body = Definitions.RefreshTokenRequest;
            }
            namespace Responses {
                export type $200 = Definitions.LoginResponse;
                export type $400 = Definitions.ErrorResponse;
            }
        }
    }
    namespace AdminUsers {
        namespace Delete {
            namespace Responses {
                export type $400 = Definitions.ErrorResponse;
            }
        }
        namespace Post {
            export interface BodyParameters {
                body?: Parameters.Body;
            }
            namespace Parameters {
                export type Body = Definitions.CreateUserRequest;
            }
            namespace Responses {
                export type $201 = Definitions.UserResponse;
                export type $400 = Definitions.ErrorResponse;
            }
        }
        namespace Put {
            export interface BodyParameters {
                body?: Parameters.Body;
            }
            namespace Parameters {
                export type Body = Definitions.UpdateSelfRequest;
            }
            namespace Responses {
                export type $200 = Definitions.UserResponse;
                export type $400 = Definitions.ErrorResponse;
            }
        }
    }
}
