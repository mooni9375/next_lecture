import UserFetch from "./UserFetch";

export default async function DataFetch({ name }: { name: string }) {
  return (
    <>
      <h1>DataFetch : {name}</h1>
      <UserFetch name="User Fetch Component" />
    </>
  );
}
