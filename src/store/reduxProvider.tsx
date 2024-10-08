import React from "react";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "./store.ts";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}