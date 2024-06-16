"use client";
import React from "react";

import Modal from "./Modal";
import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

type Props = {};

const LoginModal = (props: Props) => {
  const loginModal = useLoginModal();

  const content = (
    <>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Your e-mail address"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
        />

        <input
          type="password"
          placeholder="Your password"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
        />

        <div className="p-5 bg-primary text-white rounded-xl opacity-80">
          The error message
        </div>
        <CustomButton label="Submit" onClick={() => console.log("Test")} />
      </form>
    </>
  );
  return (
    <Modal
      isOpen={loginModal.isOpen}
      close={loginModal.close}
      label="Log in"
      content={content}
    />
  );
};

export default LoginModal;
