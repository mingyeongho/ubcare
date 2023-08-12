"use client";

import { ChangeEvent, useCallback, useState } from "react";

const useInput = (defaultValue: Record<string, string>) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return { value, onChange };
};

export default useInput;
