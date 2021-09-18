import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import movieAPI from "../../../../../../../service/movieAPI";
import Style from "./style.module.scss";

const fetchRecommend = (url: string) => movieAPI.getRecommendations(url);
function Recommendations() {
  const router = useRouter();
  const { id } = router.query;
  if (id === undefined) return <div>Loading...</div>;

  const { data, error } = useSWR<any>(`/${id}/recommendations`, fetchRecommend);
  if (error || !data) {
    return <div></div>;
  }
  const results: any = data?.results;
  return (
    <section id={Style.panel_recommen}>
      <h3>Recommendations</h3>
      <div className={Style.recommen_scroll}>
        <ul className={Style.recommen_scroll__list}>
          {results?.length > 0 &&
            results?.map((item: any, index: number) => (
              <li key={index} className={Style.recommen_scroll__movie}>
                <div className={Style.image_content}>
                  <Link href="/">
                    <a>
                      <Image
                        src={`https://www.themoviedb.org/t/p/w250_and_h141_face${item.backdrop_path}`}
                        alt={item.title}
                        width={250}
                        height={141}
                      />
                      <div className={Style.movie_date}>
                        <FontAwesomeIcon icon={faCalendarWeek} />
                        <span style={{ marginLeft: "5px" }}>
                          {item.release_date}
                        </span>
                      </div>
                    </a>
                  </Link>
                </div>
                <p className={Style.movie_title}>
                  <Link href="/">
                    <a>
                      {item.title?.length > 20
                        ? `${item.title.substring(0, 20)}...`
                        : item.title}
                    </a>
                  </Link>
                  <span>{Math.round(item.vote_average * 10)}%</span>
                </p>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default Recommendations;
