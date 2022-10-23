import React from "react";
import { Card, Typography, TextField, Button } from "@mui/material";
import { auth } from "../../helpers/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
const RegisterForm = () => {
  return <form>{/* ... */}</form>;
};

export default RegisterForm;

// 1. Głównym elementem (elementem rodzicem wszystkich innych) będzie zwykły HTMLowy <form>, atrybutem style nadaj mu display: flex i flexDirection: column
// W formularzu:
// 2. <Typography>, propy: align center, variant h2, w sx'ach fontSize 1.5rem
// 3. <TextField>, type email, placeholder email, w sx'ach: display block, margines w osi y: .5rem, margines w osi x na auto
// 4. <TextField>, type password, placeholder password, w sx'ach: display block, margines w osi y: .5rem, margines w osi x na auto
// 5. <TextField>, type password, placeholder repeat password, w sx'ach: display block, margines w osi y: .5rem, margines w osi x na auto
// 6. <Button>, variant contained, type submit, w sx'ach display block, margines w osi x na auto, textContent Register
