import React from "react";

export const Input = ({
  placeholder,
  type = "text",
  register = () => ({}),
  name,
  ...rest
}) => {
  return (
    <>
      <input
        {...(register ? register(name) : {})}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </>
  );
};
