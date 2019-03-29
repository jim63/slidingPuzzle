import React from "react";
import { Link } from "react-router-dom";

const Pages = () => {
  return (
    <div className="pages">
      <Link to="/">
        <div className="classAll">Silding Puzzle</div>
      </Link>
      <Link to="/breaker">
        <div className="classActives">排行榜</div>
      </Link>
    </div>
  );
};

export default Pages;
