import React from "react";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

function FormImagePicker(props) {
  const { touched, errors, setFieldValue, values } = useFormikContext();
  return (
    <>
      <ImageInputList imageUris={} />
      <ErrorMessage />
    </>
  );
}

export default FormImagePicker;
