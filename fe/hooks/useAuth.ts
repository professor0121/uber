import { useState, useCallback, ChangeEvent, FormEvent } from "react";
import { AuthMode, AuthForm } from "../types/auth.types";

type UseAuthReturn = {
  form: AuthForm;
  loading: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export const useAuth = (mode: AuthMode): UseAuthReturn => {
  const [form, setForm] = useState<AuthForm>({
    name: "",
    email: "",
    phone: "",
    role:"raider",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  type InputEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

  const handleChange = useCallback((e: InputEvent) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);

      try {
        if (mode === "login") {
          console.log("Login Data:", {
            email: form.email,
            password: form.password,
          });

          // await loginApi(form)
        } else {
          console.log("Register Data:", form);

          // await registerApi(form)
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message);
        }
      } finally {
        setLoading(false);
      }
    },
    [form, mode],
  );

  return {
    form,
    loading,
    handleChange,
    handleSubmit,
  };
};
