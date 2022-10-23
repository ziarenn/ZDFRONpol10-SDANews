import React from "react";
import { Card, Typography, TextField, Button } from "@mui/material";
import { auth } from "../../helpers/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { RegisterFormData } from "../../helpers/interfaces";
const RegisterForm = () => {
  const { register, handleSubmit } = useForm<RegisterFormData>();

  // 1. Zarejestrować resztę inputów (nadaj im nazwy rejestracyjne password i password2), zaktualizuj odpowiednio interface RegisterFormData
  // W submitHandler:
  // 2. Sprawdz czy password jest równy password2 (zrób to ifem)
  // 3. Jeżeli password jest password2, wywołaj funkcję createUserWithEmailAndPassword z odpowiednimi argumentami.
  // 4. Na funkcję createUser... dodaj thena w którym wykonaj console.log('Successfully registered') oraz catcha z console.log(err.message)

  // data to obiekt który zawiera pary klucz:wartosc (nazwaRejestracyjnaInputu:wartoscInputuPrzySubmit)
  const submitHandler = ({ email, password, password2 }: RegisterFormData) => {
    if (password === password2) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Success"))
        .catch((err) => console.error(err.message));
    } else {
      alert("Passwords are different!");
    }
  };

  // submit => handleSubmit() *zbiera wartości i tworzy obiekt data* => submitHandler(data)
  // handleSubmit zbiera wartości wszystkich zarejestrowanych inputow w momencie submitu formularza i zlepia te wartości w jeden obiekt (data), po czym wywołuje submitHandler i przekazuje tam jako argument obiekt data
  return (
    <Card
      sx={{
        mt: "1rem",
        display: "block",
        mx: "auto",
        p: ".5rem",
        width: "95%",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column", marginTop: ".5rem" }}
        onSubmit={handleSubmit(submitHandler)}
      >
        <Typography align="center" variant="h2" sx={{ fontSize: "1.5rem" }}>
          Register new account
        </Typography>
        <TextField
          type="email"
          placeholder="email"
          sx={{ display: "block", my: ".5rem", mx: "auto" }}
          {...register("email", { required: true })}
          //   funkcja register zwraca array potrzebnych do rejestracji atrybutów, przez spread operator, te atrybuty "rozsypują się" w elemencie
        />
        <TextField
          type="password"
          placeholder="password"
          sx={{ display: "block", my: ".5rem", mx: "auto" }}
          {...register("password", { required: true })}
        />
        <TextField
          type="password"
          placeholder="repeat password"
          sx={{ display: "block", my: ".5rem", mx: "auto" }}
          {...register("password2", { required: true })}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ display: "block", mx: "auto" }}
        >
          Register
        </Button>
      </form>
    </Card>
  );
};

export default RegisterForm;

// 1. Głównym elementem (elementem rodzicem wszystkich innych) będzie zwykły HTMLowy <form>, atrybutem style nadaj mu display: flex i flexDirection: column
// W formularzu:
// 2. <Typography>, propy: align center, variant h2, w sx'ach fontSize 1.5rem
// 3. <TextField>, type email, placeholder email, w sx'ach: display block, margines w osi y: .5rem, margines w osi x na auto
// 4. <TextField>, type password, placeholder password, w sx'ach: display block, margines w osi y: .5rem, margines w osi x na auto
// 5. <TextField>, type password, placeholder repeat password, w sx'ach: display block, margines w osi y: .5rem, margines w osi x na auto
// 6. <Button>, variant contained, type submit, w sx'ach display block, margines w osi x na auto, textContent Register
