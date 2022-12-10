import React from "react";
import { Main } from "../client/pageComponenta/Main";

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default function MainPage(props) {
  return <Main props={props} />;
}
