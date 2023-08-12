"use client";

import useInput from "@/components/atoms/Input/useInput";
import LoginPageTemplate from "@/components/templates/LoginPageTemplate";

export default function Home() {
  const { value, onChange: onChangeInput } = useInput({ id: "", pw: "" });
  console.log(value);

  return (
    <LoginPageTemplate
      id={value.id}
      pw={value.pw}
      onChangeInput={onChangeInput}
    />
  );
}
