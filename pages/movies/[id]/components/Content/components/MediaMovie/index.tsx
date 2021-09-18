import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React, { useState } from "react";
import Backdrops from "./components/Backdrops";
import Popular from "./components/Popular";
import PosterList from "./components/Posters";
import Videos from "./components/Videos";
import Style from "./style.module.scss";
import Link from "next/link";

interface TodoProps {
  videos: any;
  images: {
    backdrops: object;
    posters: object;
  };
}
const MediaMovie: React.FC<TodoProps> = ({ videos, images }) => {
  const [value, setValue] = useState(0);
  const [openPopular, setOpenPopular] = useState(true);
  const [openVideo, setOpenVideo] = useState(false);
  const [openBackdrops, setOpenBackdrops] = useState(false);
  const [openPoster, setOpenPoster] = useState(false);

  const videoList = videos?.results;
  const backdrops: any = images?.backdrops;
  const posters: any = images?.posters;

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };
  const handleOpenPopular = () => {
    setOpenPopular(true);
    setOpenBackdrops(false);
    setOpenVideo(false);
    setOpenPoster(false);
  };
  const handleOpenVideo = () => {
    setOpenPopular(false);
    setOpenVideo(true);
    setOpenBackdrops(false);
    setOpenPoster(false);
  };
  const handleOpenBackdrops = () => {
    setOpenPopular(false);
    setOpenVideo(false);
    setOpenBackdrops(true);
    setOpenPoster(false);
  };
  const handleOpenPoster = () => {
    setOpenPopular(false);
    setOpenVideo(false);
    setOpenBackdrops(false);
    setOpenPoster(true);
  };

  if (videoList?.length === 0 || posters.length === 0)
    return <div>Loading...</div>;

  return (
    <>
      <section className={Style.panel_media}>
        <div className={Style.menu}>
          <h3>Media</h3>
          <Paper square className={Style.tab_option__media}>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab label="Post Popular" onClick={handleOpenPopular} />
              <Tab
                label={`Videos ${videoList.length} `}
                onClick={handleOpenVideo}
              />
              <Tab
                label={`Backdrops ${backdrops.length}`}
                onClick={handleOpenBackdrops}
              />
              <Tab
                label={`Poster ${posters.length}`}
                onClick={handleOpenPoster}
              />
            </Tabs>
          </Paper>
        </div>
        <div className={Style.content_media}>
          {openPopular && (
            <Popular
              video={videoList[0]}
              poster_1={posters[0]}
              poster_2={posters[1]}
            />
          )}
          {openVideo && (
            <ul
              className={`${Style.media_videos} ${Style.content_media__list}`}
            >
              {videoList.map(
                (data: any, index: number) =>
                  index < 6 && (
                    <li key={index}>
                      <Videos data={data} />
                    </li>
                  )
              )}
              <li className={Style.view_more}>
                <div className={Style.view_more__link}>
                  <Link href="/">
                    <a>
                      View More{" "}
                      <span>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          size="sm"
                          fixedWidth
                        />
                      </span>
                    </a>
                  </Link>
                </div>
              </li>
            </ul>
          )}

          {openBackdrops && (
            <ul
              className={`${Style.media_videos} ${Style.content_media__list}`}
            >
              {backdrops.map(
                (data: any, index: number) =>
                  index < 10 && (
                    <li key={index}>
                      <Backdrops data={data} />
                    </li>
                  )
              )}
              <li className={Style.view_more}>
                <div className={Style.view_more__link}>
                  <Link href="/">
                    <a>
                      View More{" "}
                      <span>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          size="sm"
                          fixedWidth
                        />
                      </span>
                    </a>
                  </Link>
                </div>
              </li>
            </ul>
          )}
          {openPoster && (
            <ul
              className={`${Style.media_videos} ${Style.content_media__list}`}
            >
              {posters.map(
                (data: any, index: number) =>
                  index < 10 && (
                    <li key={index}>
                      <PosterList data={data} />
                    </li>
                  )
              )}
              <li className={Style.view_more}>
                <div className={Style.view_more__link}>
                  <Link href="/">
                    <a>
                      View More{" "}
                      <span>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          size="sm"
                          fixedWidth
                        />
                      </span>
                    </a>
                  </Link>
                </div>
              </li>
            </ul>
          )}
        </div>
      </section>
    </>
  );
};
export default MediaMovie;
