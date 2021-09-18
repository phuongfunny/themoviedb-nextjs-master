import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCommentDots,
  faKeyboard,
  faLink,
  faLock,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ErrorPage from "next/error";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import useSWR from "swr";
import { useAppSelector } from "../../../../../../../app/hooks";
import movieAPI from "../../../../../../../service/movieAPI";
import Style from "./style.module.scss";

const fetcher = (url: any) => movieAPI.getKeyWordMovie(url);
function GreyRight() {
  const [detail, loading] = useAppSelector(
    ({ movies: { detail, loading } }) => [detail, loading]
  );
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR<any>(`/${id}/keywords`, fetcher);
  const keywords: any = data?.keywords;
  if (error) {
    return <ErrorPage statusCode={404} />;
  }

  if (loading === true) {
    return <div>Loading...</div>;
  }
  return (
    <section className={Style.grey_right}>
      <div className={Style.social_network}>
        <div>
          <Link href="/">
            <a>
              <FontAwesomeIcon
                color="#000"
                icon={faFacebookSquare}
                size="lg"
                fixedWidth
              />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>
              <FontAwesomeIcon
                color="#000"
                icon={faTwitter}
                size="lg"
                fixedWidth
              />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>
              <FontAwesomeIcon
                color="#000"
                icon={faInstagram}
                size="lg"
                fixedWidth
              />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>
              <FontAwesomeIcon
                color="#000"
                icon={faPaperPlane}
                size="lg"
                fixedWidth
              />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>
              <FontAwesomeIcon
                color="#000"
                icon={faLink}
                size="lg"
                fixedWidth
              />
            </a>
          </Link>
        </div>
      </div>
      <div className={Style.infor_movie}>
        <p>
          <strong>Status</strong>
          <br />
          {detail.status}
        </p>
        <p>
          <strong>Original Language</strong>
          <br />
          {detail.original_language === "en" && "English"}
        </p>
        <p>
          <strong>Budget</strong>
          <br />${detail.budget}
        </p>
        <p>
          <strong>Revenue</strong>
          <br />${detail.revenue}
        </p>
      </div>
      <div className={Style.keywords_movie}>
        <h4>Keywords</h4>
        <ul className={Style.list_keywords}>
          {keywords?.length > 0 &&
            keywords?.map((word: any, index: number) => (
              <li key={index}>
                <a href="/">{word.name}</a>
              </li>
            ))}
        </ul>
      </div>
      <div className={Style.content_score}>
        <h4>Content Score</h4>
        <div className={Style.content}>
          <div className={Style.score}>100</div>
          <p>Yes! Looking good!</p>
        </div>
      </div>
      <div className={Style.top_contributor}>
        <h4>Top Contributors</h4>
        <div className={Style.leader}>
          <div className={Style.avatar}>
            <Image
              src="https://www.themoviedb.org/t/p/w45_and_h45_face/lWHpCKSQR8W2ZDf9tRrjibEboxf.jpg"
              alt="avatar"
              width={40}
              height={40}
            />
          </div>
          <div className={Style.info}>
            <p>
              144 <br />
              <a href="/">Name</a>
            </p>
          </div>
        </div>
        <p style={{ marginTop: "20px" }}>
          <a href="/">View Edit History</a>
        </p>
      </div>
      <div>
        <h4>Popularity Trend</h4>
      </div>
      <div className={Style.button_login}>
        <Button className={Style.btn_login}>
          <FontAwesomeIcon icon={faLock} size="sm" fixedWidth />
          <span style={{ marginLeft: "5px" }}>LOGIN TO EDIT</span>
        </Button>
      </div>
      <div className={Style.popup_keybord}>
        <FontAwesomeIcon icon={faKeyboard} size="sm" fixedWidth />
        <span style={{ marginLeft: "5px" }}>Keyboard Shortcuts</span>
      </div>
      <p style={{ marginTop: "30px" }}>
        <FontAwesomeIcon icon={faCommentDots} size="sm" fixedWidth />
        <span style={{ marginLeft: "5px" }}>Login to report an issue</span>
      </p>
    </section>
  );
}

export default GreyRight;
