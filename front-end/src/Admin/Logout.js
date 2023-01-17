import React from "react";
import { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    console.log(localStorage.getItem());
    // localStorage.clear();
  }, []);

  return;
};

export default Logout;
