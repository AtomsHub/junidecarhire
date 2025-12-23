import { useEffect, useState } from "react";

export type FormController = {
  status: "idle" | "loading" | "success" | "error";
  submit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

export const useForm = (): FormController => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setStatus("loading");
  const form = e.currentTarget; 
  const formData = new FormData(form);

  try {
    const res = await fetch("https://formspree.io/f/xpwvkrgz", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (res.ok) {
      setStatus("success");
      form.reset(); 
    } else {
      setStatus("error");
    }
  } catch (error) {
    console.error("Network Error:", error);
    setStatus("error");
  }
};
  return { status, submit };
};
