import React from "react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "./search-icon";
import HorizontalCard from "../horizontal-card/page";
import Search from "./search";

export default function SearchContainer() {
    return (
        <>
            <div className="flex flex-col bg-slate-300">
                <div className="flex flex-row">
                    <Search/>
                </div>
                <div className="flex flex-row">
                    <HorizontalCard/>
                </div>
            </div>
        </>
    );
}
