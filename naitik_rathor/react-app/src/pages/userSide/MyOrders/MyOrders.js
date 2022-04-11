import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "../../../config";
import Sidebar from "../../../components/Sidebar/sidebar";
import UserHeader from "../../../components/UserHeader/userHeader";
import OrderTile from "../../../components/OrderTile/orderTile";

const styles = {
  conteinar: {
    marginLeft: "250px",
    marginTop: "75px",
    backgroundColoer: "#DCE9FF",
    // backgroundColor: "rgba(117, 190, 218, 0.5)", //Light Blue Preferable
  },
};

const MyOrders = () => {
  const { userId } = sessionStorage;
  // const userId = 5;

  const [myOrders, setMyOrders] = useState([]);
  const [requiredPgNum, setRequiredPgNum] = useState(1);

  const getAllOrders = () => {
    const url = `${URL}/user/order/history/${userId}`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        setMyOrders(result["data"]);
      } else {
        toast.error(result["error"]);
      }
    });
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  const displayNextPgTiles = (e) => {
    requiredPgNum + 1 > lastPage
      ? setRequiredPgNum(1)
      : setRequiredPgNum(requiredPgNum + 1);
  };

  const displayPrevPgTiles = () => {
    requiredPgNum - 1 > 0
      ? setRequiredPgNum(requiredPgNum - 1)
      : setRequiredPgNum(lastPage);
  };

  var pageCounter = 1;
  var lowerLimit;
  var higherLimit;
  let lastPage;
  const ordersPerPage = 2; //change this in order to get different number of orders per page
  var gotToNextPage = true;

  console.log(
    "gotToNextPage : " + gotToNextPage + "    requiredPgNum : " + requiredPgNum
  );

  return (
    //Make the tiles transparent, insert hovering features on card and text, use margin left in css instead of div, Add back like next link as well, if reached last page goTofirst page link
    <>
      <div className="container" style={styles.conteinar}>
        <UserHeader></UserHeader>
        <Sidebar></Sidebar>
        <div className="row">
          {myOrders.map((myOrder) => {
            lowerLimit = ordersPerPage * (pageCounter - 1);
            higherLimit = ordersPerPage * pageCounter;
            var gotToNextPage =
              myOrder.orderId <= higherLimit
                ? lowerLimit <= myOrder.orderId
                : false;
            var result = !gotToNextPage
              ? pageCounter++ && (lastPage = pageCounter)
              : pageCounter;

            if (requiredPgNum === pageCounter) {
              return (
                <>
                  <div className="col-4">
                    <OrderTile order={myOrder}></OrderTile>
                  </div>
                </>
              );
            }
          })}
        </div>
        <div className="row">
          <div className="col-2">
            <Link
              onClick={displayPrevPgTiles}
              to=""
              style={{
                fontWeight: "bolder",
                fontSize: "1.05em",
                float: "right",
              }}
            >
              Prev Page
            </Link>
          </div>
          <div className="col-4">
            <div
              style={{
                fontWeight: "bolder",
                fontSize: "1.05em",
                float: "right",
              }}
            >
              {requiredPgNum}
            </div>
          </div>
          <div className="col-5">
            <Link
              onClick={displayNextPgTiles}
              to=""
              className="col-3"
              style={{
                fontWeight: "bolder",
                fontSize: "1.05em",
                float: "right",
              }}
            >
              Next Page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyOrders;
