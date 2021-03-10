import React from "react";
import "./_videoHorizontal.scss";

import { AiFillEye } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import request from "../../api";

import moment from "moment";
import numeral from "numeral";
import { Col, Row } from "react-bootstrap";

const VideoHorizontal = () => {
  const seconds = moment.duration("10000").asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  return (
    <Row className="videoHorizontal m-1 py-2 align-items-center">
      <Col xs={6} md={4} className="videoHorizontal__left">
        <LazyLoadImage
          alt="video thumb"
          effect="blur"
          className="videoHorizontal__thumbnail"
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
          src="https://i.ytimg.com/an_webp/VFhlpNgbEkQ/mqdefault_6s.webp?du=3000&sqp=CPTJoYIG&rs=AOn4CLCYkZxoIIeTPSpXJh5fQf8lqcpwlQ"
        />
        <span className="videoHorizontal__duration">{_duration}</span>
      </Col>
      <Col xs={6} md={8} className="videoHorizontal__right">
        <p className="videoHorizontal__title mb-1">Be a full stack developer</p>
        <div className="videoHorizontal__details">
          <AiFillEye /> {numeral("1352").format("0.a")} views •{" "}
          {moment("2020-10-10").fromNow()}
        </div>
        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          {/* <img
            src="https://www.shareicon.net/data/256x256/2016/09/15/829459_man_512x512.png"
            alt="avatar"
            className="rounded-circle mr-3"
          /> */}
          <p>Afif Wijaya</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
