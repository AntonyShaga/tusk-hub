import React from "react";
interface Props {
  title: string;
}
export function SidebarHeading({ title }: Props) {
  return <div className={"mb-2.5 text-neutral-400"}>{title}</div>;
}
