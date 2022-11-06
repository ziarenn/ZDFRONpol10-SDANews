import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { SearchFormData, SearchFormProps } from "../../helpers/interfaces";

const SearchForm: React.FC<SearchFormProps> = ({ setKeyword }) => {
  
  const { register, handleSubmit } = useForm<SearchFormData>();

  const submitHandler = ({ keyword }: SearchFormData) => {
    setKeyword(keyword);
  };

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

// 1. Stwórz nowy koponent SearchPage
// 2. W tym komponenecie (pkt 1) stwórz stan keyword
// 3. Wyświetl w JSX komponent SearchForm, funkcję aktualizującą stan keyword przekaż propsem do SearchForm
// 4. Stwórz interface dla SearchForm, otypuj submitHandler i useForm
// 5. Wywołaj funkcję aktualizującą stan keyword, do stanu keyword wysyłaj wartość keyword z SearchForma
