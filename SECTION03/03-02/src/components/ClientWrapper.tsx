"use client";
export default function ClientWrapper({
  name,
  children,
}: {
  name: string;
  children: Readonly<React.ReactNode>;
}) {
  return (
    <>
      <h1>{name}</h1>
      {children}
    </>
  );
}
