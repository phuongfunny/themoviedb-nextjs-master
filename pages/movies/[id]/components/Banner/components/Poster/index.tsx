import { faArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../../../../../app/hooks";
import movieAPI from "../../../../../../../service/movieAPI";
import Style from "./style.module.scss";

interface Provider {
  provider_name: string;
  logo_path: string;
}
export const initProvider: Provider = {
  provider_name: "",
  logo_path: "",
};

function Poster() {
  const [detail] = useAppSelector(({ movies: { detail, loading } }) => [
    detail,
    loading,
  ]);
  const [provider, setProvider] = useState(initProvider);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchProvider = async () => {
      try {
        const data: any = await movieAPI.getProvider(id);
        if (Object.keys(data.results).length !== 0) {
          if (data.results.US) {
            if (data.results.US.rent) setProvider(data.results.US.rent[0]);
            else setProvider(data.results.US.flatrate[0]);
          } else if (data.results.AU) {
            if (data.results.AU.rent) setProvider(data.results.AU.rent[0]);
            else setProvider(data.results.AU.flatrate[0]);
          } else {
            setProvider(initProvider);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProvider();
    return () => {
      setProvider(initProvider); // set default state unmount when Can't perform a React state update on an unmounted component.
    };
  }, [id]);
  return (
    <div className={Style.poster}>
      <div
        className={Style.poster_image}
        style={provider.logo_path === "" ? { height: "100%" } : {}}
      >
        <div
          className={Style.image}
          style={provider.logo_path === "" ? { height: "100%" } : {}}
        >
          {detail.poster_path !== "" && (
            <Image
              src={`https://www.themoviedb.org/t/p//w300_and_h450_bestv2${detail.poster_path}`}
              alt={`banner-movie_${detail.id}`}
              width={300}
              height={450}
            />
          )}
        </div>
        <div className={Style.expand}>
          <span style={{ marginRight: "8px" }}>
            <FontAwesomeIcon
              icon={faArrowsAlt}
              size="sm"
              fixedWidth
              id={`popover-${detail.id}`}
            />
          </span>
          Expand
        </div>
      </div>
      {provider.logo_path !== "" && (
        <div className={Style.poster_offer}>
          <div className={Style.provider}>
            <Image
              src={`https://www.themoviedb.org/t/p//original${provider.logo_path}`}
              alt={`banner-movie_${provider.provider_name}`}
              width={38}
              height={38}
            />
          </div>
          <div className={Style.text}>
            <h4 style={{ margin: "0" }}>Now Streaming</h4>
            <h3 style={{ margin: "0" }}>
              <a href="/">Watch Now</a>
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Poster;
