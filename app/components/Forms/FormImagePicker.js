import React from "react";
import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";
import { useFormikContext } from "formik";

function FormImagePicker({ name }) {
  const { touched, errors, setFieldValue, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((el) => {
        if (el !== uri) {
          return el;
        }
      })
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
