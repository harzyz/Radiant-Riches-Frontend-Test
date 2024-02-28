import { createContext, useState } from "react";
import { listItemData } from "../components/list-item/listItemData";

const SearchContext = createContext()
  
export const SearchProvider = ({children}) => {
  const [item, setItem] = useState('');
  const [filteredItems, setFilteredItems] = useState(listItemData);
  const [noItemsFound, setNoItemsFound] = useState(false);

  const handlesearch = (e) => {
    const keyword = e.target.value;
    setItem(keyword);
    const filtered = listItemData.filter(word=> word.title1.toLowerCase().includes(keyword.toLowerCase()))
    if (filtered.length === 0) {
      setNoItemsFound(true);
    } else {
      setNoItemsFound(false);
      setFilteredItems(filtered);
    }
  }

  return <SearchContext.Provider value={{
    item,
    filteredItems,
    noItemsFound,
    handlesearch,
  }}>
    {children}
  </SearchContext.Provider>
}

export default SearchContext