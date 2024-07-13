"use client";

import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import React from "react";

interface AddPropertyButtonProps {
  userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({ userId }) => {
  const loginModal = useLoginModal();

  const addPropertyModal = useAddPropertyModal();

  const itIsYourHome = () => {
    if (userId) {
      addPropertyModal.open();
    } else {
      loginModal.open();
    }
  };

  return (
    <div
      onClick={itIsYourHome}
      className="p-2 cursor-pointer text-semibold text-sm rounded-full hover:bg-gray-200"
    >
      It's your home
    </div>
  );
};

export default AddPropertyButton;
