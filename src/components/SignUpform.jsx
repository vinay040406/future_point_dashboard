"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUpForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const SaveToLocal = (value) => {
    localStorage.setItem("user", JSON.stringify(value));
    localStorage.setItem("isSignedIn", true);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("password do not match");
      return;
    }
    SaveToLocal(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    router.push("/dashboard/dash");
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center px-4 py-10 bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 sm:p-8 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Create Account
          </h1>
          <p className="text-sm text-gray-500">
            Fill in the details below to sign up.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInput}
              placeholder="John Doe"
              className={`w-full border rounded-xl px-4 py-3 text-gray-800 placeholder:text-gray-400 outline-none focus:border-blue-500 transition-all duration-200 text-sm`}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInput}
              placeholder="john@example.com"
              className={`w-full border rounded-xl px-4 py-3 text-gray-800 placeholder:text-gray-400 outline-none focus:border-blue-500 transition-all duration-200 text-sm`}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInput}
              placeholder="Min. 6 characters"
              className={`w-full border  rounded-xl px-4 py-3 text-gray-800 placeholder:text-gray-400 outline-none focus:border-blue-500 transition-all duration-200 text-sm`}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              required
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInput}
              placeholder="Re-enter your password"
              className={`w-full border rounded-xl px-4 py-3 text-gray-800 placeholder:text-gray-400 outline-none focus:border-blue-500 transition-all duration-200 text-sm`}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold text-sm transition-all duration-200 cursor-pointer mt-2"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
