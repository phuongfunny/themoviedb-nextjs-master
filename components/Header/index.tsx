import React, { useEffect, useState } from "react";
import Logo from "../../public/images/logo.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

function Header() {
  const [subMovie, setSubMovie] = useState<Boolean>(false);
  const [subShows, setSubShows] = useState<Boolean>(false);
  const [subPeople, setSubPeople] = useState<Boolean>(false);
  const [subMore, setSubMore] = useState<Boolean>(false);
  const [classHeader, setClassHeader] = useState<string>("normal nav-down");
  const listenScrollEvent = (event: any) => {
    if (window.scrollY >= 70) {
      return setClassHeader("normal nav-up");
    } else if (window.scrollY <= 73) {
      return setClassHeader("normal nav-down");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header className={classHeader} id="movie-header">
      <div className="content">
        <div className="nav">
          <div className="nav-menu">
            <Link href="/">
              <a className="logo">
                <Image src={Logo} alt="logo" />
              </a>
            </Link>

            <ul className="sub-menu">
              <li
                className="item-movie"
                onMouseEnter={() => setSubMovie(true)}
                onMouseLeave={() => setSubMovie(false)}
              >
                Movies
                {subMovie && (
                  <div className="pop-movie popup-sub">
                    <Link href="/movies">
                      <a>Popular</a>
                    </Link>
                    <Link href="/movies">
                      <a>Now Playing</a>
                    </Link>
                    <Link href="/movies">
                      <a>Upcoming</a>
                    </Link>
                    <Link href="/movies">
                      <a>Top Rated</a>
                    </Link>
                  </div>
                )}
              </li>
              <li
                className="item-shows"
                onMouseEnter={() => setSubShows(true)}
                onMouseLeave={() => setSubShows(false)}
              >
                TV Shows
                {subShows && (
                  <div className="pop-shows popup-sub">
                    <Link href="/movies">
                      <a>Popular</a>
                    </Link>
                    <Link href="/movies">
                      <a>Airing Today</a>
                    </Link>
                    <Link href="/movies">
                      <a>On TV</a>
                    </Link>
                    <Link href="/movies">
                      <a>Top Rated</a>
                    </Link>
                  </div>
                )}
              </li>
              <li
                className="item-people"
                onMouseEnter={() => setSubPeople(true)}
                onMouseLeave={() => setSubPeople(false)}
              >
                People
                {subPeople && (
                  <div className="pop-people popup-sub">
                    <Link href="/">
                      <a>Popular People</a>
                    </Link>
                  </div>
                )}
              </li>
              <li
                className="item-more"
                onMouseEnter={() => setSubMore(true)}
                onMouseLeave={() => setSubMore(false)}
              >
                More
                {subMore && (
                  <div className="pop-more popup-sub">
                    <Link href="/movies">
                      <a>Discussions</a>
                    </Link>
                    <Link href="/movies">
                      <a>Leaderboard</a>
                    </Link>
                    <Link href="/movies">
                      <a>Support</a>
                    </Link>
                    <Link href="/movies">
                      <a>API</a>
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </div>
          <div className="nav-action">
            <ul className="list-action">
              <li className="icon-plus">
                <FontAwesomeIcon icon={faPlus} size="lg" fixedWidth />
              </li>
              <li className="lang">
                <div className="lang-sign">EN</div>
              </li>
              <li>Login</li>
              <li>Join TMDB</li>
              <li className="item-search">
                <FontAwesomeIcon icon={faSearch} size="lg" fixedWidth />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
