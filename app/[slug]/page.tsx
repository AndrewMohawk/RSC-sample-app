import { GreetingForm } from "./other";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const _params = await params;
  // This runs on the server
  const a = 1;
  console.log(a);

  return (
    <div>
      {_params.slug}

      <GreetingForm />
    </div>
  );
}
