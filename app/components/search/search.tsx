'use client';
import React from "react";
import {Input} from "@nextui-org/react";
import { SearchIcon } from "./search-icon";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const {replace} = useRouter();

  function handleSearch(term: string){
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathName}?${params.toString()}`);
  }

  return (
    <div className="bg-slate-500 px-8 rounded-2xl flex justify-center items-center text-white shadow-lg">
      <Input
        label="Search for games"
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Type to search..."
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
        onChange={(e) => {
          handleSearch(e.target.value);
        }
        }
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
}
