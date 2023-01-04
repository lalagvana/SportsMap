declare namespace Components {
    namespace Schemas {
        export interface Aggregator {
            field?: string | null;
            aggregate?: string | null;
        }
        export type CoveringType = "Printed" | "RubberBitumen" | "RubberTile" | "Polymer" | "Synthetic";
        export interface CreateUserRequest {
            firstName: string;
            lastName: string;
            username?: string | null;
            password?: string | null;
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
        export type FacilityType = "Flat" | "Gym" | "Pool" | "SkatingRink" | "Shooting" | "Other" | "Outdoor";
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
        export interface LoginResponse {
            id?: string | null;
            firstName?: string | null;
            lastName?: string | null;
            username?: string | null;
            accessToken?: string | null;
            accessTokenExpiresIn?: number; // int32
            refreshToken?: string | null;
            role?: string | null;
            isExternalUser?: boolean;
        }
        export interface PasswordResetRequest {
            userId?: string; // uuid
            code?: string | null;
            password?: string | null;
        }
        export type PayingType = "FullFree" | "PartlyFree" | "NotFree";
        export type PropertyForm = "Unknown" | "RussianFederationSubject" | "Federal" | "Municipal" | "Private" | "Other";
        export interface RefreshTokenRequest {
            accessToken?: string | null;
            refreshToken?: string | null;
        }
        export interface SendPasswordResetLinkRequest {
            username?: string | null;
        }
        export interface Sort {
            field?: string | null;
            dir?: string | null;
        }
        export interface UserDto {
            userId?: string; // uuid
            firstName?: string | null;
            lastName?: string | null;
            username?: string | null;
            password?: string | null;
        }
    }
}
declare namespace Paths {
    namespace ApiAdmin {
        namespace Get {
            namespace Responses {
                export type $200 = Components.Schemas.UserDto;
            }
        }
    }
    namespace ApiAdminConfirm {
        namespace Post {
            export type RequestBody = Components.Schemas.PasswordResetRequest;
            namespace Responses {
                export type $200 = boolean;
            }
        }
    }
    namespace ApiAdminPasswordreset {
        namespace Post {
            export type RequestBody = Components.Schemas.PasswordResetRequest;
            namespace Responses {
                export type $200 = boolean;
            }
        }
    }
    namespace ApiAdminSendpasswordresetlink {
        namespace Post {
            export type RequestBody = Components.Schemas.SendPasswordResetLinkRequest;
            namespace Responses {
                export type $200 = boolean;
            }
        }
    }
    namespace ApiAdminTokenRefresh {
        namespace Post {
            export type RequestBody = Components.Schemas.RefreshTokenRequest;
            namespace Responses {
                export type $200 = Components.Schemas.LoginResponse;
            }
        }
    }
    namespace ApiAdminUsers {
        namespace Post {
            export type RequestBody = Components.Schemas.CreateUserRequest;
            namespace Responses {
                export type $200 = Components.Schemas.UserDto;
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
                export interface $200 {
                }
            }
        }
    }
    namespace ApiAdminUsers$UserID {
        namespace Put {
            namespace Parameters {
                export type UserID = string;
            }
            export interface PathParameters {
                userID: Parameters.UserID;
            }
            export type RequestBody = Components.Schemas.UserDto;
            namespace Responses {
                export type $200 = Components.Schemas.UserDto;
            }
        }
    }
    namespace ApiEmailSend {
        namespace Post {
            export type RequestBody = Components.Schemas.EmailRequest;
            namespace Responses {
                export interface $200 {
                }
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
                export interface $200 {
                }
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
    namespace ApiFacilityFacility {
        namespace Post {
            export type RequestBody = Components.Schemas.FacilityDto;
            namespace Responses {
                export type $200 = Components.Schemas.FacilityDto;
            }
        }
        namespace Put {
            export type RequestBody = Components.Schemas.FacilityDto;
            namespace Responses {
                export type $200 = Components.Schemas.FacilityDto;
            }
        }
    }
    namespace ApiFacilityFacility$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = string; // uuid
            }
            export interface PathParameters {
                id: Parameters.Id /* uuid */;
            }
            namespace Responses {
                export interface $200 {
                }
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
