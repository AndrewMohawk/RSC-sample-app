"use server";

export async function greetAction(name: string): Promise<string> {
  return `Hello, ${name}`;
}
