export namespace GetFacility {
    export type Response = Paths.NewApiV1Facility$Id.Get.Responses.$200;
}

export namespace SearchFacilities {
    export type Response = Paths.NewApiV1FacilitySearch.Post.Responses.$200;
    export type Body = Paths.NewApiV1FacilitySearch.Post.Parameters.Body;
}

export namespace CreateFacility {
    export type Response = Paths.NewApiV1Facility.Post.Responses.$201;
    export type Body = Paths.NewApiV1Facility.Post.Parameters.Body;
}

export namespace UpdateFacility {
    export type Response = Paths.NewApiV1Facility$Id.Put.Responses.$200;
    export type Body = Paths.NewApiV1Facility$Id.Put.Parameters.Body;
    export type Parameters = Paths.NewApiV1Facility$Id.Put.PathParameters;
}

export namespace PartialUpdateFacility {
    export type Response = Paths.NewApiV1Facility$Id.Patch.Responses.$200;
    export type Body = Paths.NewApiV1Facility$Id.Patch.Parameters.Body;
    export type Parameters = Paths.NewApiV1Facility$Id.Patch.PathParameters;
}

export namespace DeleteFacility {
    export type Parameters = Paths.NewApiV1Facility$Id.Delete.PathParameters;
}

export namespace GetFacilityType {
    export type Response = Paths.NewApiV1FacilityType.Get.Responses.$200
}

export namespace GetFacilityOwningType {
    export type Response = Paths.NewApiV1FacilityOwningType.Get.Responses.$200
}

export namespace GetFacilityCoveringType {
    export type Response = Paths.NewApiV1FacilityCoveringType.Get.Responses.$200
}

export namespace GetFacilityPayingType {
    export type Response = Paths.NewApiV1FacilityPayingType.Get.Responses.$200
}

export namespace GetFacilityAge {
    export type Response = Paths.NewApiV1FacilityAge.Get.Responses.$200
}
