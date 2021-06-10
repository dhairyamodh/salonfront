import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { getAllFrondData } from "../actions/frontdata";

function useGetAllData() {
  const dispatch = useDispatch();
  const [ready, setReady] = useState(false);
  const delayReady = () => {
    setReady(true);
  };
  useEffect(() => {
    // dispatch(getAllFrondData()).then((res) => {
    //   delayReady(true);
    // }).catch((err) => {
    //   delayReady(true);
    // });
    delayReady(true);

  }, []);

  return ready;
}
export default useGetAllData;