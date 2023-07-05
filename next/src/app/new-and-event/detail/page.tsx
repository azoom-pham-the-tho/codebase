"use client";
import { useEffect, useState } from "react";
import styles from "./style.module.css";

export default function Detail() {
  const [dataRender, setDataRender] = useState<any>();
  useEffect(() => {
    const data = localStorage.getItem("contentFile");
    setDataRender(JSON.parse(data || ""));
  }, []);
  return (
    <div
      className={styles.innerHTML}
      dangerouslySetInnerHTML={{ __html: dataRender }}
    />
  );
}
