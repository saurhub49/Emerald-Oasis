import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Header1 from "../../../components/UserHeader/userHeader";
import axios from "axios";
import { URL } from "../../../config";

import Sidebar from "../../../components/Sidebar/sidebar";
import OrderTile from "../../../components/OrderTile/orderTile";

const styles = {
  conteinar: {
    marginLeft: "250px",
    marginTop: "75px",
  },
};

const MyOrders = () => {
  const { userId } = sessionStorage;

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



  return (
    <>
      <div className="container" style={styles.conteinar}>
        <Header1 />
        <Sidebar />
        <div className="row">
          {myOrders.map((myOrder) => {
              return (
                <>
                  <div className="col-4">
                    <OrderTile order={myOrder} />
                  </div>
                </>
              );
            
          })}
        </div>
        
      </div>
    </>
  );
};
export default MyOrders;