import react, { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();


//this is main contextApi code 
export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [selectCategory, setSelectCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  // dependency array - items which changes with any action are present here
  useEffect(() => {
    fetchSelectedCategoryData(selectCategory);
  }, [selectCategory]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    //here contents is coming from api result, i.e replace {contents} with result
      fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setSearchResults(contents);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCategory,
        setSelectCategory,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
