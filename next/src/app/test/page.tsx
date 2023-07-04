"use client";
import React, { useEffect } from "react";
import { DatePicker } from "antd";
import { Button } from "antd";
import { LoginPayload } from "@/shared/interface/auth";
import { login, selectdatauser, selectLoading } from "@/store/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "@/store/root/store";
import styles from "./page.module.css";

export default function Test() {
  const dispatch = useAppDispatch();
  const userStore = useAppSelector(selectdatauser);
  const loadingLogin = useAppSelector(selectLoading);

  const onLoginSubmit = () => {
    console.log(userStore);
    const user = {
      username: "tho",
      password: "123456",
    };

    if (!loadingLogin) {
      dispatch(login(user as any));
    }
  };
  return (
    <>
      <Button className={styles.btn} onClick={() => onLoginSubmit()} type="primary">
        PRESS ME
      </Button>
      <DatePicker placeholder="select date" />
    </>
  );
}
