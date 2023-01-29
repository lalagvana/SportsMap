declare namespace Definitions {
    export interface CreateUserRequest {
        email: string; // email
        password: string;
        last_name?: string;
        first_name?: string;
    }
    export interface ErrorResponse {
        detail?: {
            [key: string]: any;
        };
        message?: string;
    }
    export interface FacilityHiddenRequest {
        hidden: boolean;
    }
    export interface FacilityRequest {
        length?: number; // float
        open_hours?: string;
        owner_name?: string;
        link?: string;
        actual_workload?: number; // int32
        size?: number; // float
        converting_type?: any;
        x: number; // float
        property_form?: any;
        phone_number?: string;
        eps?: number; // int32
        type?: any;
        depth?: number; // float
        paying_type?: any;
        name: string;
        height?: number; // float
        is_accessible_for_disabled?: boolean;
        annual_capacity?: number; // int32
        hidden?: boolean;
        who_can_use?: string;
        area?: number; // float
        width?: number; // float
        y: number; // float
        notes?: string;
    }
    export interface FacilityResponse {
        length?: number; // float
        open_hours?: string;
        owner_name?: string;
        link?: string;
        actual_workload?: number; // int32
        size?: number; // float
        converting_type?: string;
        x: number; // float
        property_form?: string;
        phone_number?: string;
        eps?: number; // int32
        type?: string;
        depth?: number; // float
        paying_type?: string;
        id: string; // uuid
        name: string;
        height?: number; // float
        is_accessible_for_disabled?: boolean;
        annual_capacity?: number; // int32
        hidden?: boolean;
        who_can_use?: string;
        area?: number; // float
        width?: number; // float
        y: number; // float
        notes?: string;
    }
    export interface FacilityResponseList {
        data: FacilityResponse[];
        count: number; // int32
    }
    export interface FacilityUpdateRequest {
        length?: number; // float
        open_hours?: string;
        owner_name?: string;
        link?: string;
        actual_workload?: number; // int32
        size?: number; // float
        converting_type?: any;
        x?: number; // float
        property_form?: any;
        phone_number?: string;
        eps?: number; // int32
        type?: any;
        depth?: number; // float
        paying_type?: any;
        name?: string;
        height?: number; // float
        is_accessible_for_disabled?: boolean;
        annual_capacity?: number; // int32
        hidden?: boolean;
        who_can_use?: string;
        area?: number; // float
        width?: number; // float
        y?: number; // float
        notes?: string;
    }
    export interface FieldFilter {
        gt?: number;
        eq?: string;
        field?: string;
        lt?: number;
    }
    export interface LoginRequest {
        email: string; // email
        password: string;
    }
    export interface LoginResponse {
        last_name?: string;
        first_name?: string;
        email?: string; // email
        id?: string; // uuid
        group?: string;
        access_token?: string;
        refresh_token?: string;
        access_token_expires_in?: number; // int32
    }
    export interface RefreshTokenRequest {
        access_token: string;
        refresh_token: string;
    }
    export interface SearchQuery {
        order_by?: string;
        limit?: number; // int32
        offset?: number; // int32
        filters?: FieldFilter[];
        order_desc?: boolean;
        q?: string;
    }
    export interface UpdateSelfRequest {
        password?: string;
        last_name?: string;
        first_name?: string;
    }
    export interface UserResponse {
        email: string; // email
        id: string; // uuid
        last_name?: string;
        first_name?: string;
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
                export type $422 = Definitions.ErrorResponse;
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
                export type $422 = Definitions.ErrorResponse;
            }
        }
    }
    namespace AdminUsers {
        namespace Delete {
            namespace Responses {
                export type $422 = Definitions.ErrorResponse;
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
                export type $422 = Definitions.ErrorResponse;
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
                export type $422 = Definitions.ErrorResponse;
            }
        }
    }
    namespace AdminUsers$Id {
        namespace Get {
            namespace Parameters {
                export type Id = string;
            }
            export interface PathParameters {
                id: Parameters.Id;
            }
            namespace Responses {
                export type $200 = Definitions.UserResponse;
                export type $400 = Definitions.ErrorResponse;
            }
        }
        namespace Head {
            namespace Parameters {
                export type Id = string;
            }
            export interface PathParameters {
                id: Parameters.Id;
            }
            namespace Responses {
                export type $200 = Definitions.UserResponse;
                export type $400 = Definitions.ErrorResponse;
            }
        }
    }
    namespace Facility {
        namespace Get {
            namespace Responses {
                export type $200 = Definitions.FacilityResponseList;
            }
        }
        namespace Head {
            namespace Responses {
                export type $200 = Definitions.FacilityResponseList;
            }
        }
        namespace Post {
            export interface BodyParameters {
                body?: Parameters.Body;
            }
            namespace Parameters {
                export type Body = Definitions.FacilityRequest;
            }
            namespace Responses {
                export type $201 = Definitions.FacilityResponse;
                export type $422 = Definitions.ErrorResponse;
            }
        }
    }
    namespace Facility$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = string;
            }
            export interface PathParameters {
                id: Parameters.Id;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = string;
            }
            export interface PathParameters {
                id: Parameters.Id;
            }
            namespace Responses {
                export type $200 = Definitions.FacilityResponse;
                export type $400 = Definitions.ErrorResponse;
            }
        }
        namespace Head {
            namespace Parameters {
                export type Id = string;
            }
            export interface PathParameters {
                id: Parameters.Id;
            }
            namespace Responses {
                export type $200 = Definitions.FacilityResponse;
                export type $400 = Definitions.ErrorResponse;
            }
        }
        namespace Put {
            export interface BodyParameters {
                body?: Parameters.Body;
            }
            namespace Parameters {
                export type Body = Definitions.FacilityUpdateRequest;
                export type Id = string;
            }
            export interface PathParameters {
                id: Parameters.Id;
            }
            namespace Responses {
                export type $200 = Definitions.FacilityResponse;
                export type $422 = Definitions.ErrorResponse;
            }
        }
    }
    namespace Facility$IdHide {
        namespace Patch {
            export interface BodyParameters {
                body?: Parameters.Body;
            }
            namespace Parameters {
                export type Body = Definitions.FacilityHiddenRequest;
                export type Id = string;
            }
            export interface PathParameters {
                id: Parameters.Id;
            }
            namespace Responses {
                export type $200 = Definitions.FacilityResponse;
                export type $422 = Definitions.ErrorResponse;
            }
        }
    }
    namespace FacilitySearch {
        namespace Post {
            export interface BodyParameters {
                body?: Parameters.Body;
            }
            namespace Parameters {
                export type Body = Definitions.SearchQuery;
            }
            namespace Responses {
                export type $200 = Definitions.FacilityResponseList;
                export type $422 = Definitions.ErrorResponse;
            }
        }
    }
}
