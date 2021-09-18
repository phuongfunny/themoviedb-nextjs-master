import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { useAppSelector } from "../../app/hooks";
import { getListMoviesRequest } from "../../store/movies/movieSlice";
import Filter from "./components/Filter";
import Movie from "./components/Movie";

function Movies() {
  const [list] = useAppSelector(({ movies: { list, loading } }) => [
    list,
    loading,
  ]);
  const dispatch = useDispatch();
  let numPage = 2;

  useEffect(() => {
    dispatch(getListMoviesRequest({ page: 1 }));
  }, [dispatch]);

  useEffect(() => {
    const listItem = document.querySelector("#list-movie") as HTMLElement;
    const footer = document.querySelector("footer") as HTMLElement;
    // list has auto height
    window.addEventListener("scroll", () => {
      if (
        window.scrollY + window.innerHeight ===
        listItem.clientHeight + listItem.offsetTop + footer.clientHeight
      ) {
        dispatch(
          getListMoviesRequest({
            page: numPage++,
          })
        );
      }
    });
  }, [dispatch, numPage]);
  return (
    <>
      <section id="list-movie">
        <Container className="themed-container container" fluid={true}>
          <Row>
            <Col className="title">
              <h2> Popular Movies</h2>
            </Col>
          </Row>
          <Row className="content">
            <Col xs="3" className="filter">
              <Filter />
            </Col>
            <Col xs="9" className="list-movies">
              {list &&
                list.map((listItem, index) => (
                  <Movie key={index} listItem={listItem} index={index} />
                ))}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Movies;
