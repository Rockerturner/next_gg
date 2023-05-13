import type { PropsWithChildren } from "react";
import { NavBar } from "./NavBar";

export const Layout = (props: PropsWithChildren) => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-300 dark:bg-slate-950">
      <NavBar />
      {props.children}
    </main>
  );
};
