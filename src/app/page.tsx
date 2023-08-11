import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { User } from "./components/user.component";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <main className="flex justify-center items-center w-[70%]  mx-auto">
        <div className="grid grid-rows-1 gap-10">
          <div>
            <br />
            <br />
            {session ? (
              <User />
            ) : (
              <span className="text-5xl text-center">
                Welcome To School Dev
              </span>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
