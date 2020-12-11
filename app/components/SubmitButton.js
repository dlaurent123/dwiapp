import React from "react";
import { useFormikContext } from "formik";
import AppButton from "../components/AppButton";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton onPress={handleSubmit} title={title} />;
};

export default SubmitButton;
