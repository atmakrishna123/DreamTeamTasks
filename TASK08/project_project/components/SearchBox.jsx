import {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
const SearchBox=()=>{
    const [query,setQuery]=useState('');
    const handleSearch=(e)=>{
        e.preventDefault();
        console.log('Searching for:',query);
    };
    return(
        <div className="searchBox relative">
            <div className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={(e)=>setQuery(e.target.value)}
                    placeholder="Search films..."
                    className="bg-gray-800 text-white rounded-full py-2 px-4 w-full pl-10 focus:outline-none"
                />
                <button 
                    type="submit"
                    className="searchButton"
                    onClick={handleSearch}
                >
                    <SearchIcon/>
                </button>
            </div>
        </div>
    );
};
export default SearchBox;