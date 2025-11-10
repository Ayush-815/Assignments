import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return { theme, setTheme };
};
//useOutside hook click
//useDisclosure hook
//usePrevious
//useLocalStorage
//use synceExternalStore hook in react