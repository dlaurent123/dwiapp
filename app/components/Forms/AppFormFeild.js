import React from "react";
import { useFormikContext } from "formik";
import AppInput from "../AppInput";
import ErrorMessage from "./ErrorMessage";

const AppFormFeild = ({ name, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormFeild;
