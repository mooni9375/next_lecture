import PostFetch from "./PostFetch";
import UserForm from "./UserForm";

export default async function UserFetch({ name }: { name: string }) {
  return (
    <>
      <h1>UserFetch - bypass</h1>
      <PostFetch name="Data from UserFetch to PostFetch">
        <UserForm name={name} />
      </PostFetch>
    </>
  );
}
