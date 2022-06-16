import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../app/hooks";
import movieAPI from "../../../service/movieAPI";
import { getDetailMovieRequest } from "../../../store/movies/movieSlice";
import { getPeopleMovieRequest } from "../../../store/people/peopleSlice";
import Banner from "./components/Banner";
import Content from "./components/Content";
import MenuTop from "./components/MenuTop";

export interface Data {
  videosData: any;
  imageData: any;
  movieDetail: any;
}

const DetailMovie: NextPage<Data> = ({
  videosData,
  imageData,
  movieDetail,
}) => {
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={`test`} key="twhandle" />
        <meta
          property="og:url"
          content={`${process.env.DOMAIN + router.asPath}`}
          key="ogurl"
        />
        <meta
          property="og:image"
          content={`https://www.themoviedb.org/t/p//w300_and_h450_bestv2${movieDetail.poster_path}`}
          key="ogimage"
        />
        <meta property="og:site_name" content={"The movies"} key="ogsitename" />
        <meta property="og:title" content={movieDetail.title} key="ogtitle" />
        <meta
          property="og:description"
          content={movieDetail.overview}
          key="ogdesc"
        />
      </Head>
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
    const [videosData, imageData, movieDetail] = await Promise.all([
      movieAPI.getAllVideos(context.query.id),
      movieAPI.getAllImages(context.query.id),
      movieAPI.getDetailMovie(context.query.id),
    ]);

    return { props: { videosData, imageData, movieDetail } };
  } catch {
    context.res.statusCode = 404;
    return {
      props: {},
    };
  }
};

export default DetailMovie;
