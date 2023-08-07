"use client";
import React, { useRef, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const { data: session } = useSession();
  const [error, setError] = useState(false);

  if (session) {
    redirect("/");
  }

  const emailRef = useRef("");
  const passRef = useRef("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      email: emailRef.current,
      password: passRef.current,
      redirect: false,
      callbackUrl: "/",
    });

    if (!result?.error) {
    } else {
      setError(true);
    }
  };
  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 px-5 py-12 md:w-96 rounded-2xl shadow-lg">
          <div className="px-8">
            <h2 className="font-bold text-2xl text-[#002D74]">เข้าสู่ระบบ</h2>
            <div className="text-sm flex flex-col gap-4 mt-4">
              <input
                type="email"
                className="p-2 rounded-xl border"
                placeholder="Email / ชื่อผู้ใช้"
                onChange={(e) => (emailRef.current = e.target.value)}
              />
              <input
                type="password"
                className="p-2 rounded-xl border w-full"
                placeholder="รหัสผ่าน"
                onChange={(e) => (passRef.current = e.target.value)}
              />
              {error ? (
                <div className="text-xl text-red-700">
                  ชื่อผู้ใช้ หรือ รหัสผ่านไม่ถูกต้อง
                </div>
              ) : (
                <div></div>
              )}
              <button
                onClick={onSubmit}
                className="bg-[#002D74] text-white rounded-xl py-2 hover:scale-105
                duration-300"
              >
                เข้าสู่ระบบ
              </button>
            </div>
            <div className="mt-2 text-xs text-[#002D74] underline">
              <a href="#">ลืมรหัสผ่าน</a>
            </div>
            <div className="mt-6 text-gray-400 grid items-center grid-cols-3">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">หรือ</p>
              <hr className="border-gray-400" />
            </div>

            <div className="mt-5 text-xs flex justify-between items-center">
              <p className="text-gray-400">คุณยังไม่มีบัญชีใช่หรือไม่?</p>
              <a href="#" className="text-[#002D74]">
                สมัครสมาชิก
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
