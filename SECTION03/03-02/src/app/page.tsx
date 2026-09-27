import { cookies, headers } from "next/headers";

export default async function Page() {
  const headerList = await headers();
  const cookieStore = await cookies();
  const allCookies = cookieStore.getAll();
  return (
    <>
      <h1>Page-modified</h1>
      <p>User Agent: {headerList.get("user-agent") || "Unknown"}</p>
      <p>Cookie: {cookieStore.get("name")?.value || "No cookie found"}</p>
      <p>All Cookies:</p>
      <ul>
        {allCookies.map((cookie) => (
          <li key={cookie.name}>
            {cookie.name}: {cookie.value}
          </li>
        ))}
      </ul>
    </>
  );
}
