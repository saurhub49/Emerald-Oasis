import { orderHistoryFormatDate } from "../../utils";

const styles = {
  orderTiles: {
    marginTop: "50px",
    position: "relative",
    marginRight: "60px",
    marginLeft: "30px",
    marginBottom: "50px",

    backgroundColor: "rgb(255 193 7 / 30%)", //Orange
    //backgroundColor: "rgba(155, 114, 245, 0.2)",//Purple
  },
  textInTiles: {
    textIndent: "15px",
    fontFamily: "sans-serif",
    fontSize: "1.1em",
    /* border-block: solid 1px black; */
    //    background-color: #9BD490;
  },
  textBold: {
    fontWeight: "bold",
    float: "right",
    marginRight: "10px",
    fontStyle: "italic",
    fontSize: "1.2em",
  },
};

const OrderTile = (props) => {
  const myOrder = props.order;
  return (
    <>
      <div
        className=" card-body border-green.bg-gradient text-indigo mb-5 bg-opacity-80"
        style={styles.orderTiles}
      >
        <div className="row" style={styles.textBold}>
          {myOrder.orderStatus}
        </div>
        <br />
        <br />
        <p className="row" style={styles.textInTiles}>
          Order Id : {myOrder.orderId}
        </p>
        <p className="row" style={styles.textInTiles}>
          Total Amount: Rs. {myOrder.totalAmount}
        </p>
        <p className="row" style={styles.textInTiles}>
          Ordered On : {orderHistoryFormatDate(myOrder.orderedTimeStamp)}
        </p>
        <p className="row" style={styles.textInTiles}>
          Delivered On: {orderHistoryFormatDate(myOrder.deliveredTimeStamp)}
        </p>
        <p className="row" style={styles.textInTiles}>
          Delievery Location: {myOrder.address}
        </p>
      </div>
    </>
  );
};

export default OrderTile;
