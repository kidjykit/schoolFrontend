import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { User } from "./components/user.component";
import { Navbar } from "./components/navbar2.component";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Navbar />
      <main className="flex justify-between items-center w-[70%]  mx-auto">
        <div className="grid grid-rows-2 gap-10">
          <div>
            <br />
            <br />
            <User />
          </div>
        </div>
      </main>
    </>
  );
}
