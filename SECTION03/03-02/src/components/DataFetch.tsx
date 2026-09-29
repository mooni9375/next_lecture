import UserFetch from "./UserFetch";

export default async function DataFetch({ name }: { name: string }) {
  return (
    <>
      <h1>DataFetch - bypass</h1>
      <UserFetch name={name} />
    </>
  );
}
