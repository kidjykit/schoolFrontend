"use client";

import { useSession } from "next-auth/react";

export const User = () => {
  const { data: session } = useSession();

  return (
    <>
      <h1>Client Session</h1>
      <div className="break-all">
        <ul>
          <li>Name : {session?.user?.firstname}</li>
          <li>Lastname :{session?.user?.lastname}</li>
          <li>Email : {session?.user?.email}</li>
          <li>School ID :{session?.user?.school}</li>
          <li>accessToken :{session?.accessToken}</li>
        </ul>
      </div>
    </>
  );
};
