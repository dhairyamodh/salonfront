import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSalonData } from '../redux/actions/salonActions'
import getToken from "./getToken";
import { getUserDetails } from "../redux/actions/authActions";
import { getLocalStorageCart } from '../helpers/cartHelpers'
import { getItemCart, updateCartLocally } from '../redux/actions/cartActions'
import { useHistory } from "react-router-dom";


function useGetAllData() {
  const history = useHistory()
  const dispatch = useDispatch();
  const domainName = window.location.host;

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

  const handleCheckToken = () => {
    const tkn = getToken();
    if (tkn) {
      dispatch(getUserDetails())
        .then((res) => {
          if (res.payload.status == 200) {
            dispatch(getItemCart())
          }
        })
        .catch((err) => {
          updateCart()
        });
    } else {
      updateCart()
      history.push('/')
    }
  }

  const checkIfSalonData = () => {
    dispatch(getSalonData(domainName)).then((res) => {
      handleCheckToken()
      delayReady(true)
    }).catch((err) => {
      delayReady(true)

    })
  }

  useEffect(() => {
    checkIfSalonData()

  }, [domainName]);

  return ready;
}
export default useGetAllData;