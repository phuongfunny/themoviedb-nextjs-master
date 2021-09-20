import {
  faBookmark,
  faHeart,
  faListUl,
  faPlay,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircularProgress } from "@material-ui/core";
import { default as dayjs } from "dayjs";
import _ from "lodash";
import React from "react";
import { useAppSelector } from "../../../../../../../app/hooks";
import Style from "./style.module.scss";
import Link from "next/link";

function ProfileMovie() {
  const [detail, loading] = useAppSelector(
    ({ movies: { detail, loading } }) => [detail, loading]
  );
  const [list, loadingPeople] = useAppSelector(
    ({ people: { list, loading } }) => [list, loading]
  );
  if (loading || loadingPeople) return <div>Loading....</div>;
  //get list crew for movie
  // use Object.keys(list).reduce to get list selective
  // if not use this then need declare type reduce
  const list_crew = list.crew.reduce((ids: any, value: any) => {
    if (
      value.job === "Director" ||
      value.job === "Writer" ||
      value.job === "Screenplay" ||
      value.job === "Characters"
    ) {
      ids.push(value);
    }
    return ids;
  }, []);
  //group list crew by name
  const list_people = _(list_crew)
    .groupBy("name")
    .map(function (items: any, name: string) {
      return {
        name: name,
        jobs: _.map(items, "job"),
      };
    })
    .value();
  return (
    <div className={Style.banner_profile}>
      <div className={Style.profile}>
        <div className={Style.profile_content}>
          <h2 style={{ color: "#fff" }}>
            {detail.original_title}
            <span
              className={Style.release_year}
              style={{ marginLeft: "5px", color: "#d5d4d7" }}
            >
              ({dayjs(detail.release_date).year()})
            </span>
          </h2>
        </div>
        <div className={`${Style.profile_content} ${Style.facts}`}>
          <span className={Style.certification}>R</span>
          <span>{dayjs(detail.release_date).format("DD/MM/YYYY")}</span>
          <span className={Style.dot}></span>
          <span className={Style.genres}>
            {detail.genres.map((item: any, index: number) => (
              <Link href="/">
                <a key={index}>
                  {item.name}
                  {index < detail.genres.length - 1 ? "," : ""}
                </a>
              </Link>
            ))}
          </span>
          <span className={Style.dot}></span>
          <span>
            {Math.floor(detail.runtime / 60)}h {detail.runtime % 60}m
          </span>
        </div>
        <ul className={`${Style.profile_content} ${Style.actions}`}>
          <li className={Style.vote}>
            <div className={Style.chart}>
              <CircularProgress
                variant="determinate"
                value={detail.vote_average * 10}
                className={detail.vote_average * 10 < 70 ? "low" : ""}
              />
              <p className={Style.tt_vote}>{detail.vote_average * 10}%</p>
            </div>
            <div className={Style.text}>User Score</div>
          </li>
          <li className={`${Style.item} ${Style.custom_list}`}>
            <Link href="/">
              <a>
                <FontAwesomeIcon icon={faListUl} size="sm" fixedWidth />
              </a>
            </Link>
            <div
              className={`${Style.popover_item} ${Style.custom_list__popover}`}
            >
              Login to create and edit custom lists
            </div>
          </li>
          <li className={`${Style.item} ${Style.favorite}`}>
            <Link href="/">
              <a>
                <FontAwesomeIcon icon={faHeart} size="sm" fixedWidth />
              </a>
            </Link>
            <div
              className={`${Style.popover_item} ${Style.custom_list__popover}`}
            >
              Login to add this movie to your favorite list
            </div>
          </li>
          <li className={`${Style.item} ${Style.watch_list}`}>
            <Link href="/">
              <a>
                <FontAwesomeIcon icon={faBookmark} size="sm" fixedWidth />
              </a>
            </Link>
            <div
              className={`${Style.popover_item} ${Style.custom_list__popover}`}
            >
              Login to add this movie to your watchlist
            </div>
          </li>
          <li className={`${Style.item} ${Style.star}`}>
            <Link href="/">
              <a>
                <FontAwesomeIcon icon={faStar} size="sm" fixedWidth />
              </a>
            </Link>
            <div
              className={`${Style.popover_item} ${Style.custom_list__popover}`}
            >
              Login to rate this movie
            </div>
          </li>
          <li>
            <Link href="/">
              <a>
                <FontAwesomeIcon icon={faPlay} size="sm" fixedWidth />
                <span style={{ marginLeft: "5px" }}>Play videos</span>
              </a>
            </Link>
          </li>
        </ul>
        <div className={`${Style.profile_content} ${Style.infor_movie}`}>
          <h3 className={Style.tagline}>
            <i>{detail.tagline}</i>
          </h3>
          <h3>Overview</h3>
          <p className={Style.overview}>{detail.overview}</p>
          <ol className={Style.people}>
            {list_people.length > 0 &&
              list_people.map((item: any, index: number) => (
                <li key={index}>
                  <p className={Style.name}>{item.name}</p>
                  <p> {item.jobs.toString()}</p>
                </li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ProfileMovie;
