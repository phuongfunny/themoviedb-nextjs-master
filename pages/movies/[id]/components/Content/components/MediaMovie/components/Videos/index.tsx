import React from "react";
import ModalVideo from "../../../../../../../../../custom-field/modal-movie/ModalVideo";
import Style from "./style.module.scss";

function Videos(props: any) {
  const data = props.data;
  return (
    <>
      <div
        className={Style.video_detail}
        style={{
          background: `
        url('https://i.ytimg.com/vi/${data.key}/hqdefault.jpg')
         no-repeat
      `,
        }}
      >
        <ModalVideo key_id={data.key} />
      </div>
    </>
  );
}

export default Videos;
