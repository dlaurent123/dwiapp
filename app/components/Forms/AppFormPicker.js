import { useFormikContext } from "formik";
import React, { useState } from "react";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

const AppFormPicker = ({ name, items, ...otherProps }) => {
  const {
    touched,
    setFieldTouched,
    errors,
    setFieldValue,
    values,
  } = useFormikContext();

  const onSelected = (item) => {
    setFieldValue(name, item);
  };

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={onSelected}
        selectedItem={values.category}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
