import { createContext, useState } from "react";
import { listItemData } from "../components/list-item/listItemData";

const SearchContext = createContext()
  
export const SearchProvider = ({children}) => {
  const [item, setItem] = useState('')
  const [filteredItems, setFilteredItems] = useState(listItemData)

  const handlesearch = (e) => {
    const keyword = e.target.value;
    setItem(keyword);
    const filtered = listItemData.filter(word=> word.title1.toLowerCase().includes(keyword.toLowerCase()))
    setFilteredItems(filtered)
  }

  return <SearchContext.Provider value={{
    item,
    filteredItems,
    handlesearch,
  }}>
    {children}
  </SearchContext.Provider>
}

export default SearchContext