import React from "react";
import { useAppSelector } from "../../../../../app/hooks";
import Poster from "./components/Poster";
import ProfileMovie from "./components/ProfileMovie";
import Style from "./style.module.scss";

function Banner() {
  const [detail, loading] = useAppSelector(
    ({ movies: { detail, loading } }) => [detail, loading]
  );
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className={Style.banner_poster}>
        {detail.backdrop_path && (
          <div
            className={Style.banner}
            style={{
              background: `
              linear-gradient(
                to right,
                rgba(17.25%, 12.16%, 16.86%, 1) 150px,
                rgba(17.25%, 12.16%, 16.86%, 0.84) 100%
              ),
              url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${detail.backdrop_path}')
            `,
            }}
          >
            <div className={Style.custom_bg}>
              <div className={Style.banner_content}>
                <Poster />
                <ProfileMovie />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Banner;
