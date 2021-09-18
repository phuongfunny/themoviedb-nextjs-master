import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import movieAPI from "../../../service/movieAPI";
import { getDetailMovieRequest } from "../../../store/movies/movieSlice";
import { getPeopleMovieRequest } from "../../../store/people/peopleSlice";
import Banner from "./components/Banner";
import Content from "./components/Content";
import MenuTop from "./components/MenuTop";

export interface Data {
  videosData: any;
  imageData: any;
}

const DetailMovie: NextPage<Data> = ({ videosData, imageData }) => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailMovieRequest({ id: id }));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getPeopleMovieRequest({ id: id }));
  }, [dispatch, id]);
  return (
    <>
      <section className="movie_detail">
        <MenuTop />
        <Banner />
        <Content videos={videosData} images={imageData} />
      </section>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const [videosData, imageData] = await Promise.all([
      movieAPI.getAllVideos(context.query.id),
      movieAPI.getAllImages(context.query.id),
    ]);

    return { props: { videosData, imageData } };
  } catch {
    context.res.statusCode = 404;
    return {
      props: {},
    };
  }
};

export default DetailMovie;
