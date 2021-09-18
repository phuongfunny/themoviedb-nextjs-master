import React from "react";
import ModalVideo from "../../../../../../../../../custom-field/modal-movie/ModalVideo";
import Style from "./style.module.scss";
import Image from "next/image";

type ToDoProps = {
  video: any;
  poster_1: any;
  poster_2: any;
};

const Popular: React.FC<ToDoProps> = ({ video, poster_1, poster_2 }) => {
  return (
    <>
      <div className={Style.popular_detail}>
        <ul>
          <li>
            <div
              className={Style.video_detail}
              style={{
                background: `
                url('https://i.ytimg.com/vi/${video.key}/hqdefault.jpg')
                no-repeat
              `,
              }}
            >
              <ModalVideo key_id={video.key} />
            </div>
          </li>
          <li>
            <div className={Style.video_detail}>
              <Image
                src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${poster_1.file_path}`}
                alt="Backdrops"
                width={533}
                height={300}
              />
            </div>
          </li>
          <li>
            <div className={Style.video_detail}>
              <Image
                src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${poster_2.file_path}`}
                alt="Backdrops"
                width={533}
                height={300}
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Popular;
