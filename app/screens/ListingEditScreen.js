import React from "react";
import { AppForm, AppFormFeild, SubmitButton } from "../components/Forms/index";
import * as Yup from "yup";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().label("Title"),
  price: Yup.string().label("Price"),
  category: Yup.string().label("Catergory"),
  description: Yup.string().label("Description"),
});

const ListingEditScreen = () => {
  return (
    <Screen>
      <AppForm
        initialValues={{ title: "", price: "", category: "", description: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormFeild
          autoCapitalize={"none"}
          autoCorrect={false}
          name={"title"}
          placeholder={"Title"}
          textContentType="none"
        />
        <AppFormFeild
          autoCapitalize={"none"}
          autoCorrect={false}
          name={"price"}
          placeholder={"Price"}
          textContentType="none"
        />
        <AppFormFeild
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
