import axiosClient from "../api/axiosClient";

const movieAPI = {
  getAllMovies: (data: any) =>{
    const url: string = "/popular";
    const params = {
      api_key: "80654656c6586a0c705642639595a994",
      page: data.page,
    };
    return axiosClient.get(url, {params})
  },
  getPeople: (data: any) => {
    const url = `/${data}/credits`;
    const params = {
      api_key: "80654656c6586a0c705642639595a994",
      language: "en-US",
    };
    return axiosClient.get(url, { params });
  },
  getProvider: (data: any) => {
    const url = `/${data}/watch/providers`;
    const params = {
      api_key: "80654656c6586a0c705642639595a994",
    };
    return axiosClient.get(url, { params });
  },
  getDetailMovie: (data: any) => {
    const url = `/${data}`;
    const params = {
      api_key: "80654656c6586a0c705642639595a994",
    };
    return axiosClient.get(url, { params });
  },
  getKeyWordMovie: (data: string) => {
    const url =data;
    const params = {
      api_key: "80654656c6586a0c705642639595a994",
    };
    return axiosClient.get(url, { params });
  },
  getReviewMovie: (data: string) => {
    const url = data;
    const params = {
      api_key: "80654656c6586a0c705642639595a994",
      language: "en-US",
      page: 1,
    };
    return axiosClient.get(url, { params });
  },
  getAllVideos: (data: any) => {
    const url = `/${data}/videos`;
    const params = {
      api_key: "80654656c6586a0c705642639595a994",
      language: "en-US",
    };
    return axiosClient.get(url, { params });
  },
  getAllImages: (data: any) => {
    const url = `/${data}/images`;
    const params = {
      api_key: "80654656c6586a0c705642639595a994",
    };
    return axiosClient.get(url, { params });
  },
  getRecommendations: (data: string ) => {
    const url = data;
    const params = {
      api_key: "80654656c6586a0c705642639595a994",
      language: "en-US",
      page: 1,
    };
    return axiosClient.get(url, { params });
  },
}
export default movieAPI;