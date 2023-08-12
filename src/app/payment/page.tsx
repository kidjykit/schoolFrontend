"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Props = {};

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

const schema = yup
  .object({
    customerName: yup.string().required(),
    amont: yup.number().positive().integer().required(),
    customerEmail: yup.string().email().required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

interface IFormInput {
  customerName: String;
  amont: number;
  customerEmail: String;
  gender: GenderEnum;
}

export default function payment({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);

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
          {errors.customerName && (
            <p className="text-red-600 before:inline before:content-['_⚠']">
              {errors.customerName.message}
            </p>
          )}
          <label>ค่าเทอม : </label>
          <input
            {...register("amont", { required: true })}
            aria-label="จำนวนเงินที่ต้องชำระ"
            type="checkbox"
            placeholder="จำนวนเงินที่ต้องชำระ"
            value={2000}
            className="border border-gray-200 rounded mb-2"
          />
          <label> 2000 บาท</label>
          {errors.amont && (
            <p className="text-red-600 before:inline before:content-['_⚠']">
              {errors.amont.message}
            </p>
          )}
          <p>อีเมลล์ : </p>
          <input
            {...register("customerEmail")}
            aria-label="Enter your email address"
            type="text"
            placeholder="Email address"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-200 rounded mb-2"
          />
          {errors.customerEmail && (
            <p className="text-red-600 before:inline before:content-['_⚠']">
              {errors.customerEmail.message}
            </p>
          )}
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
