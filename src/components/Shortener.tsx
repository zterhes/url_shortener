import React from "react";
import constants from "../constants";
import { DesignedButton } from "./DesignedButton";

export const Shortener = () => {
  return (
    <div className="flex max-md:flex-col rounded-lg align-middle mt-20 md:p-12 max-md:p-10 bg-primary-darkViolet w-full h-36 bg-[url('../public/images/bg-shorten-desktop.svg')]">
      <input
        type="text"
        placeholder="Shorten a link here..."
        className="rounded-xl md:basis-9/12 pl-5 md:mr-5 max-md:h-full"
      />
      <DesignedButton
        size="md:basis-2/12 max-md:h-full "
        buttonText={constants.shortener.buttontext}
      />
    </div>
  );
};
