import React, { useState } from "react";

import { Formik } from "formik";

export function Form(props) {
  const { initialValues, validationSchema, onSubmit, children, ...other } =
    props;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {props.children}
    </Formik>
  );
}
