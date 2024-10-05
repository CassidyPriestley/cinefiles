import { useEffect } from "react";

export const useTitle = (title) => {
  // Page Title
  useEffect(() => {
    document.title = `${title} / CineFiles`;
  });
  return null;
};
