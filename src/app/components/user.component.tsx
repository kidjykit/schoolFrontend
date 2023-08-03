"use client";

import { useSession } from "next-auth/react";

export const User = () => {
  const { data: session } = useSession();

  return (
    <>
      <h1>Client Session</h1>
      <div>
        <ul>
          <li>Name : {session?.user.firstname}</li>
          <li>Lastname :{session?.user.lastname}</li>
          <li>Email : {session?.user?.email}</li>
          <li>School ID :{session?.user.school}</li>
        </ul>
      </div>
    </>
  );
};
