import React from "react";
import { Card, Typography, TextField, Button } from "@mui/material";
import { auth } from "../../helpers/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
const RegisterForm = () => {
  return (
    <form
      style={{ display: "flex", flexDirection: "column", marginTop: "1rem" }}
    >
      <Typography align="center" variant="h2" sx={{ fontSize: "1.5rem" }}>
        Register new account
      </Typography>
      <TextField
        type="email"
        placeholder="email"
        sx={{ display: "block", my: ".5rem", mx: "auto" }}
      />
      <TextField
        type="password"
        placeholder="password"
        sx={{ display: "block", my: ".5rem", mx: "auto" }}
      />
      <TextField
        type="password"
        placeholder="repeat password"
        sx={{ display: "block", my: ".5rem", mx: "auto" }}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ display: "block", mx: "auto" }}
      >
        Register
      </Button>
    </form>
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
