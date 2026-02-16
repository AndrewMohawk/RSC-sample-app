"use client";

import { useState } from "react";
import { greetAction } from "./server-actions";

export default function ClientForm() {
  const [result, setResult] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const res = await greetAction(name);
    setResult(res);
  }

  return (
    <form onSubmit={onSubmit}>
      <input name="name" placeholder="name" />
      <button type="submit">Submit</button>
      {result ? <div>{result}</div> : null}
    </form>
  );
}
