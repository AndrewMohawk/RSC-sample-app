import { greetAction } from "./server-actions";

export default function Page() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h1>RSC Sample</h1>
      <form action={greetAction}>
        <input name="name" placeholder="name" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
