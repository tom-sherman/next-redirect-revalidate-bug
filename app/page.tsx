import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const count = cookies().get("count")?.value || "0";
  return (
    <form>
      <button
        formAction={async () => {
          "use server";
          const count = cookies().get("count")?.value || "0";
          cookies().set("count", String(Number(count) + 1));
        }}
      >
        Count: {count}
      </button>
      <button
        formAction={async () => {
          "use server";
          cookies().delete("count");
          revalidatePath("/", "layout");
          redirect("/");
        }}
      >
        reset
      </button>
    </form>
  );
}
