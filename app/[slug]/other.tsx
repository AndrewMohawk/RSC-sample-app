"use client";

import { useState } from "react";
import { greetAction } from "./input";

export function GreetingForm() {
  const [result, setResult] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = new FormData(e.currentTarget).get("name") as string;
    const res = await greetAction(name);
    setResult(res);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className="border px-4 py-2 rounded" name="name" />
      <button>Submit</button>
    </form>
  );
}
