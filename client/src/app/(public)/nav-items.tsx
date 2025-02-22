"use client";
import { getAccessTokenFromLocalStorage } from "@/lib/utils";
import { Item } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
    {
        title: "Món ăn",
        href: "/menu",
    },
    {
        title: "Đơn hàng",
        href: "/orders",
    },
    {
        title: "Đăng nhập",
        href: "/login",
        authRequired: false,
    },
    {
        title: "Quản lý",
        href: "/manage/dashboard",
        authRequired: true,
    },
];

export default function NavItems({ className }: { className?: string }) {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        setIsAuth(Boolean(getAccessTokenFromLocalStorage()));
    }, []);
    return menuItems.map((item) => {
        const isAuth = Boolean(getAccessTokenFromLocalStorage());

        if (
            (item.authRequired === false && isAuth) ||
            (item.authRequired === true && !isAuth)
        )
            return null;

        return (
            <Link href={item.href} key={item.href} className={className}>
                {item.title}
            </Link>
        );
    });
}
