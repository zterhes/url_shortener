import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Bars3Icon } from "@heroicons/react/24/solid";
import MobileMenuButton from "./MenuButton";
import constants from "../constants";

const MENU_BUTTON_STYLE: string = "basis-[13%] text-center w-full";

const MenuDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Bars3Icon className="w-7 h-7" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 " />
        <Dialog.Content className="fixed top-[50%] left-[45%] translate-x-[-50%] translate-y-[-50%] max-h-[85vh] w-4/5 bg-primary-darkViolet text-white font-bold flex flex-col items-center justify-evenly  px-7 h-96 rounded-xl mx-5">
          <Dialog.Title />
          <Dialog.Description />
          <MobileMenuButton
            className={MENU_BUTTON_STYLE}
            buttonText={constants.menu.features}
          />
          <MobileMenuButton
            className={MENU_BUTTON_STYLE}
            buttonText={constants.menu.pricing}
          />
          <MobileMenuButton
            className={MENU_BUTTON_STYLE}
            buttonText={constants.menu.resources}
          />
          <MobileMenuButton
            className={MENU_BUTTON_STYLE}
            buttonText={constants.menu.features}
          />
          <hr className={MENU_BUTTON_STYLE} />
          <MobileMenuButton
            className={MENU_BUTTON_STYLE}
            buttonText={constants.menu.login}
          />
          <MobileMenuButton
            className={
              "bg-primary-cyan rounded-2xl w-[100%] basis-[12%] text-center"
            }
            buttonText={constants.menu.signUp}
          />
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MenuDialog;
