"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Main from "@/style-guide/components/Main";

const Dummy = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      setCursorPosition({ x: clientX, y: clientY });
    };

    document.body.addEventListener("pointermove", moveCursor);

    return () => {
      document.body.removeEventListener("pointermove", moveCursor);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.cursor}
        style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
      ></div>
      <Main />
    </div>
  );
};

export default Dummy;
