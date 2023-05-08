declare namespace Definitions {
    export interface ErrorResponse {
        message?: string;
        detail?: {
            [key: string]: any;
        };
    }
    export interface ExcelImportValidationError {
        name?: string;
        type?: string;
        detail?: {
            [key: string]: any;
        };
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
        age?: string[];
        hidden?: boolean;
        x?: number; // float
        width?: number; // float
        eps?: number; // int32
        actual_workload?: number; // int32
        working_hours?: {
            thursday: FacilityWorkingHoursItem;
            monday: FacilityWorkingHoursItem;
            saturday: FacilityWorkingHoursItem;
            wednesday: FacilityWorkingHoursItem;
            tuesday: FacilityWorkingHoursItem;
            friday: FacilityWorkingHoursItem;
            sunday: FacilityWorkingHoursItem;
        };
        type?: string;
        accessibility?: boolean;
        site?: string;
        phone_number?: string;
        document?: string;
        name?: string;
        owner?: string;
        annual_capacity?: number; // int32
        y?: number; // float
        covering_type?: string;
        owning_type?: string;
        note?: string;
        length?: number; // float
        depth?: number; // float
        height?: number; // float
        address?: string;
        paying_type?: string[];
        area?: number; // float
    }
    export interface FacilityPayingTypeResponse {
        data?: string[];
    }
    export interface FacilityPhotoResponse {
        url?: string;
        id?: string; // uuid
    }
    export interface FacilityPutRequest {
        age?: string[];
        hidden?: boolean;
        x?: number; // float
        width?: number; // float
        eps?: number; // int32
        actual_workload?: number; // int32
        working_hours?: {
            thursday: FacilityWorkingHoursItem;
            monday: FacilityWorkingHoursItem;
            saturday: FacilityWorkingHoursItem;
            wednesday: FacilityWorkingHoursItem;
            tuesday: FacilityWorkingHoursItem;
            friday: FacilityWorkingHoursItem;
            sunday: FacilityWorkingHoursItem;
        };
        type?: string;
        accessibility?: boolean;
        site?: string;
        phone_number?: string;
        document?: string;
        name: string;
        owner: string;
        annual_capacity?: number; // int32
        y?: number; // float
        covering_type?: string;
        owning_type?: string;
        note?: string;
        length?: number; // float
        depth?: number; // float
        height?: number; // float
        address: string;
        paying_type?: string[];
        area: number; // float
    }
    export interface FacilityRequest {
        age?: string[];
        hidden?: boolean;
        x?: number; // float
        width?: number; // float
        eps?: number; // int32
        actual_workload?: number; // int32
        working_hours?: {
            thursday: FacilityWorkingHoursItem;
            monday: FacilityWorkingHoursItem;
            saturday: FacilityWorkingHoursItem;
            wednesday: FacilityWorkingHoursItem;
            tuesday: FacilityWorkingHoursItem;
            friday: FacilityWorkingHoursItem;
            sunday: FacilityWorkingHoursItem;
        };
        type: string;
        accessibility?: boolean;
        site?: string;
        phone_number?: string;
        document?: string;
        name: string;
        owner: string;
        annual_capacity?: number; // int32
        y?: number; // float
        covering_type?: string;
        owning_type?: string;
        note?: string;
        length?: number; // float
        depth?: number; // float
        height?: number; // float
        address: string;
        paying_type?: string[];
        area: number; // float
    }
    export interface FacilityResponse {
        age: string[];
        hidden?: boolean;
        x: number; // float
        width?: number; // float
        eps?: number; // int32
        actual_workload?: number; // int32
        working_hours?: {
            thursday: FacilityWorkingHoursItem;
            monday: FacilityWorkingHoursItem;
            saturday: FacilityWorkingHoursItem;
            wednesday: FacilityWorkingHoursItem;
            tuesday: FacilityWorkingHoursItem;
            friday: FacilityWorkingHoursItem;
            sunday: FacilityWorkingHoursItem;
        };
        type: string;
        accessibility?: boolean;
        site?: string;
        phone_number?: string;
        document?: string;
        name: string;
        owner: string;
        annual_capacity?: number; // int32
        y: number; // float
        covering_type?: string;
        owning_type?: string;
        note?: string;
        length?: number; // float
        depth?: number; // float
        height?: number; // float
        address: string;
        paying_type: string[];
        photo?: FacilityPhotoResponse[];
        area?: number; // float
        id: string; // uuid
    }
    export interface FacilitySearchRequest {
        age?: string[];
        order_by?: string;
        filters?: FieldFilter[];
        limit?: number; // int32
        covering_type?: string[];
        type?: string[];
        owning_type?: string[];
        all?: boolean;
        order_desc?: boolean;
        q?: string;
        paying_type?: string[];
        offset?: number; // int32
    }
    export interface FacilitySearchResponse {
        facilities?: FacilityResponse[];
        count?: number; // int32
    }
    export interface FacilityTypeResponse {
        data?: string[];
    }
    export interface FacilityWorkingHours {
        thursday: FacilityWorkingHoursItem;
        monday: FacilityWorkingHoursItem;
        saturday: FacilityWorkingHoursItem;
        wednesday: FacilityWorkingHoursItem;
        tuesday: FacilityWorkingHoursItem;
        friday: FacilityWorkingHoursItem;
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
        gt?: number;
        field?: string;
    }
    export interface UserCreateRequest {
        first_name?: string;
        email: string; // email
        last_name?: string;
        password: string;
    }
    export interface UserLoginRequest {
        email: string; // email
        password: string;
    }
    export interface UserLoginResponse {
        access_token?: string;
        refresh_token?: string;
        admin?: boolean;
        email: string; // email
        access_token_expires_in?: number; // int32
        first_name?: string;
        last_name?: string;
        id: string; // uuid
    }
    export interface UserPatchRequest {
        first_name?: string;
        last_name?: string;
        password?: string;
    }
    export interface UserRefreshTokenRequest {
        access_token: string;
        refresh_token: string;
    }
    export interface UserResponse {
        admin?: boolean;
        email: string; // email
        first_name?: string;
        last_name?: string;
        id: string; // uuid
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
    namespace NewApiV1FacilityAge$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = string;
            }
            export interface PathParameters {
                id: Parameters.Id;
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
    namespace NewApiV1FacilityPayingType$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = string;
            }
            export interface PathParameters {
                id: Parameters.Id;
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
