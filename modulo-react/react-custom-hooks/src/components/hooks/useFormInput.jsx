import { useState } from "react";

export const useFormInput = (inicialValue) => {
  const [value, setValue] = useState(inicialValue);

  const handleChange = (event) => {
    setValue(event.taget.value);
  };

  const inputProps = {
    value: value,
    onChange: handleChange,
  };
  return inputProps;
};
 