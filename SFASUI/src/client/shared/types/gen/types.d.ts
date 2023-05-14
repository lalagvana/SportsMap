declare namespace Definitions {
    export interface EmailOfferObjectRequest {
        address: string;
        note?: string;
        owner: string;
    }
    export interface EmailSubscribeRequest {
        email: string; // email
    }
    export interface EmailSuggestionsRequest {
        text?: string;
        last_name: string;
        first_name: string;
        email: string; // email
    }
    export interface ErrorResponse {
        detail?: {
            [key: string]: any;
        };
        message?: string;
    }
    export interface ExcelExportResponse {
        url?: string; // url
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
        height?: number; // float
        actual_workload?: number; // int32
        area?: number; // float
        annual_capacity?: number; // int32
        name?: string;
        hidden?: boolean;
        depth?: number; // float
        accessibility?: boolean;
        age?: string[];
        eps?: number; // int32
        length?: number; // float
        paying_type?: string[];
        phone_number?: string;
        type?: string;
        covering_type?: string;
        note?: string;
        owning_type?: string;
        address?: string;
        y?: number; // float
        width?: number; // float
        site?: string;
        working_hours?: {
            tuesday: FacilityWorkingHoursItem;
            saturday: FacilityWorkingHoursItem;
            thursday: FacilityWorkingHoursItem;
            friday: FacilityWorkingHoursItem;
            wednesday: FacilityWorkingHoursItem;
            sunday: FacilityWorkingHoursItem;
            monday: FacilityWorkingHoursItem;
        };
        x?: number; // float
        owner?: string;
        document?: string;
    }
    export interface FacilityPayingTypeResponse {
        data?: string[];
    }
    export interface FacilityPhotoResponse {
        filename?: string;
        url?: string;
        id?: string; // uuid
    }
    export interface FacilityPutRequest {
        height?: number; // float
        actual_workload?: number; // int32
        area: number; // float
        annual_capacity?: number; // int32
        name: string;
        hidden?: boolean;
        depth?: number; // float
        accessibility?: boolean;
        age?: string[];
        eps?: number; // int32
        length?: number; // float
        paying_type?: string[];
        phone_number?: string;
        type: string;
        covering_type?: string;
        note?: string;
        owning_type?: string;
        address: string;
        y?: number; // float
        width?: number; // float
        site?: string;
        working_hours?: {
            tuesday: FacilityWorkingHoursItem;
            saturday: FacilityWorkingHoursItem;
            thursday: FacilityWorkingHoursItem;
            friday: FacilityWorkingHoursItem;
            wednesday: FacilityWorkingHoursItem;
            sunday: FacilityWorkingHoursItem;
            monday: FacilityWorkingHoursItem;
        };
        x?: number; // float
        owner: string;
        document?: string;
    }
    export interface FacilityRequest {
        height?: number; // float
        actual_workload?: number; // int32
        area: number; // float
        annual_capacity?: number; // int32
        name: string;
        hidden?: boolean;
        depth?: number; // float
        accessibility?: boolean;
        age?: string[];
        eps?: number; // int32
        length?: number; // float
        paying_type?: string[];
        phone_number?: string;
        type: string;
        covering_type?: string;
        note?: string;
        owning_type?: string;
        address: string;
        y?: number; // float
        width?: number; // float
        site?: string;
        working_hours?: {
            tuesday: FacilityWorkingHoursItem;
            saturday: FacilityWorkingHoursItem;
            thursday: FacilityWorkingHoursItem;
            friday: FacilityWorkingHoursItem;
            wednesday: FacilityWorkingHoursItem;
            sunday: FacilityWorkingHoursItem;
            monday: FacilityWorkingHoursItem;
        };
        x?: number; // float
        owner: string;
        document?: string;
    }
    export interface FacilityResponse {
        height?: number; // float
        actual_workload?: number; // int32
        area?: number; // float
        annual_capacity?: number; // int32
        id: string; // uuid
        name: string;
        photo?: FacilityPhotoResponse[];
        hidden?: boolean;
        depth?: number; // float
        accessibility?: boolean;
        age: string[];
        eps?: number; // int32
        length?: number; // float
        paying_type: string[];
        phone_number?: string;
        type: string;
        covering_type?: string;
        note?: string;
        owning_type?: string;
        address: string;
        y: number; // float
        width?: number; // float
        site?: string;
        working_hours?: {
            tuesday: FacilityWorkingHoursItem;
            saturday: FacilityWorkingHoursItem;
            thursday: FacilityWorkingHoursItem;
            friday: FacilityWorkingHoursItem;
            wednesday: FacilityWorkingHoursItem;
            sunday: FacilityWorkingHoursItem;
            monday: FacilityWorkingHoursItem;
        };
        x: number; // float
        owner: string;
        document?: string;
    }
    export interface FacilitySearchRequest {
        hidden?: boolean;
        filters?: FieldFilter[];
        type?: string[];
        age?: string[];
        covering_type?: string[];
        all?: boolean;
        order_desc?: boolean;
        offset?: number; // int32
        order_by?: string;
        owning_type?: string[];
        limit?: number; // int32
        q?: string;
        paying_type?: string[];
    }
    export interface FacilitySearchResponse {
        facilities?: FacilityResponse[];
        count?: number; // int32
    }
    export interface FacilityTypeResponse {
        data?: string[];
    }
    export interface FacilityWorkingHours {
        tuesday: FacilityWorkingHoursItem;
        saturday: FacilityWorkingHoursItem;
        thursday: FacilityWorkingHoursItem;
        friday: FacilityWorkingHoursItem;
        wednesday: FacilityWorkingHoursItem;
        sunday: FacilityWorkingHoursItem;
        monday: FacilityWorkingHoursItem;
    }
    export interface FacilityWorkingHoursItem {
        open: boolean;
        since?: string;
        to?: string;
        all_day?: boolean;
    }
    export interface FieldFilter {
        eq?: string;
        lt?: number;
        field?: string;
        gt?: number;
    }
    export interface PasswordRefreshRequest {
        email: string; // email
    }
    export interface UserCreateRequest {
        last_name?: string;
        password: string;
        first_name?: string;
        email: string; // email
    }
    export interface UserLoginRequest {
        password: string;
        email: string; // email
    }
    export interface UserLoginResponse {
        last_name?: string;
        access_token?: string;
        refresh_token?: string;
        access_token_expires_in?: number; // int32
        admin?: boolean;
        id: string; // uuid
        first_name?: string;
        email: string; // email
    }
    export interface UserPatchRequest {
        last_name?: string;
        password?: string;
        first_name?: string;
    }
    export interface UserRefreshPassword {
        new_password: string;
    }
    export interface UserRefreshTokenRequest {
        refresh_token: string;
        access_token: string;
    }
    export interface UserResponse {
        last_name?: string;
        admin?: boolean;
        id: string; // uuid
        first_name?: string;
        email: string; // email
    }
}
declare namespace Paths {
    namespace NewApiV1EmailNewPassword {
        namespace Post {
            export interface BodyParameters {
                body?: Parameters.Body;
            }
            namespace Parameters {
                export type Body = Definitions.PasswordRefreshRequest;
            }
            namespace Responses {
                export type $400 = Definitions.ErrorResponse;
                export type $422 = Definitions.ErrorResponse;
            }
        }
    }
    namespace NewApiV1EmailOfferObject {
        namespace Post {
            export interface BodyParameters {
                body?: Parameters.Body;
            }
            namespace Parameters {
                export type Body = Definitions.EmailOfferObjectRequest;
            }
            namespace Responses {
                export type $400 = Definitions.ErrorResponse;
                export type $422 = Definitions.ErrorResponse;
            }
        }
    }
    namespace NewApiV1EmailSubscribe {
        namespace Post {
            export interface BodyParameters {
                body?: Parameters.Body;
            }
            namespace Parameters {
                export type Body = Definitions.EmailSubscribeRequest;
            }
            namespace Responses {
                export type $400 = Definitions.ErrorResponse;
                export type $422 = Definitions.ErrorResponse;
            }
        }
    }
    namespace NewApiV1EmailSuggestions {
        namespace Post {
            export interface BodyParameters {
                body?: Parameters.Body;
            }
            namespace Parameters {
                export type Body = Definitions.EmailSuggestionsRequest;
            }
            namespace Responses {
                export type $400 = Definitions.ErrorResponse;
                export type $422 = Definitions.ErrorResponse;
            }
        }
    }
    namespace NewApiV1EmailUnsubscribe$Secret {
        namespace Get {
            namespace Parameters {
                export type Secret = string;
            }
            export interface PathParameters {
                secret: Parameters.Secret;
            }
            namespace Responses {
                export type $400 = Definitions.ErrorResponse;
                export type $422 = Definitions.ErrorResponse;
            }
        }
        namespace Head {
            namespace Parameters {
                export type Secret = string;
            }
            export interface PathParameters {
                secret: Parameters.Secret;
            }
            namespace Responses {
                export type $400 = Definitions.ErrorResponse;
                export type $422 = Definitions.ErrorResponse;
            }
        }
    }
    namespace NewApiV1ExcelExport {
        namespace Post {
            export interface BodyParameters {
                body?: Parameters.Body;
            }
            namespace Parameters {
                export type Body = Definitions.FacilitySearchRequest;
            }
            namespace Responses {
                export type $200 = Definitions.ExcelExportResponse;
                export type $400 = Definitions.ErrorResponse;
                export type $401 = Definitions.ErrorResponse;
                export type $403 = Definitions.ErrorResponse;
            }
        }
    }
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
    namespace NewApiV1UserPasswordRefresh$Secret {
        namespace Post {
            export interface BodyParameters {
                body?: Parameters.Body;
            }
            namespace Parameters {
                export type Body = Definitions.UserRefreshPassword;
                export type Secret = string;
            }
            export interface PathParameters {
                secret: Parameters.Secret;
            }
            namespace Responses {
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
