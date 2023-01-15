export namespace GetFacility {
    export type Response = Paths.ApiFacility$Id.Get.Responses.$200;
    export type Parameters = Paths.ApiFacility$Id.Get.PathParameters;
}

export namespace SearchFacilities {
    export type Response = Paths.ApiFacilitySearch.Post.Responses.$200;
    export type Body = Paths.ApiFacilitySearch.Post.RequestBody;
}

export namespace CreateFacility {
    export type Response = Paths.ApiFacilityFacility.Post.Responses.$200;
    export type Body = Paths.ApiFacilityFacility.Post.RequestBody;
}

export namespace UpdateFacility {
    export type Response = Paths.ApiFacilityFacility.Put.Responses.$200;
    export type Body = Paths.ApiFacilityFacility.Put.RequestBody;
}

export namespace DeleteFacility {
    export type Response = Paths.ApiFacilityFacility$Id.Delete.Responses.$200;
    export type Parameters = Paths.ApiFacilityFacility$Id.Delete.PathParameters;
}
