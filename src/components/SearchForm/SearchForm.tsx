import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
// 1. Import i wywolanie useForm
// 2. Stwórz pustą funkcję submitHandler
// JSX:
// 3. <form> (HTML) z onSubmit tak jak w kazdym innym, style display flex, flexDirection column
// W środku form:
// 4. TextField (MUI) placeholder Keyword, zarejestrowac pod nazwa keyword, my '.5rem', diplsay block, mx auto
// 5. Button (MUI) variant contained, type submit, display block, mx auto, textContent Seatch

const SearchForm = () => {
  const { register, handleSubmit } = useForm();

  const submitHandler = () => {};

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <TextField
        placeholder="Keyword"
        {...register("keyword", { required: true })}
        sx={{ my: ".5rem", display: "block", mx: "auto" }}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ display: "block", mx: "auto" }}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
