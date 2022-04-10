import { formatDate } from "../../utils";

const styles = {
  orderTiles: {
    marginTop: "50px",
    position: "relative",
    height: "200px",
    marginRight: "60px",
    marginLeft: "30px",
    marginBottom: "50px",
  },
  textInTiles: {
    textIndent: "10px",
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
        className=" card-body border-green.bg-gradient text-white mb-5 bg-primary bg-opacity-80"
        style={styles.orderTiles}
      >
        <div className="row" style={styles.textBold}>
          {myOrder.orderStatus}
        </div>
        <br />
        <br />
        <div className="row" style={styles.textInTiles}>
          Order Id : {myOrder.orderId}
        </div>
        <div className="row" style={styles.textInTiles}>
          Ordered On : {formatDate(myOrder.orderedTimeStamp)}
        </div>
        <div className="row" style={styles.textInTiles}>
          Delivered On : {formatDate(myOrder.deliveredTimeStamp)}
        </div>
        <div className="row" style={styles.textInTiles}>
          Total Amount : Rs. {myOrder.totalAmount}
        </div>
      </div>
    </>
  );
};

export default OrderTile;
