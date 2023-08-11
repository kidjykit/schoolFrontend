"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

type Props = {};

//ตัวอย่างการ Search Data หลังจาก get จาก api มาแล้ว
export default function Dashboard({}: Props) {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState(data);

  const fetchAPI = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setData(res.data);
    setRecords(res.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const SearchData = (e?: any) => {
    const filter = data.filter((element: any) =>
      element.name.toLowerCase().includes(e.target.value)
    );
    setRecords(filter);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        aria-label="Search..."
        className="my-3 curborder-2 border-blue-600 caret-blue-600 rounded text-sm text-gray-base mr-3 py-5 px-4 h-2 mb-2"
        type="text"
        placeholder="Search..."
        onChange={SearchData}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {records.map((e: any, i) => (
            <tr key={i}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.username}</td>
              <td>{e.email}</td>
              <td>{e.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
