import { greetAction } from "./server-actions";

export default function Page() {
  return (
    <form action={greetAction}>
      <input name="name" placeholder="name" />
      <button type="submit">Submit</button>
    </form>
  );
}
