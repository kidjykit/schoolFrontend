"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  customerName: String;
  amont: number;
  customerEmail: String;
  gender: GenderEnum;
}

export default function payment({}: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <p className="text-yellow-700 text-xl my-3">Welcome to School Dev</p>
        <form onSubmit={handleSubmit(onSubmit)} className="w-72 md:w-96">
          <p>ชื่อ : </p>
          <input
            {...register("customerName", { required: true })}
            aria-label="ชื่อลูกค้า"
            type="text"
            placeholder="ชื่อลูกค้า"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-200 rounded mb-2"
          />
          {errors.customerName && "Customer name is required"}
          <p>จำนวนเงิน : </p>
          <input
            {...register("amont", { min: 1, max: 200 })}
            aria-label="จำนวนเงินที่ต้องชำระ"
            type="text"
            placeholder="จำนวนเงินที่ต้องชำระ"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-200 rounded mb-2"
          />
          <p>อีเมลล์ : </p>
          <input
            {...register("customerEmail")}
            aria-label="Enter your email address"
            type="text"
            placeholder="Email address"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-200 rounded mb-2"
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium md:whitespace-pre rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            จ่ายเงิน
          </button>
        </form>
      </div>
    </>
  );
}
