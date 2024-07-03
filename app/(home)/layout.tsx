import Topbar from "@/components/layout/Topbar";
import React, { Children } from "react";

function HomeLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Topbar />
      {children}
    </>
  );
}

export default HomeLayout;
