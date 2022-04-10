import { toast } from "react-toastify";
import { useState } from "react/cjs/react.development";
import axios from "axios";
import { useEffect } from "react";
import "./orderTable.css";
import OrderTile from "../OrderTile/orderTile";
import UserHeader from "../UserHeader/userHeader";
import { URL } from "../../config";
import Sidebar from "../Sidebar/sidebar";

const styles = {
  conteinar: {
    marginLeft: "250px",
    marginTop: "75px",
    backgroundColor: "rgba(117, 190, 218, 0.5)",
  },
  orderTiles: {
    marginTop: "30px",
  },
  testorderTiles: {
    marginLeft: "95px",
    marginTop: "30px",
  },
  table: {
    border: "4px solid black",
  },
  th: {
    border: "4px solid black",
  },
  td: {
    border: "4px solid black",
  },
};

const OrderTable = (props) => {
  //  const { userId } = sessionStorage;
  const userId = 5;
  //  const [requiredPgNum, setRequiredPgNum] = useState(1);
  const [myOrders, setMyOrders] = useState([]);

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

  var inRange = true;
  var requiredPgNum = props.pgNum;
  console.log("inRAnge : " + inRange + "    props.pgNum : " + props.pgNum);
  //var requiredPgNum = 1;

  const displayLastTileOfCurrPg = (myOrder) => {
    // console.log("Called to display current page tiles");
    pageCounter++;
  };

  var pageCounter = 1;
  var lowerLimit = 0;
  var higherLimit = 1;

  const numOfTilesRequired = 6; //change this in order to get different number of tiles
  let lastPage = 0;

  return (
    //Make the tiles transparent, insert hovering features on card and text, use margin left in css instead of div, Add back like next link as well, if reached last page goTofirst page link
    <>
      <div className="container" style={styles.conteinar}>
        <UserHeader></UserHeader>
        <Sidebar></Sidebar>
        <div className="row">
          {myOrders.map((myOrder) => {
            lowerLimit = numOfTilesRequired * (pageCounter - 1);
            higherLimit = numOfTilesRequired * pageCounter;
            var inRange =
              myOrder.orderId <= higherLimit
                ? lowerLimit <= myOrder.orderId
                : false;
            var result = !inRange
              ? pageCounter++ && (lastPage = pageCounter)
              : pageCounter;

            console.log(
              "Order Id : " +
                myOrder.orderId +
                "     Assigned Pg Num is  : " +
                pageCounter +
                "     ordersRwqdFromPgNum = " +
                requiredPgNum +
                "     lastPage  : " +
                lastPage
            );

            // console.log("NextPage : " + !inRange + "      Result : " + result);
            // console.log(
            //   "Equality Condition : " + (requiredPgNum === pageCounter)
            // );
            console.log(
              "--------------------------------------------------------------"
            );

            if (requiredPgNum === pageCounter) {
              return (
                <>
                  <div className="col-4">
                    <OrderTile order={myOrder} />
                  </div>
                </>
              );
            }
            // else if (requiredPgNum === pageCounter - 1) {
            //   return null;
            // } else {
            //   return;
            // }
          })}
        </div>
      </div>
    </>
  );
};
export default OrderTable;
