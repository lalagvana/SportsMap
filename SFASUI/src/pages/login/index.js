import React from "react";
import Login from "../../client/pageComponenta/Login";

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default function LoginPage(props) {
  return <Login props={props} />;
}
