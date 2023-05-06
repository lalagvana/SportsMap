declare namespace Definitions {
    export interface ErrorResponse {
        detail?: {
            [key: string]: any;
        };
        message?: string;
    }
    export interface ExcelImportValidationError {
        n?: number; // int32
        detail?: {
            [key: string]: any;
        };
        type?: string;
        name?: string;
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
        phone_number?: string;
        x?: number; // float
        name?: string;
        owning_type?: string;
        covering_type?: string;
        annual_capacity?: number; // int32
        address?: string;
        actual_workload?: number; // int32
        working_hours?: {
            friday: FacilityWorkingHoursItem;
            tuesday: FacilityWorkingHoursItem;
            wednesday: FacilityWorkingHoursItem;
            thursday: FacilityWorkingHoursItem;
            saturday: FacilityWorkingHoursItem;
            monday: FacilityWorkingHoursItem;
            sunday: FacilityWorkingHoursItem;
        };
        hidden?: boolean;
        height?: number; // float
        accessibility?: boolean;
        paying_type?: string[];
        type?: string;
        age?: string[];
        width?: number; // float
        site?: string;
        y?: number; // float
        area?: number; // float
        length?: number; // float
        note?: string;
        depth?: number; // float
        document?: string;
        owner?: string;
        eps?: number; // int32
    }
    export interface FacilityPayingTypeResponse {
        data?: string[];
    }
    export interface FacilityPhotoResponse {
        id?: string; // uuid
        url?: string;
    }
    export interface FacilityPutRequest {
        phone_number?: string;
        x?: number; // float
        name: string;
        owning_type?: string;
        covering_type?: string;
        annual_capacity?: number; // int32
        address: string;
        actual_workload?: number; // int32
        working_hours?: {
            friday: FacilityWorkingHoursItem;
            tuesday: FacilityWorkingHoursItem;
            wednesday: FacilityWorkingHoursItem;
            thursday: FacilityWorkingHoursItem;
            saturday: FacilityWorkingHoursItem;
            monday: FacilityWorkingHoursItem;
            sunday: FacilityWorkingHoursItem;
        };
        hidden?: boolean;
        height?: number; // float
        accessibility?: boolean;
        paying_type?: string[];
        type?: string;
        age?: string[];
        width?: number; // float
        site?: string;
        y?: number; // float
        area: number; // float
        length?: number; // float
        note?: string;
        depth?: number; // float
        document?: string;
        owner: string;
        eps?: number; // int32
    }
    export interface FacilityRequest {
        phone_number?: string;
        x?: number; // float
        name: string;
        owning_type?: string;
        covering_type?: string;
        annual_capacity?: number; // int32
        address: string;
        actual_workload?: number; // int32
        working_hours?: {
            friday: FacilityWorkingHoursItem;
            tuesday: FacilityWorkingHoursItem;
            wednesday: FacilityWorkingHoursItem;
            thursday: FacilityWorkingHoursItem;
            saturday: FacilityWorkingHoursItem;
            monday: FacilityWorkingHoursItem;
            sunday: FacilityWorkingHoursItem;
        };
        hidden?: boolean;
        height?: number; // float
        accessibility?: boolean;
        paying_type?: string[];
        type: string;
        age?: string[];
        width?: number; // float
        site?: string;
        y?: number; // float
        area: number; // float
        length?: number; // float
        note?: string;
        depth?: number; // float
        document?: string;
        owner: string;
        eps?: number; // int32
    }
    export interface FacilityResponse {
        phone_number?: string;
        x: number; // float
        name: string;
        owning_type?: string;
        covering_type?: string;
        annual_capacity?: number; // int32
        address: string;
        id: string; // uuid
        actual_workload?: number; // int32
        working_hours?: {
            friday: FacilityWorkingHoursItem;
            tuesday: FacilityWorkingHoursItem;
            wednesday: FacilityWorkingHoursItem;
            thursday: FacilityWorkingHoursItem;
            saturday: FacilityWorkingHoursItem;
            monday: FacilityWorkingHoursItem;
            sunday: FacilityWorkingHoursItem;
        };
        hidden?: boolean;
        height?: number; // float
        accessibility?: boolean;
        paying_type: string[];
        type: string;
        age: string[];
        photo?: FacilityPhotoResponse[];
        width?: number; // float
        site?: string;
        y: number; // float
        area?: number; // float
        length?: number; // float
        note?: string;
        depth?: number; // float
        document?: string;
        owner: string;
        eps?: number; // int32
    }
    export interface FacilitySearchRequest {
        order_by?: string;
        offset?: number; // int32
        q?: string;
        filters?: FieldFilter[];
        paying_type?: string[];
        order_desc?: boolean;
        limit?: number; // int32
        all?: boolean;
        type?: string[];
        owning_type?: string[];
        covering_type?: string[];
        age?: string[];
    }
    export interface FacilitySearchResponse {
        facilities?: FacilityResponse[];
        count?: number; // int32
    }
    export interface FacilityTypeResponse {
        data?: string[];
    }
    export interface FacilityWorkingHours {
        friday: FacilityWorkingHoursItem;
        tuesday: FacilityWorkingHoursItem;
        wednesday: FacilityWorkingHoursItem;
        thursday: FacilityWorkingHoursItem;
        saturday: FacilityWorkingHoursItem;
        monday: FacilityWorkingHoursItem;
        sunday: FacilityWorkingHoursItem;
    }
    export interface FacilityWorkingHoursItem {
        all_day?: boolean;
        open: boolean;
        since?: string;
        to?: string;
    }
    export interface FieldFilter {
        lt?: number;
        eq?: string;
        field?: string;
        gt?: number;
    }
    export interface UserCreateRequest {
        password: string;
        email: string; // email
        first_name?: string;
        last_name?: string;
    }
    export interface UserLoginRequest {
        password: string;
        email: string; // email
    }
    export interface UserLoginResponse {
        admin?: boolean;
        email: string; // email
        last_name?: string;
        id: string; // uuid
        access_token_expires_in?: number; // int32
        first_name?: string;
        access_token?: string;
        refresh_token?: string;
    }
    export interface UserPatchRequest {
        password?: string;
        first_name?: string;
        last_name?: string;
    }
    export interface UserRefreshTokenRequest {
        access_token: string;
        refresh_token: string;
    }
    export interface UserResponse {
        email: string; // email
        last_name?: string;
        id: string; // uuid
        first_name?: string;
        admin?: boolean;
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
                export type Body = Definitions.FacilityPutRequest;
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
