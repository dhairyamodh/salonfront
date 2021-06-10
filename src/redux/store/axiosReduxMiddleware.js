import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import { RootUrl } from "../../constants";
const options = {
  returnRejectedPromiseOnError: true,
  interceptors: {
    request: [
      ({ getState, dispatch }, request) => {
        dispatch({ type: "SPINNER_START" });
        // // Request interception
        // console.log("AXIOS Request URL:", request.url);
        // console.log("AXIOS Request TIME:", new Date());

        return request;
      },
    ],
    response: [
      {
        success: ({ getState, dispatch, getSourceAction }, response) => {
          // console.log("AXIOS Response Origin :", response.request.responseURL); //contains information about request object
          // console.log("AXIOS Response TIME :", new Date());
          dispatch({ type: "SPINNER_STOP" });

          return response;
        },
        error: ({ getState, dispatch, getSourceAction }, error) => {
          console.log(
            "AXIOS Redux ERR :",
            error?.error?.response?.data?.message
          ); //contains information about request object
          // alert(error?.error?.response?.data?.message); //contains information about request object

          //...
          dispatch({ type: "SPINNER_STOP" });
          return Promise.reject(error);
        },
      },
    ],
  },
};
// https://github.com/svrcekmichal/redux-axios-middleware
// https://github.com/axios/axios
const client = axios.create({
  baseURL: RootUrl,

  responseType: "json",

  // transformResponse: [
  //   (data) => {
  //     // Do whatever you want to transform the data
  //     console.log("AXIOS CLIENT RESPONSE :", data);
  //     return data;
  //   },
  // ],
});
export default axiosMiddleware(client, options);
