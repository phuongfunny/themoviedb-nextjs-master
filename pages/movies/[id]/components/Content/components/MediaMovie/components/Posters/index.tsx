import React from "react";
import Style from "./style.module.scss";
import Image from "next/dist/client/image";

function PosterList(props: any) {
  const data = props.data;
  return (
    <>
      {data && (
        <div className={Style.video_detail}>
          <Image
            src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${data.file_path}`}
            alt="Backdrops"
            width={533}
            height={300}
          />
        </div>
      )}
    </>
  );
}

export default PosterList;
