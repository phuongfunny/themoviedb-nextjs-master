import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { menuTopMovieItem } from "../../../../../constant/index";
import Style from "./style.module.scss";
function MenuTop() {
  return (
    <>
      <div className={Style.menu_top}>
        <ul className={Style.list_item}>
          {menuTopMovieItem.map((item: any, index: number) => (
            <li
              key={index}
              onMouseEnter={() => {}}
              className={`${Style.item} ${Style.overview}`}
            >
              {item.title}{" "}
              <FontAwesomeIcon icon={faCaretDown} size="sm" fixedWidth />
              <div className={Style.sub_menu}>
                <ul className={Style.sub_menu__list}>
                  {item.items.map((itemSub: any, index: number) => (
                    <li key={index} className={Style.sub_item}>
                      <span className={Style.sub_item_title}>
                        {itemSub.sub_title}
                      </span>
                      {itemSub.value && (
                        <span className={Style.sub_item_value}>
                          {itemSub.value}
                        </span>
                      )}
                      {itemSub.sub_item && (
                        <span className={Style.sub_item_icon}>
                          <FontAwesomeIcon
                            icon={faCaretRight}
                            size="sm"
                            fixedWidth
                          />
                        </span>
                      )}
                      {itemSub.sub_item && (
                        <div className={Style.item_mini_sub}>
                          <ul className={Style.item_mini_sub__list}>
                            {itemSub.sub_item.map(
                              (item: any, index: number) => (
                                <li key={index}>
                                  <span>{item.title}</span>
                                  {item.value && (
                                    <span className={Style.sub_item_value}>
                                      {item.value}
                                    </span>
                                  )}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MenuTop;
