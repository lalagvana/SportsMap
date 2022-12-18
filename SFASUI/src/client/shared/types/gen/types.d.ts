declare namespace Components {
    namespace Schemas {
        export interface AdminUserDto {}
        export interface AdminUserDtoTypedDataSourceResult {
            data?: AdminUserDto[] | null;
            total?: number; // int32
        }
        export interface Aggregator {
            field?: string | null;
            aggregate?: string | null;
        }
        export type CoveringType =
            | 'Printed'
            | 'RubberBitumen'
            | 'RubberTile'
            | 'Polymer'
            | 'Synthetic';
        export interface CreateUserRequest {
            role?: string | null;
        }
        export interface DataSourceRequest {
            take?: number; // int32
            skip?: number; // int32
            sort?: Sort[] | null;
            filter?: Filter;
            group?: Group[] | null;
            aggregate?: Aggregator[] | null;
        }
        export interface EmailRequest {
            fullName?: string | null;
            email?: string | null;
            text?: string | null;
        }
        export interface FacilityDto {
            facilityId?: string | null; // uuid
            type?: FacilityType;
            name?: string | null;
            ownerName?: string | null;
            propertyForm?: PropertyForm;
            length?: number | null; // double
            width?: number | null; // double
            area?: number | null; // double
            actualWorkload?: number | null; // int32
            annualCapacity?: number | null; // int32
            notes?: string | null;
            height?: number | null; // double
            size?: string | null;
            depth?: number | null; // double
            coveringType?: CoveringType;
            isAccessibleForDisabled?: boolean | null;
            payingType?: PayingType;
            whoCanUse?: string | null;
            link?: string | null;
            phoneNumber?: string | null;
            openHours?: string | null;
            eps?: number | null; // int32
            hidden?: boolean;
        }
        export type FacilityType =
            | 'Flat'
            | 'Gym'
            | 'Pool'
            | 'SkatingRink'
            | 'Shooting'
            | 'Other'
            | 'Outdoor';
        export interface Filter {
            field?: string | null;
            operator?: string | null;
            value?: null;
            logic?: string | null;
            filters?: Filter[] | null;
        }
        export interface Group {
            field?: string | null;
            dir?: string | null;
            aggregates?: Aggregator[] | null;
        }
        export interface LocationDto {}
        export interface LoginRequest {
            name: string;
            password: string;
        }
        export interface LoginResponse {
            id: number;
            firstName: string;
            username: string;
            AccessToken: string;
            AccessTokenExpiresIn: number;
            RefreshToken: string;
        }
        export type PayingType = 'FullFree' | 'PartlyFree' | 'NotFree';
        export type PropertyForm =
            | 'Unknown'
            | 'RussianFederationSubject'
            | 'Federal'
            | 'Municipal'
            | 'Private'
            | 'Other';
        export interface Sort {
            field?: string | null;
            dir?: string | null;
        }
        export interface UpdateUserAdminRequest {
            password?: string | null;
            role?: string | null;
        }
        export interface UserDto {}
    }
}
declare namespace Paths {
    namespace ApiAdminFacility {
        namespace Post {
            export type RequestBody = Components.Schemas.FacilityDto;
            namespace Responses {
                export type $200 = Components.Schemas.FacilityDto;
            }
        }
        namespace Put {
            namespace Parameters {
                export type Id = string; // uuid
            }
            export interface QueryParameters {
                id?: Parameters.Id /* uuid */;
            }
            export type RequestBody = Components.Schemas.FacilityDto;
            namespace Responses {
                export type $200 = Components.Schemas.FacilityDto;
            }
        }
    }
    namespace ApiAdminFacility$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = string; // uuid
            }
            export interface PathParameters {
                id: Parameters.Id /* uuid */;
            }
            namespace Responses {
                export interface $200 {}
            }
        }
    }
    namespace ApiAdminFacilityDownloadReport {
        namespace Post {
            namespace Responses {
                export interface $200 {}
            }
        }
    }
    namespace ApiAdminFacilityHide {
        namespace Put {
            namespace Parameters {
                export type Id = string; // uuid
            }
            export interface QueryParameters {
                id?: Parameters.Id /* uuid */;
            }
            namespace Responses {
                export interface $200 {}
            }
        }
    }
    namespace ApiAdminFacilityUnhide {
        namespace Put {
            namespace Parameters {
                export type Id = string; // uuid
            }
            export interface QueryParameters {
                id?: Parameters.Id /* uuid */;
            }
            namespace Responses {
                export interface $200 {}
            }
        }
    }
    namespace ApiAdminFacilityUploadGroup {
        namespace Post {
            export interface RequestBody {
                file?: string; // binary
            }
            namespace Responses {
                export interface $200 {}
            }
        }
    }
    namespace ApiAdminLogin {
        namespace Post {
            export type RequestBody = Components.Schemas.LoginRequest;
            namespace Responses {
                export type $200 = Components.Schemas.LoginResponse;
            }
        }
    }
    namespace ApiAdminUsers {
        namespace Post {
            export type RequestBody = Components.Schemas.CreateUserRequest;
            namespace Responses {
                export type $200 = Components.Schemas.AdminUserDto;
            }
        }
    }
    namespace ApiAdminUsers$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = string; // uuid
            }
            export interface PathParameters {
                id: Parameters.Id /* uuid */;
            }
            namespace Responses {
                export interface $200 {}
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = string; // uuid
            }
            export interface PathParameters {
                id: Parameters.Id /* uuid */;
            }
            namespace Responses {
                export type $200 = Components.Schemas.UserDto;
            }
        }
    }
    namespace ApiAdminUsers$UserID {
        namespace Put {
            namespace Parameters {
                export type UserID = string; // uuid
            }
            export interface PathParameters {
                userID: Parameters.UserID /* uuid */;
            }
            export type RequestBody = Components.Schemas.UpdateUserAdminRequest;
            namespace Responses {
                export type $200 = Components.Schemas.AdminUserDto;
            }
        }
    }
    namespace ApiAdminUsersGet {
        namespace Post {
            export type RequestBody = Components.Schemas.DataSourceRequest;
            namespace Responses {
                export type $200 =
                    Components.Schemas.AdminUserDtoTypedDataSourceResult;
            }
        }
    }
    namespace ApiEmailForgotPassword$Email {
        namespace Post {
            namespace Parameters {
                export type Email = string;
            }
            export interface PathParameters {
                email: Parameters.Email;
            }
            namespace Responses {
                export interface $200 {}
            }
        }
    }
    namespace ApiEmailSend {
        namespace Post {
            export type RequestBody = Components.Schemas.EmailRequest;
            namespace Responses {
                export interface $200 {}
            }
        }
    }
    namespace ApiEmailSubscribe$Email {
        namespace Post {
            namespace Parameters {
                export type Email = string;
            }
            export interface PathParameters {
                email: Parameters.Email;
            }
            namespace Responses {
                export interface $200 {}
            }
        }
    }
    namespace ApiFacility$Id {
        namespace Get {
            namespace Parameters {
                export type Id = string; // uuid
            }
            export interface PathParameters {
                id: Parameters.Id /* uuid */;
            }
            namespace Responses {
                export type $200 = Components.Schemas.FacilityDto;
            }
        }
    }
    namespace ApiFacilityLocation$Id {
        namespace Post {
            namespace Parameters {
                export type Id = string; // uuid
            }
            export interface PathParameters {
                id: Parameters.Id /* uuid */;
            }
            namespace Responses {
                export type $200 = Components.Schemas.LocationDto;
            }
        }
    }
    namespace ApiFacilityLocationList {
        namespace Post {
            namespace Responses {
                export type $200 = Components.Schemas.LocationDto;
            }
        }
    }
    namespace ApiFacilitySearch {
        namespace Post {
            export type RequestBody = Components.Schemas.DataSourceRequest;
            namespace Responses {
                export type $200 = Components.Schemas.FacilityDto[];
            }
        }
    }
}
