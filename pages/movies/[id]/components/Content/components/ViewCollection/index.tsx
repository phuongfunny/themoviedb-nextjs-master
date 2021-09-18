import React from "react";
import { useAppSelector } from "../../../../../../../app/hooks";
import Style from "./style.module.scss";

function ViewCollection() {
  const [detail] = useAppSelector(({ movies: { detail, loading } }) => [
    detail,
    loading,
  ]);
  return (
    <section className={Style.panel_collection}>
      {detail.belongs_to_collection && (
        <div
          className={Style.background}
          style={{
            background: `
              linear-gradient(
                to right,
                rgb(11 36 40 / 78%) 0%, rgb(25 79 81 / 69%)
              ),
              url('https://www.themoviedb.org/t/p/w1440_and_h320_multi_faces${detail.belongs_to_collection.backdrop_path}')
            `,
          }}
        >
          <div className={Style.title}>
            <h3>Part of the {detail.belongs_to_collection.name}</h3>
            <h5>Includes {detail.title}</h5>
          </div>
          <button>VIEW THE COLLECTION</button>
        </div>
      )}
    </section>
  );
}

export default ViewCollection;
