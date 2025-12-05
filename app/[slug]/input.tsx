"use server";

export async function greetAction(input: string): Promise<string> {
  const secret = "ZGVnZW5lcmF0ZSBwYXJ0eSB0aW1l"
  // fetch from https://api.example.com/secret with the secret as the Authorization header
  try {
    const response = await fetch("https://api.example.com/" + input, {
      headers: {
        Authorization: secret,
      },
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Failed to fetch from API:", error);
  }

  return `Hello, ${input}!` + (5 + 5);
}
