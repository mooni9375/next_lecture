// "use client";
import DataFetch from "@/components/DataFetch";
import ClientWrapper from "@/components/ClientWrapper";
// import { cookies, headers } from "next/headers";

export default function Page() {
  // const headerList = await headers();
  // const cookieStore = await cookies();
  // const allCookies = cookieStore.getAll();
  return (
    <>
      <h1>Page</h1>
      {/* <p>User Agent: {headerList.get("user-agent") || "Unknown"}</p>
      <p>Cookie: {cookieStore.get("name")?.value || "No cookie found"}</p>
      <p>All Cookies:</p>
      <ul>
        {allCookies.map((cookie) => (
          <li key={cookie.name}>
            {cookie.name}: {cookie.value}
          </li>
        ))}
      </ul> */}
      {/* <DataFetch name="gyomoon" /> */}
      <ClientWrapper name="Data from Client Wrapper Component to ClientWrapper">
        <DataFetch name="Data from Client Wrapper Component to DataFetch" />
      </ClientWrapper>
    </>
  );
}
