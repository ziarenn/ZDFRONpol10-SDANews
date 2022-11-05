import { Button, Card, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { auth, storage } from "../../helpers/firebaseConfig";
import { ProfilePhotoFormData } from "../../helpers/interfaces";
import { ref, uploadBytes } from "firebase/storage";
const ProfilePhotoForm = () => {
  const { register, handleSubmit } = useForm<ProfilePhotoFormData>();

  const submitHandler = (data: ProfilePhotoFormData) => {
    const photo = data.profilePhoto[0];
    if (auth.currentUser) {
      const storageRef = ref(
        storage,
        `/users/${auth.currentUser.uid}/profilePhoto`
      );
      uploadBytes(storageRef, photo)
        .then(() => console.log("Successfully uploaded the photo"))
        .catch((err) => console.error(err.message));
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Card sx={{ p: "1rem" }}>
        <Typography variant="h6" sx={{ fontSize: "1rem" }} align="center">
          Upload your profile picture
        </Typography>
        <Button
          variant="contained"
          component="label"
          sx={{
            display: "block",
            mx: "auto",
            my: "1rem",
            alignContent: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontSize: "1rem" }} align="center">
            Select a file
          </Typography>
          <input
            type="file"
            hidden
            {...register("profilePhoto", { required: true })}
          />
        </Button>
        <Button
          variant="contained"
          sx={{ display: "block", mx: "auto" }}
          type="submit"
        >
          Upload
        </Button>
      </Card>
    </form>
  );
};

export default ProfilePhotoForm;

// 1. Import i wywołanie useForm
// JSX:
// 2. <form> onSubmit skofigurowany tak jak w innych przypadkach użycia useForm
// W środku <form>
// 3. Card (MUI), padding 1rem
// W środku Card:
// 4. Typography variant h6, fontSize 1rem, align center, textContent Upload your profile picture
// 5. Button (MUI) variant contained, display block, mx auto, my 1rem, alignContent center
// W środku Buttona:
// 6. Typography variant h6, fontSize 1rem, align center, textContent Select a file
// 7. input (zwykły HTML) type file, hidden, zarejestruj go przy użyciu useForm pod nazwą profilePhoto
/* <input hidden/> */
// koniec buttona
// 8. Button (MUI) variant contained, display block, mx auto, type submit, textContent Upload
// koniec Card
// koniec form
// 9. Stwórz funkcję submitHandler w której będzie console.log(data)
// Pamiętaj o stworzeniu interfejsu dla useForm i submitHandler (profilePhoto: typ FileList)
