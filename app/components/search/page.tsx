'use client';
import React from "react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "./search-icon";
import HorizontalCard from "./search-result";
import Search from "./search";
import { query } from "firebase/database";
import { useSearchParams } from "next/navigation";

export default async function Page() {
    const searchParams = useSearchParams();
    const query = searchParams.get('query')||''; 
    return (
        <>
            <div className="flex flex-col bg-slate-300">
                <div className="flex flex-row">
                    <Search />
                </div>
                <div className="flex flex-row">
                    <HorizontalCard query={query}/>
                </div>
            </div>
        </>
    );
}
