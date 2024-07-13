import React from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="container">
        <div className=" shadow-sm bg-white rounded-md px-4 py-3">
          This is my Contacts:
        </div>
      </div>
    </>
  );
};
export default Contact;
