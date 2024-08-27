import { useContext } from "react";
import { SoftUI } from ".";
import { SoftUIContextType } from "./SoftUITypes";

// Soft UI Dashboard React custom hook for using context
export const useSoftUIController = ():SoftUIContextType => {
    const context = useContext(SoftUI);
    if (!context) {
      throw new Error("useSoftUIController should be used inside the SoftUIControllerProvider.");
    }

    return context;
}