"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Footer() {
  const pathname = usePathname();

  const menuItems = [
    {
      id: "menu-dashboard",
      href: "/mobile",
      icon: "fa-solid fa-house",
      text: "หน้าหลัก"
    },
    {
      id: "menu-customer",
      href: "/mobile/history",
      icon: "fa-solid fa-history",
      text: "ประวัติ"
    },
    {
      id: "menu-cart",
      href: "/mobile/cart",
      icon: "fa-solid fa-shopping-cart",
      text: "ตะกร้า"
    },
    {
      id: "menu-calendar",
      href: "/mobile/profile",
      icon: "fa-solid fa-user",
      text: "โปรไฟล์"
    }
  ];
  return (
    <div>
      <div className="flex justify-between m-3 p-3 rounded-[30px] fixed bottom-0 left-0 right-0 bg-white shadow-md">
        {menuItems.map((item, i) => (
          <Link key={i} href={item.href} className="menulist">
            <div className="mx-auto text-center p-2">
              <i style={{ fontSize: "1rem" }} className={`fas ${item.icon} `} />
              <div
                style={{ fontSize: "0.7rem " }}
                className={pathname === item.href ? "text-primary " : ""}
              >
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Footer;
