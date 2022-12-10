import React from "react";
import Map from "../../client/pageComponenta/Map";

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default function MapPage(props) {
  return <Map props={props} />;
}
