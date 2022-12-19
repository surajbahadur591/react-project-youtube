import React from "react";
import { AppContext } from "./context/contextApi";
import { BrowserHistory, Routes, Route, BrowserRouter } from "react-router-dom";

// importing user defined components

import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";

const App = () => {
  return (
    <AppContext>
      {/* BrowserRouter ->  Routes ->  Route  */}
      <BrowserRouter>
        <div className="flex flex-col h-full">
          {/* header will be on all pages, hence keeping it outsite routes  */}
          <Header />
        
          <Routes>
            {/* in path we have to keep url and in element we have to keep component which needs to be render */}
            <Route path="" element={<Feed />}></Route>
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResult />}
            ></Route>
            <Route path="/videos/:id" element={<VideoDetails />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
