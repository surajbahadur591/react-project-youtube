import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import SearchResultVideo from "./SearchResultVideo";

import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

const SearchResult = () => {
  const [results, setResults] = useState();
  const { searchQuery } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchQuery();
  }, [searchQuery]);

  const fetchSearchQuery = () => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
      console.log(res);
      setResults(res?.contents);
      setLoading(false);
    });
  };

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] bg-black text-white h-full overflow-y-auto ">
        <div className="grid grid-cols-1 gap-2 p-5">
          {results?.map((item) => {
            if (item?.type !== "video") return false;
            let video = item?.video;
            return <SearchResultVideo key={video?.videoId} video={video} />;
          })}
        </div>
        
      </div>
    </div>
  );
};

export default SearchResult;
