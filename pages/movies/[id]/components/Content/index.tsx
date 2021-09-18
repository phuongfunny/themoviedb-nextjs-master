import React from "react";
import { Col, Row } from "reactstrap";
import GreyRight from "./components/GreyRight";
import MediaMovie from "./components/MediaMovie";
import Recommendations from "./components/Recommendations";
import Social from "./components/Social";
import TopCast from "./components/TopCast";
import ViewCollection from "./components/ViewCollection";
import Style from "./style.module.scss";

type ToDoProps = {
  videos: any;
  images: any;
};
const Content: React.FC<ToDoProps> = ({ videos, images }) => {
  return (
    <>
      <div className={Style.content}>
        <div className={Style.content_wrapper}>
          <Row style={{ margin: "0" }}>
            <Col xs="10" className={Style.col_content}>
              <TopCast />
              <Social />
              <MediaMovie videos={videos} images={images} />
              <ViewCollection />
              <Recommendations />
            </Col>
            <Col xs="2" className={Style.col_content}>
              <GreyRight />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Content;
