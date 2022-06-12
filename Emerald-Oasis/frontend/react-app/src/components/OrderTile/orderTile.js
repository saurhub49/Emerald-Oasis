import { formatDate } from "../../utils";

const styles = {
  orderTiles: {
    marginTop: "10px",
    position: "relative",
    width: "370px",

    backgroundColor: "#9bd490", //Orange
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
        <div className="row" style={styles.textInTiles}>
          <p><strong>Order Id:</strong> {myOrder.orderId}</p>
        </div>
        <div className="row" style={styles.textInTiles}>
        <p><strong>Total Amount:</strong> Rs. {myOrder.totalAmount}</p>
        </div>
        <div className="row" style={styles.textInTiles}>
        <p><strong>Ordered On:</strong> {formatDate(myOrder.orderedTimeStamp)}</p>
        </div>
        <div className="row" style={styles.textInTiles}>
        <p><strong>Delivered On:</strong>{formatDate(myOrder.deliveredTimeStamp)}</p>
        </div>
        <div className="row" style={styles.textInTiles}>
        <p><strong>Delivery Location:</strong>{myOrder.address}</p>
        </div>
      </div>
    </>
  );
};

export default OrderTile;
