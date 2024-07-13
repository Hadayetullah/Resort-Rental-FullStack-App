"use client";

import Image from "next/image";

import Modal from "./Modal";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";

const AddPropertyModal = () => {
  const addPropertyModal = useAddPropertyModal();

  return (
    <>
      <Modal
        isOpen={addPropertyModal.isOpen}
        close={addPropertyModal.close}
        label="Add Property"
        content={<p>Yo</p>}
      />
    </>
  );
};

export default AddPropertyModal;
