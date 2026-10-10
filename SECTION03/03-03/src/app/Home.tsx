import { cookies, headers } from "next/headers";

export default async function Home() {
  const headerList = await headers();
  const userAgent = headerList.get("user-agent") || "unknown";

  const myHeader = new Headers();
  myHeader.append("my-header", "my-value");

  const cookieStore = await cookies();
  const myCookie = cookieStore.getAll();

  return (
    <>
      <div>
        {Array.from(headerList.entries()).map(([key, value]) => (
          <p key={key}>
            {key}: {value}
          </p>
        ))}
      </div>
      <br />
      <div>
        {Array.from(myHeader.entries()).map(([key, value]) => (
          <p key={key}>
            - {key}: {value}
          </p>
        ))}
      </div>
      <br />
      <div>
        {myCookie.map((cookie) => (
          <p key={cookie.name}>
            {cookie.name}: {cookie.value}
          </p>
        ))}
      </div>
    </>
  );
}
