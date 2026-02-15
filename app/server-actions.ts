"use server";

export async function greetAction(formData: FormData) {
  const name = String(formData.get("name") || "");
  console.log(`Hello, ${name}!`);
}
