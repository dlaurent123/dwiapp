import React from "react";
import {
  AppForm,
  AppFormFeild,
  SubmitButton,
  AppFormPicker,
} from "../components/Forms/index";
import * as Yup from "yup";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().label("Title").required(),
  price: Yup.number().label("Price").min(1).max(1000),
  category: Yup.string().label("Catergory").required(),
  description: Yup.string().label("Description").optional().nullable(),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Electronics", value: 3 },
];

const ListingEditScreen = () => {
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: "",
          description: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormFeild
          autoCapitalize={"none"}
          autoCorrect={false}
          name={"title"}
          placeholder={"Title"}
          textContentType="none"
          maxLength={255}
        />
        <AppFormFeild
          autoCapitalize={"none"}
          autoCorrect={false}
          keyboardType={"number-pad"}
          name={"price"}
          placeholder={"Price"}
          textContentType="none"
        />

        <AppFormPicker
          items={categories}
          name={"category"}
          placeholder={"Category"}
        />

        <AppFormFeild
          maxLength={255}
          multiline
          numberOfLines={3} //only works for android
          autoCapitalize={"none"}
          autoCorrect={false}
          name={"description"}
          placeholder={"Description"}
          textContentType="none"
        />
        <SubmitButton title={"Post"} />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;
