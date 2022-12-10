import React from "react";
import ContactUs from "../../client/pageComponenta/ContactUs";

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default function ContactUsPage(props) {
  return <ContactUs props={props} />;
}
