import { Search as SearchIcon } from "lucide-react";

type SearchProps = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};

const Search = ({ searchTerm, setSearchTerm }: SearchProps) => {
  return (
    <div className="search">
      <div>
        <SearchIcon className="search-icon" />
        <input
          type="text"
          placeholder="Search movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
