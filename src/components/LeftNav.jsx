import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItems from "./LeftNavMenuItems";
import { Context } from "../context/contextApi";
import { categories } from "../utils/constants";

const LeftNav = () => {
  const { selectCategory, setSelectCategory, mobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectCategory(name);

      case "home":
        return setSelectCategory(name);

      case "menu":
        return false;

      default:
        break;
    }
  };

  return (
    <div className={`md:block text-white w-[240px] overflow-y-auto h-full py-4 bg-black md:relative absolute z-5 translate-x-[-240] md:translate-x-0 transition-all ${mobileMenu ? "translate-x-0" : "" }`}>
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItems
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={`${
                  selectCategory === item.name
                } ? "bg-white/[0.15]" : ""`}
              />

              {item.divider && <hr className="my-5 border-white/[0.2]"></hr>}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2]"></hr>
        <div className="text-white/[0.5] text-[12px]">
          Created by Suraj Bahadur
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
