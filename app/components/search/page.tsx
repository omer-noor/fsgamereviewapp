import HorizontalCard from "./search-result";
import Search from "./searchProvider";
import { useRouter } from 'next/navigation';

export default function Page(queryParams:any) {    
    const query = queryParams || '';
    return (
        <>
            <div className="flex flex-col overflow-auto max-h-96">
                <div className="flex flex-col">
                    <Search />
                </div>
                <div className="flex flex-col">
                    <HorizontalCard query={query}/>
                </div>
            </div>
        </>
    );
}
