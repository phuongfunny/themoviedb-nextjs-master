import { faArrowRight, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAppSelector } from "../../../../../../../app/hooks";
import Style from "./style.module.scss";
import Link from "next/link";

function TopCast() {
  const [list, loading] = useAppSelector(({ people: { list, loading } }) => [
    list,
    loading,
  ]);
  const people = list.cast;

  if (loading) return <div>Loading....</div>;
  return (
    <>
      <section className={Style.top_cast}>
        <h3>Top Billed Cast</h3>
        <div className={Style.cast_scroller}>
          <ul className={Style.list_cast}>
            {people &&
              people.map(
                (item: any, index: number) =>
                  index < 9 && (
                    <li key={index} className={Style.profile_cast}>
                      {item.profile_path === null ? (
                        <Link href="/">
                          <a className={Style.image_null}>
                            <FontAwesomeIcon
                              icon={faUserAlt}
                              size="2x"
                              fixedWidth
                            />
                          </a>
                        </Link>
                      ) : (
                        <Link href="/">
                          <a>
                            <img
                              src={`https://www.themoviedb.org/t/p/w138_and_h175_face${item.profile_path}`}
                              alt={item.name}
                            ></img>
                          </a>
                        </Link>
                      )}
                      <Link href="/">
                        <a>{item.name}</a>
                      </Link>
                      <p>{item.character}</p>
                    </li>
                  )
              )}
            <li className={Style.view_more}>
              <Link href="/">
                <a>
                  View More{" "}
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} size="sm" fixedWidth />
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/">
          <a className={Style.view_full}>Full Cast & Crew</a>
        </Link>
      </section>
    </>
  );
}

export default TopCast;
