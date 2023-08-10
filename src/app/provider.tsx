"use client";

import { GlobalStyle } from "@/styles/GlobalStyle";
import { PropsWithChildren } from "react";

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Provider;
