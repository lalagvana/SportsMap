declare namespace Definitions {
    export interface EmailOfferObjectRequest {
        note?: string;
        address: string;
        owner: string;
    }
    export interface EmailSubscribeRequest {
        email: string; // email
    }
    export interface EmailSuggestionsRequest {
        last_name: string;
        text?: string;
        first_name: string;
        email: string; // email
    }
    export interface ErrorResponse {
        message?: string;
        detail?: {
            [key: string]: any;
        };
    }
    export interface ExcelExportResponse {
        url?: string; // url
    }
    export interface ExcelImportValidationError {
        type?: string;
        name?: string;
        n?: number; // int32
        detail?: {
            [key: string]: any;
        };
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
        paying_type?: string[];
        y?: number; // float
        x?: number; // float
        owning_type?: string;
        depth?: number; // float
        hidden?: boolean;
        actual_workload?: number; // int32
        accessibility?: boolean;
        note?: string;
        width?: number; // float
        site?: string;
        length?: number; // float
        covering_type?: string;
        document?: string;
        annual_capacity?: number; // int32
        phone_number?: string;
        height?: number; // float
        area?: number; // float
        type?: string;
        name?: string;
        owner?: string;
        working_hours?: {
            monday: FacilityWorkingHoursItem;
            saturday: FacilityWorkingHoursItem;
            thursday: FacilityWorkingHoursItem;
            tuesday: FacilityWorkingHoursItem;
            sunday: FacilityWorkingHoursItem;
            friday: FacilityWorkingHoursItem;
            wednesday: FacilityWorkingHoursItem;
        };
        address?: string;
        eps?: number; // int32
    }
    export interface FacilityPayingTypeResponse {
        data?: string[];
    }
    export interface FacilityPhotoResponse {
        id?: string; // uuid
        url?: string;
        filename?: string;
    }
    export interface FacilityPutRequest {
        age?: string[];
        paying_type?: string[];
        y?: number; // float
        x?: number; // float
        owning_type?: string;
        depth?: number; // float
        hidden?: boolean;
        actual_workload?: number; // int32
        accessibility?: boolean;
        note?: string;
        width?: number; // float
        site?: string;
        length?: number; // float
        covering_type?: string;
        document?: string;
        annual_capacity?: number; // int32
        phone_number?: string;
        height?: number; // float
        area: number; // float
        type: string;
        name: string;
        owner: string;
        working_hours?: {
            monday: FacilityWorkingHoursItem;
            saturday: FacilityWorkingHoursItem;
            thursday: FacilityWorkingHoursItem;
            tuesday: FacilityWorkingHoursItem;
            sunday: FacilityWorkingHoursItem;
            friday: FacilityWorkingHoursItem;
            wednesday: FacilityWorkingHoursItem;
        };
        address: string;
        eps?: number; // int32
    }
    export interface FacilityRequest {
        age?: string[];
        paying_type?: string[];
        y?: number; // float
        x?: number; // float
        owning_type?: string;
        depth?: number; // float
        hidden?: boolean;
        actual_workload?: number; // int32
        accessibility?: boolean;
        note?: string;
        width?: number; // float
        site?: string;
        length?: number; // float
        covering_type?: string;
        document?: string;
        annual_capacity?: number; // int32
        phone_number?: string;
        height?: number; // float
        area: number; // float
        type: string;
        name: string;
        owner: string;
        working_hours?: {
            monday: FacilityWorkingHoursItem;
            saturday: FacilityWorkingHoursItem;
            thursday: FacilityWorkingHoursItem;
            tuesday: FacilityWorkingHoursItem;
            sunday: FacilityWorkingHoursItem;
            friday: FacilityWorkingHoursItem;
            wednesday: FacilityWorkingHoursItem;
        };
        address: string;
        eps?: number; // int32
    }
    export interface FacilityResponse {
        age: string[];
        paying_type: string[];
        y: number; // float
        x: number; // float
        owning_type?: string;
        depth?: number; // float
        hidden?: boolean;
        actual_workload?: number; // int32
        accessibility?: boolean;
        note?: string;
        width?: number; // float
        site?: string;
        length?: number; // float
        photo?: FacilityPhotoResponse[];
        covering_type?: string;
        document?: string;
        id: string; // uuid
        annual_capacity?: number; // int32
        phone_number?: string;
        height?: number; // float
        area?: number; // float
        type: string;
        name: string;
        owner: string;
        working_hours?: {
            monday: FacilityWorkingHoursItem;
            saturday: FacilityWorkingHoursItem;
            thursday: FacilityWorkingHoursItem;
            tuesday: FacilityWorkingHoursItem;
            sunday: FacilityWorkingHoursItem;
            friday: FacilityWorkingHoursItem;
            wednesday: FacilityWorkingHoursItem;
        };
        address: string;
        eps?: number; // int32
    }
    export interface FacilitySearchRequest {
        order_desc?: boolean;
        limit?: number; // int32
        age?: string[];
        paying_type?: string[];
        y?: number; // float
        q?: string;
        covering_type?: string[];
        type?: string[];
        owning_type?: string[];
        all?: boolean;
        x?: number; // float
        offset?: number; // int32
        order_by?: string;
        hidden?: boolean;
        filters?: FieldFilter[];
    }
    export interface FacilitySearchResponse {
        count?: number; // int32
        facilities?: FacilityResponse[];
    }
    export interface FacilityTypeResponse {
        data?: string[];
    }
    export interface FacilityWorkingHours {
        monday: FacilityWorkingHoursItem;
        saturday: FacilityWorkingHoursItem;
        thursday: FacilityWorkingHoursItem;
        tuesday: FacilityWorkingHoursItem;
        sunday: FacilityWorkingHoursItem;
        friday: FacilityWorkingHoursItem;
        wednesday: FacilityWorkingHoursItem;
    }
    export interface FacilityWorkingHoursItem {
        since?: string;
        all_day?: boolean;
        open: boolean;
        to?: string;
    }
    export interface FieldFilter {
        eq?: string;
        lt?: number;
        gt?: number;
        field?: string;
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
        admin?: boolean;
        id: string; // uuid
        refresh_token?: string;
        email: string; // email
        access_token_expires_in?: number; // int32
        access_token?: string;
        first_name?: string;
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
        access_token: string;
        refresh_token: string;
    }
    export interface UserResponse {
        last_name?: string;
        admin?: boolean;
        id: string; // uuid
        email: string; // email
        first_name?: string;
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
