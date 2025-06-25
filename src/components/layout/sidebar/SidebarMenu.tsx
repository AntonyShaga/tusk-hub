import { MAIN_MENU } from "@/components/layout/sidebar/data/main-menu.data";
import Link from "next/link";

export function SidebarMenu() {
  return (
    <nav className={"mb-10 mt-3"}>
      <ul className={"space-y-4"}>
        {MAIN_MENU.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={
                "text-neutral-500 flex items-center justify-between dark:text-white dark:hover:text-primary hover:text-neutral-900 transition-colors pl-2"
              }
            >
              {/*<item.icon size={20} />*/}
              <span>{item.label}</span>
              {item.label === "Messages" && (
                <span
                  className={
                    "text-primary bg-[#DCDEF6] rounded-lg px-2 text-xs font-medium"
                  }
                >
                  4
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
