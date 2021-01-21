import React, { useEffect, useState } from "react";
import {
  AppForm,
  AppFormFeild,
  SubmitButton,
  AppFormPicker,
} from "../components/Forms/index";
import * as Yup from "yup";
import Screen from "../components/Screen";
import UploadScreen from "../screens/UploadScreen";
import FormImagePicker from "../components/Forms/FormImagePicker";
import { useLocation } from "../hooks/useLocation";
import listingAPI from "../api/listings";

const validationSchema = Yup.object().shape({
  title: Yup.string().label("Title").required(),
  price: Yup.number().label("Price").min(1).max(1000),
  category: Yup.object().label("Catergory").required(),
  description: Yup.string().label("Description").optional().nullable(),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Electronics", value: 3 },
];

const ListingEditScreen = () => {
  const location = useLocation();
  const [uploadVisible, setUplaodVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUplaodVisible(true);
    const res = await listingAPI.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!res.ok) {
      setUplaodVisible(false);
      return alert("Could not save listing.");
    }
    resetForm();
  };
  return (
    <Screen>
      <UploadScreen
        onDone={() => setUplaodVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: "",
          description: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
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
          width={120}
        />

        <AppFormPicker
          items={categories}
          name={"category"}
          placeholder={"Category"}
          width={"50%"}
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
