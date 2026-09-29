export default async function PostFetch({
  name,
  children,
}: {
  name: string;
  children: Readonly<React.ReactNode>;
}) {
  return (
    <>
      <h1>PostFetch - {name}</h1>
      {children}
    </>
  );
}
