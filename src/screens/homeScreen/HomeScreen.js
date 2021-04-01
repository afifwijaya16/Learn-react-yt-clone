import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import Video from "../../components/video/Video";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/video.action";

import InfiniteScroll from "react-infinite-scroll-component";

import SkeletonVideo from "../../components/skeletons/SkeletonVideo";
const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  const fetchData = () => {
    if (activeCategory === "All") dispatch(getPopularVideos());
    else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };
  return (
    <Container>
      <CategoriesBar />
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
        className="row"
      >
        {!loading
          ? videos.map((video) => (
              <Col lg={3} md={4} key={video.id}>
                <Video video={video} />
              </Col>
            ))
          : [...Array(20)].map((index) => (
              <Col lg={3} md={4} key={index}>
                <SkeletonVideo />
              </Col>
            ))}
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
