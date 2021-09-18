import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import dayjs from "dayjs";
import { NextPage } from "next";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { discussion } from "../../../../../../../constant/index";
import movieAPI from "../../../../../../../service/movieAPI";
import Style from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";

export interface Data {
  author: string;
  author_details: { avatar_path: string; rating: string };
  release_date: string;
  content: string;
}

const fetcher = (url: string) => movieAPI.getReviewMovie(url);

const Social: NextPage<{}> = () => {
  const [value, setValue] = useState(0);
  const [openReview, setOpenReview] = useState(true);
  const [openDisc, setOpenDisc] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  if (id === undefined) return <div>Loading...</div>;

  const { data, error } = useSWR<any>(`/${id}/reviews`, fetcher);

  if (error) {
    return <ErrorPage statusCode={404} />;
  }
  const results: any = data?.results;
  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };
  const handleOpenReview = () => {
    setOpenReview(true);
    setOpenDisc(false);
  };
  const handleOpenDicussions = () => {
    setOpenReview(false);
    setOpenDisc(true);
  };

  if (results?.length > 0) {
    if (results[0].author === "") return <div>Loading...</div>;
  }
  // useEffect(() => {
  //   const jssStyles: any = document.querySelector(
  //     "#jss-server-side"
  //   ) as HTMLElement;
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }, []);

  return (
    <>
      <section id={Style.special_pannel}>
        <div className={Style.menu}>
          <h3>Social</h3>
          <Paper square className={Style.tab_option}>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab
                label={`Review ${results?.length}`}
                onClick={handleOpenReview}
              />
              <Tab
                label={`Discussions ${results?.length}`}
                onClick={handleOpenDicussions}
              />
            </Tabs>
          </Paper>
        </div>
        <div>
          {openReview && results?.length > 0 && (
            <div className={Style.content_review}>
              <div className={Style.content_review_inner}>
                <div>
                  <div className={Style.profile}>
                    <div className={Style.avatar}>
                      <Link href="/">
                        <a>
                          <Image
                            src={`https://www.themoviedb.org/t/p/w64_and_h64_face${results[1].author_details.avatar_path}`}
                            alt={results[0].author}
                            height={64}
                            width={64}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className={Style.infor}>
                      <div className={Style.rating}>
                        <h3>
                          <Link href="/">
                            <a>A review by {results[0].author}</a>
                          </Link>
                        </h3>
                        {results[1].author_details.rating !== null && (
                          <div className={Style.rate}>
                            <FontAwesomeIcon
                              color="white"
                              icon={faStar}
                              size="sm"
                              fixedWidth
                            />
                            <span>{results[1].author_details.rating}.0</span>
                          </div>
                        )}
                      </div>
                      <h5>
                        Written by{" "}
                        <span style={{ color: "#727272" }}>
                          {results[0].author}
                        </span>{" "}
                        on{" "}
                        {dayjs(results[0].release_date).format("MMM DD, YYYY")}
                      </h5>
                    </div>
                  </div>
                  <div className={Style.teaser}>
                    {results[0].content.length > 300 ? (
                      <p>
                        {results[0].content.substring(0, 300)}...{" "}
                        <span>
                          <Link href="/">
                            <a>read more</a>
                          </Link>
                        </span>
                      </p>
                    ) : (
                      <p>{results[0].content}</p>
                    )}
                  </div>
                </div>
              </div>
              <a href="/" style={{ marginTop: "20px" }}>
                Read All Reviews
              </a>
            </div>
          )}
          {openDisc && (
            <div className={Style.content_discussions}>
              <table className={Style.list_discuss}>
                <tbody>
                  {discussion.map((item: any, index: number) => (
                    <tr key={index}>
                      <td className={Style.discuss__infor}>
                        <div className={Style.post__infor}>
                          <div className={Style.avatar}>
                            <Image
                              src={item.avatar}
                              alt={item.name}
                              height={35}
                              width={35}
                            />
                          </div>
                          <div className={Style.desc}>{item.description}</div>
                        </div>
                      </td>
                      <td>{item.status}</td>
                      <td>{item.vote}</td>
                      <td className={Style.discuss_date}>
                        {item.date}
                        <br />
                        by <b>{item.name}</b>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Social;
