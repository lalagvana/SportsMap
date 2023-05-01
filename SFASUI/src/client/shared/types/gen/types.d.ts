declare namespace Definitions {
    export interface ErrorResponse {
        message?: string;
        detail?: {
            [key: string]: any;
        };
    }
    export interface ExcelImportValidationError {
        detail?: {
            [key: string]: any;
        };
        name?: string;
        type?: string;
        n?: number; // int32
    }
    export interface ExcelImportValidationResponse {
        errors?: ExcelImportValidationError[];
    }
    export interface FacilityAgeResponse {
        data?: string[];
    }
    export interface FacilityCoveringTypeResponse {
        data?: string[];
    }
    export interface FacilityOwningTypeResponse {
        data?: string[];
    }
    export interface FacilityPatchRequest {
        area?: number; // float
        owning_type?: string;
        note?: string;
        annual_capacity?: number; // int32
        owner?: string;
        accessibility?: boolean;
        depth?: number; // float
        x?: number; // float
        eps?: number; // int32
        working_hours?: {
            [key: string]: any;
        };
        document?: string;
        site?: string;
        actual_workload?: number; // int32
        covering_type?: string;
        y?: number; // float
        height?: number; // float
        phone_number?: string;
        address?: string;
        type?: string;
        length?: number; // float
        name?: string;
        width?: number; // float
        age?: string[];
        hidden?: boolean;
        paying_type?: string[];
    }
    export interface FacilityPayingTypeResponse {
        data?: string[];
    }
    export interface FacilityPhotoResponse {
        id?: string; // uuid
        url?: string;
    }
    export interface FacilityRequest {
        area: number; // float
        owning_type?: string;
        note?: string;
        annual_capacity?: number; // int32
        owner: string;
        accessibility?: boolean;
        depth?: number; // float
        x?: number; // float
        eps?: number; // int32
        working_hours?: {
            [key: string]: any;
        };
        document?: string;
        site?: string;
        actual_workload?: number; // int32
        covering_type?: string;
        y?: number; // float
        height?: number; // float
        phone_number?: string;
        address: string;
        type: string;
        length?: number; // float
        name: string;
        width?: number; // float
        age?: string[];
        hidden?: boolean;
        paying_type?: string[];
    }
    export interface FacilityResponse {
        area?: number; // float
        photo?: FacilityPhotoResponse[];
        owning_type?: string;
        id: string; // uuid
        note?: string;
        annual_capacity?: number; // int32
        owner: string;
        accessibility?: boolean;
        depth?: number; // float
        x: number; // float
        eps?: number; // int32
        working_hours?: {
            [key: string]: any;
        };
        document?: string;
        site?: string;
        actual_workload?: number; // int32
        covering_type?: string;
        y: number; // float
        height?: number; // float
        phone_number?: string;
        address: string;
        type: string;
        length?: number; // float
        name: string;
        width?: number; // float
        age: string[];
        hidden?: boolean;
        paying_type: string[];
    }
    export interface FacilitySearchRequest {
        order_by?: string;
        owning_type?: string[];
        offset?: number; // int32
        covering_type?: string[];
        age?: string[];
        q?: string;
        filters?: FieldFilter[];
        order_desc?: boolean;
        all?: boolean;
        limit?: number; // int32
        paying_type?: string[];
        type?: string[];
    }
    export interface FacilitySearchResponse {
        count?: number; // int32
        facilities?: FacilityResponse[];
    }
    export interface FacilityTypeResponse {
        data?: string[];
    }
    export interface FieldFilter {
        eq?: string;
        gt?: number;
        field?: string;
        lt?: number;
    }
    export interface UserCreateRequest {
        last_name?: string;
        email: string; // email
        first_name?: string;
        password: string;
    }
    export interface UserLoginRequest {
        email: string; // email
        password: string;
    }
    export interface UserLoginResponse {
        admin?: boolean;
        last_name?: string;
        id: string; // uuid
        email: string; // email
        first_name?: string;
        refresh_token?: string;
        access_token_expires_in?: number; // int32
        access_token?: string;
    }
    export interface UserPatchRequest {
        last_name?: string;
        first_name?: string;
        password?: string;
    }
    export interface UserRefreshTokenRequest {
        refresh_token: string;
        access_token: string;
    }
    export interface UserResponse {
        admin?: boolean;
        last_name?: string;
        id: string; // uuid
        email: string; // email
        first_name?: string;
    }
}
declare namespace Paths {
    namespace NewApiV1ExcelImport {
        namespace Post {
            namespace Responses {
                export type $400 = Definitions.ErrorResponse;
                export type $401 = Definitions.ErrorResponse;
                export type $403 = Definitions.ErrorResponse;
            }
        }
    }
    namespace NewApiV1ExcelValidate {
        namespace Post {
            namespace Responses {
                export type $400 = Definitions.ExcelImportValidationResponse;
                export type $401 = Definitions.ErrorResponse;
                export type $403 = Definitions.ErrorResponse;
            }
        }
    }
    namespace NewApiV1Facility {
        namespace Post {
            export interface BodyParameters {
                body?: Parameters.Body;
            }
            namespace Parameters {
                export type Body = Definitions.FacilityRequest;
            }
            namespace Responses {
                export type $201 = Definitions.FacilityResponse;
                export type $400 = Definitions.ErrorResponse;
                export type $401 = Definitions.ErrorResponse;
                export type $403 = Definitions.ErrorResponse;
                export type $422 = Definitions.ErrorResponse;
            }
        }
    }
    namespace NewApiV1Facility$FacilityIdPhoto$PhotoId {
        namespace Delete {
            namespace Parameters {
                export type FacilityId = string;
                export type PhotoId = string;
            }
            export interface PathParameters {
                facility_id: Parameters.FacilityId;
                photo_id: Parameters.PhotoId;
            }
            namespace Responses {
                export type $400 = Definitions.ErrorResponse;
                export type $401 = Definitions.ErrorResponse;
                export type $403 = Definitions.ErrorResponse;
            }
        }
    }
    namespace NewApiV1Facility$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = string;
            }
            export interface PathParameters {
                id: Parameters.Id;
            }
            namespace Responses {
                export type $400 = Definitions.ErrorResponse;
                export type $401 = Definitions.ErrorResponse;
                export type $403 = Definitions.ErrorResponse;
                export type $422 = Definitions.ErrorResponse;
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
                export type $422 = Definitions.ErrorResponse;
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
                export type $422 = Definitions.ErrorResponse;
            }
        }
        namespace Patch {
            export interface BodyParameters {
                body?: Parameters.Body;
            }
            namespace Parameters {
                export type Body = Definitions.FacilityPatchRequest;
                export type Id = string;
            }
            export interface PathParameters {
                id: Parameters.Id;
            }
            namespace Responses {
                export type $200 = Definitions.FacilityResponse;
                export type $400 = Definitions.ErrorResponse;
                export type $401 = Definitions.ErrorResponse;
                export type $403 = Definitions.ErrorResponse;
                export type $422 = Definitions.ErrorResponse;
            }
        }
        namespace Put {
            export interface BodyParameters {
                body?: Parameters.Body;
            }
            namespace Parameters {
                export type Body = Definitions.FacilityRequest;
                export type Id = string;
            }
            export interface PathParameters {
                id: Parameters.Id;
            }
            namespace Responses {
                export type $200 = Definitions.FacilityResponse;
                export type $400 = Definitions.ErrorResponse;
                export type $401 = Definitions.ErrorResponse;
                export type $403 = Definitions.ErrorResponse;
                export type $422 = Definitions.ErrorResponse;
            }
        }
    }
    namespace NewApiV1Facility$IdPhoto {
        namespace Post {
            namespace Parameters {
                export type Id = string;
            }
            export interface PathParameters {
                id: Parameters.Id;
            }
            namespace Responses {
                export type $201 = Definitions.FacilityPhotoResponse;
                export type $400 = Definitions.ErrorResponse;
                export type $401 = Definitions.ErrorResponse;
                export type $403 = Definitions.ErrorResponse;
            }
        }
    }
    namespace NewApiV1FacilityAge {
        namespace Get {
            namespace Responses {
                export type $200 = Definitions.FacilityAgeResponse;
            }
        }
        namespace Head {
            namespace Responses {
                export type $200 = Definitions.FacilityAgeResponse;
            }
        }
    }
    namespace NewApiV1FacilityCoveringType {
        namespace Get {
            namespace Responses {
                export type $200 = Definitions.FacilityCoveringTypeResponse;
            }
        }
        namespace Head {
            namespace Responses {
                export type $200 = Definitions.FacilityCoveringTypeResponse;
            }
        }
    }
    namespace NewApiV1FacilityOwningType {
        namespace Get {
            namespace Responses {
                export type $200 = Definitions.FacilityOwningTypeResponse;
            }
        }
        namespace Head {
            namespace Responses {
                export type $200 = Definitions.FacilityOwningTypeResponse;
            }
        }
    }
    namespace NewApiV1FacilityPayingType {
        namespace Get {
            namespace Responses {
                export type $200 = Definitions.FacilityPayingTypeResponse;
            }
        }
        namespace Head {
            namespace Responses {
                export type $200 = Definitions.FacilityPayingTypeResponse;
            }
        }
    }
    namespace NewApiV1FacilitySearch {
        namespace Post {
            export interface BodyParameters {
                body?: Parameters.Body;
            }
            namespace Parameters {
                export type Body = Definitions.FacilitySearchRequest;
            }
            namespace Responses {
                export type $200 = Definitions.FacilitySearchResponse;
                export type $400 = Definitions.ErrorResponse;
                export type $422 = Definitions.ErrorResponse;
            }
        }
    }
    namespace NewApiV1FacilityType {
        namespace Get {
            namespace Responses {
                export type $200 = Definitions.FacilityTypeResponse;
            }
        }
        namespace Head {
            namespace Responses {
                export type $200 = Definitions.FacilityTypeResponse;
            }
        }
    }
    namespace NewApiV1User {
        namespace Post {
            export interface BodyParameters {
                body?: Parameters.Body;
            }
            namespace Parameters {
                export type Body = Definitions.UserCreateRequest;
            }
            namespace Responses {
                export type $201 = Definitions.UserLoginResponse;
                export type $422 = Definitions.ErrorResponse;
            }
        }
    }
    namespace NewApiV1User$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = string;
            }
            export interface PathParameters {
                id: Parameters.Id;
            }
            namespace Responses {
                export type $400 = Definitions.ErrorResponse;
                export type $401 = Definitions.ErrorResponse;
                export type $403 = Definitions.ErrorResponse;
                export type $422 = Definitions.ErrorResponse;
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
        namespace Patch {
            export interface BodyParameters {
                body?: Parameters.Body;
            }
            namespace Parameters {
                export type Body = Definitions.UserPatchRequest;
                export type Id = string;
            }
            export interface PathParameters {
                id: Parameters.Id;
            }
            namespace Responses {
                export type $200 = Definitions.UserResponse;
                export type $400 = Definitions.ErrorResponse;
                export type $401 = Definitions.ErrorResponse;
                export type $403 = Definitions.ErrorResponse;
                export type $422 = Definitions.ErrorResponse;
            }
        }
    }
    namespace NewApiV1UserLogin {
        namespace Post {
            export interface BodyParameters {
                body?: Parameters.Body;
            }
            namespace Parameters {
                export type Body = Definitions.UserLoginRequest;
            }
            namespace Responses {
                export type $200 = Definitions.UserLoginResponse;
                export type $400 = Definitions.ErrorResponse;
                export type $422 = Definitions.ErrorResponse;
            }
        }
    }
    namespace NewApiV1UserTokenRefresh {
        namespace Post {
            export interface BodyParameters {
                body?: Parameters.Body;
            }
            namespace Parameters {
                export type Body = Definitions.UserRefreshTokenRequest;
            }
            namespace Responses {
                export type $200 = Definitions.UserLoginResponse;
                export type $400 = Definitions.ErrorResponse;
                export type $422 = Definitions.ErrorResponse;
            }
        }
    }
}
