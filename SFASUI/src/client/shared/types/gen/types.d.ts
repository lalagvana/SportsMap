declare namespace Definitions {
    export interface EmailOfferObjectRequest {
        owner: string;
        note?: string;
        address: string;
    }
    export interface EmailSubscribeRequest {
        email: string; // email
    }
    export interface EmailSuggestionsRequest {
        last_name: string;
        email: string; // email
        text?: string;
        first_name: string;
    }
    export interface ErrorResponse {
        detail?: {
            [key: string]: any;
        };
        message?: string;
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
        length?: number; // float
        x?: number; // float
        eps?: number; // int32
        name?: string;
        covering_type?: string;
        hidden?: boolean;
        note?: string;
        width?: number; // float
        accessibility?: boolean;
        depth?: number; // float
        phone_number?: string;
        age?: string[];
        owning_type?: string;
        actual_workload?: number; // int32
        annual_capacity?: number; // int32
        area?: number; // float
        height?: number; // float
        y?: number; // float
        type?: string;
        document?: string;
        working_hours?: {
            friday: FacilityWorkingHoursItem;
            sunday: FacilityWorkingHoursItem;
            monday: FacilityWorkingHoursItem;
            wednesday: FacilityWorkingHoursItem;
            tuesday: FacilityWorkingHoursItem;
            thursday: FacilityWorkingHoursItem;
            saturday: FacilityWorkingHoursItem;
        };
        site?: string;
        address?: string;
        paying_type?: string[];
        owner?: string;
    }
    export interface FacilityPayingTypeResponse {
        data?: string[];
    }
    export interface FacilityPhotoResponse {
        url?: string;
        filename?: string;
        id?: string; // uuid
    }
    export interface FacilityPutRequest {
        length?: number; // float
        x?: number; // float
        eps?: number; // int32
        name: string;
        covering_type?: string;
        hidden?: boolean;
        note?: string;
        width?: number; // float
        accessibility?: boolean;
        depth?: number; // float
        phone_number?: string;
        age?: string[];
        owning_type?: string;
        actual_workload?: number; // int32
        annual_capacity?: number; // int32
        area: number; // float
        height?: number; // float
        y?: number; // float
        type: string;
        document?: string;
        working_hours?: {
            friday: FacilityWorkingHoursItem;
            sunday: FacilityWorkingHoursItem;
            monday: FacilityWorkingHoursItem;
            wednesday: FacilityWorkingHoursItem;
            tuesday: FacilityWorkingHoursItem;
            thursday: FacilityWorkingHoursItem;
            saturday: FacilityWorkingHoursItem;
        };
        site?: string;
        address: string;
        paying_type?: string[];
        owner: string;
    }
    export interface FacilityRequest {
        length?: number; // float
        x?: number; // float
        eps?: number; // int32
        name: string;
        covering_type?: string;
        hidden?: boolean;
        note?: string;
        width?: number; // float
        accessibility?: boolean;
        depth?: number; // float
        phone_number?: string;
        age?: string[];
        owning_type?: string;
        actual_workload?: number; // int32
        annual_capacity?: number; // int32
        area: number; // float
        height?: number; // float
        y?: number; // float
        type: string;
        document?: string;
        working_hours?: {
            friday: FacilityWorkingHoursItem;
            sunday: FacilityWorkingHoursItem;
            monday: FacilityWorkingHoursItem;
            wednesday: FacilityWorkingHoursItem;
            tuesday: FacilityWorkingHoursItem;
            thursday: FacilityWorkingHoursItem;
            saturday: FacilityWorkingHoursItem;
        };
        site?: string;
        address: string;
        paying_type?: string[];
        owner: string;
    }
    export interface FacilityResponse {
        length?: number; // float
        x: number; // float
        eps?: number; // int32
        name: string;
        covering_type?: string;
        hidden?: boolean;
        note?: string;
        width?: number; // float
        accessibility?: boolean;
        id: string; // uuid
        photo?: FacilityPhotoResponse[];
        depth?: number; // float
        phone_number?: string;
        age: string[];
        owning_type?: string;
        actual_workload?: number; // int32
        annual_capacity?: number; // int32
        area?: number; // float
        height?: number; // float
        y: number; // float
        type: string;
        document?: string;
        working_hours?: {
            friday: FacilityWorkingHoursItem;
            sunday: FacilityWorkingHoursItem;
            monday: FacilityWorkingHoursItem;
            wednesday: FacilityWorkingHoursItem;
            tuesday: FacilityWorkingHoursItem;
            thursday: FacilityWorkingHoursItem;
            saturday: FacilityWorkingHoursItem;
        };
        site?: string;
        address: string;
        paying_type: string[];
        owner: string;
    }
    export interface FacilitySearchRequest {
        limit?: number; // int32
        filters?: FieldFilter[];
        paying_type?: string[];
        q?: string;
        all?: boolean;
        age?: string[];
        covering_type?: string[];
        type?: string[];
        owning_type?: string[];
        hidden?: boolean;
        order_by?: string;
        order_desc?: boolean;
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
        friday: FacilityWorkingHoursItem;
        sunday: FacilityWorkingHoursItem;
        monday: FacilityWorkingHoursItem;
        wednesday: FacilityWorkingHoursItem;
        tuesday: FacilityWorkingHoursItem;
        thursday: FacilityWorkingHoursItem;
        saturday: FacilityWorkingHoursItem;
    }
    export interface FacilityWorkingHoursItem {
        to?: string;
        since?: string;
        open: boolean;
        all_day?: boolean;
    }
    export interface FieldFilter {
        field?: string;
        lt?: number;
        gt?: number;
        eq?: string;
    }
    export interface UserCreateRequest {
        last_name?: string;
        email: string; // email
        password: string;
        first_name?: string;
    }
    export interface UserLoginRequest {
        email: string; // email
        password: string;
    }
    export interface UserLoginResponse {
        first_name?: string;
        last_name?: string;
        access_token?: string;
        refresh_token?: string;
        id: string; // uuid
        access_token_expires_in?: number; // int32
        email: string; // email
        admin?: boolean;
    }
    export interface UserPatchRequest {
        last_name?: string;
        password?: string;
        first_name?: string;
    }
    export interface UserRefreshTokenRequest {
        access_token: string;
        refresh_token: string;
    }
    export interface UserResponse {
        first_name?: string;
        last_name?: string;
        id: string; // uuid
        email: string; // email
        admin?: boolean;
    }
}
declare namespace Paths {
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
    namespace NewApiV1ExcelExport {
        namespace Post {
            export interface BodyParameters {
                body?: Parameters.Body;
            }
            namespace Parameters {
                export type Body = Definitions.FacilitySearchRequest;
            }
            namespace Responses {
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
