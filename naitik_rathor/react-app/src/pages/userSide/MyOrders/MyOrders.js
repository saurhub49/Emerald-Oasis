import { useEffect, useState } from "react";
import OrderTable from "../../../components/OrderTable/orderTable";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const [pgNum, setPgNum] = useState(1);

  const lastPage = 3; //determine the value of last page and set the variable
  const displayNextPgTiles = (e) => {
    console.log("Before pgNum :   " + pgNum);

    pgNum + 1 > lastPage ? setPgNum(1) : setPgNum(pgNum + 1);
    console.log("After pgNum : " + pgNum);
    e.preventDefault();
  };

  const displayPrevPgTiles = () => {
    console.log("Before pgNum :   " + pgNum);
    pgNum - 1 > 0 ? setPgNum(pgNum - 1) : setPgNum(lastPage);
    console.log("After pgNum : " + pgNum);
  };

  console.log("Page-Counter is set to :   " + pgNum);

  return (
    <>
      <OrderTable pgNum={pgNum} />
      <div className="row">
        <div className="col-3">
          <Link
            onClick={displayPrevPgTiles}
            to=""
            className="col-3"
            style={{ fontWeight: "bolder", fontSize: "1.05em", float: "right" }}
          >
            Prev Page
          </Link>
        </div>
        <div className="col-4">
          <div
            style={{ fontWeight: "bolder", fontSize: "1.05em", float: "right" }}
          >
            {pgNum}
          </div>
        </div>
        <div className="col-5">
          <Link
            onClick={displayNextPgTiles}
            to=""
            className="col-3"
            style={{ fontWeight: "bolder", fontSize: "1.05em", float: "right" }}
          >
            Next Page
          </Link>
        </div>
      </div>
    </>
  );
};
export default MyOrders;
