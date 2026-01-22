"use client";

import React, { useRef } from "react";
import Image from "next/image";

export default function ViewCardButton({ img, name, item }: { img: string, name: string, item: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    dialogRef.current?.showModal();
  };

  return (
    <>
      <button
        onClick={openModal}
        className="cursor-pointer mt-auto bg-[#20364E] text-[#DDDDDD] font-bold py-2 rounded-full hover:opacity-90 transition w-full"
      >
        View {item}
      </button>

      <dialog ref={dialogRef} className="modal">
        <div className="modal-box max-w-5xl p-0 overflow-hidden bg-[#eee]">
          {/* Image */}
          <div className="relative w-full h-[70vh] lg:h-[80vh] bg-[#D7DFEA]">
            <Image
              src={img}
              alt="Machine Preview"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Actions */}
                <p className="text-4xl font-bold p-4">{name}</p>
          <div className="modal-action p-4">
            <form method="dialog"> 
              <button className="mt-auto bg-[#20364E] text-[#DDDDDD] font-bold p-4 px-8 text-xl rounded-full hover:opacity-90 transition w-full">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
