import React, { Children } from "react";

function layout({ children }: { children: React.ReactNode }) {
  return <div className="h-full justify-center flex items-center">{children}</div>;
}

export default layout;
