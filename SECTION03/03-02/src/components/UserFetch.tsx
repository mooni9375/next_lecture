import UserForm from "./UserForm";

export default async function UserFetch({ name }: { name: string }) {
  return (
    <>
      <h1>UserFetch</h1>
      <UserForm name={name} />
    </>
  );
}
