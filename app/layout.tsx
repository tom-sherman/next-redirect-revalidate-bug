import { cookies } from "next/headers";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <p>{cookies().get("count")?.value || "0"}</p>
        {children}
      </body>
    </html>
  );
}
