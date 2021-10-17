
import config from "./../Config/config.json"



export const fetchMovieData = (movieName) => {
  let completeUrl=  config.tmdbApi.url +movieName+  config.tmdbApi.key
    return window.fetch(completeUrl).then((res) => res.json()).then((response) => {
        return response;
    });
}
