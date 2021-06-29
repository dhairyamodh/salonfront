import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSalonData } from '../redux/actions/salonActions'
import { salonId } from '../redux/types'
import getToken from "./getToken";
import { getUserDetails } from "../redux/actions/authActions";
import { getLocalStorageCart } from '../helpers/cartHelpers'
import { getItemCart, updateCartLocally } from '../redux/actions/cartActions'


function useGetAllData() {
  const dispatch = useDispatch();
  const [ready, setReady] = useState(false);
  const delayReady = () => {
    setReady(true);
  };

  const updateCart = () => {
    const localItems = getLocalStorageCart()
    if (localItems) {
      dispatch(updateCartLocally(localItems))
    }
  }

  function handleCheckToken() {
    const tkn = getToken();
    if (tkn) {
      dispatch(getUserDetails(salonId))
        .then((res) => {
          if (res.payload.status == 200) {
            dispatch(getItemCart(salonId))
          }
        })
        .catch((err) => {
          updateCart()
        });
    } else {
      updateCart()
    }
  }

  const checkIfSalonData = () => {
    dispatch(getSalonData(salonId)).then((res) => {
      delayReady(true)
    }).catch((err) => {
      delayReady(true)

    })
  }
  useEffect(() => {
    handleCheckToken()
    checkIfSalonData()

  }, []);

  return ready;
}
export default useGetAllData;