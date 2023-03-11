export namespace GetFacilities {
    export type Response = Paths.Facility.Get.Responses.$200;
}

export namespace GetFacility {
    export type Response = Paths.Facility$Id.Get.Responses.$200;
}

export namespace SearchFacilities {
    export type Response = Paths.FacilitySearch.Post.Responses.$200;
    export type Body = Paths.FacilitySearch.Post.Parameters.Body;
}

export namespace CreateFacility {
    export type Response = Paths.Facility.Post.Responses.$201;
    export type Body = Paths.Facility.Post.Parameters.Body;
}

export namespace UpdateFacility {
    export type Response = Paths.Facility$Id.Put.Responses.$200;
    export type Body = Paths.Facility$Id.Put.Parameters.Body;
    export type Parameters = Paths.Facility$Id.Put.PathParameters;
}

export namespace PartialUpdateFacility {
    export type Response = Paths.Facility$IdHide.Patch.Responses.$200;
    export type Body = Paths.Facility$IdHide.Patch.Parameters.Body;
    export type Parameters = Paths.Facility$IdHide.Patch.PathParameters;
}

export namespace DeleteFacility {
    export type Parameters = Paths.Facility$Id.Delete.PathParameters;
}
