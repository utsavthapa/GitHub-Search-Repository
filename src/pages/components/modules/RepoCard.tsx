import React from "react";

import { Col } from "react-bootstrap";
import { item } from "../../types";
import { faStar, faEye, faCodeFork } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const RepoCard = (props: item) => {
  const {
    idx,
    id,
    name,
    full_name,
    owner,
    description,
    stargazers_count,
    watchers,
    forks_count,
  } = props;
  return (
    <Col sm={4} className="repo-card" key={`${id} + ${idx}`}>
      <div className="card-header">
        <div className="user">
          <img src={owner.avatar_url} alt="" />
          <div>{owner.login}</div>
        </div>
        <div className="attributes">
          <div className="attribute">
            {" "}
            <FontAwesomeIcon icon={faEye} fontSize="15" /> {watchers}
          </div>
          <div className="attribute">
            <FontAwesomeIcon icon={faCodeFork} fontSize="15" /> {forks_count}
          </div>
          <div className="attribute">
            <FontAwesomeIcon icon={faStar} fontSize="15" /> {stargazers_count}
          </div>
        </div>
      </div>
      <Link to={`/detail/${owner.login}/${name}`}>
        <div className="title">{full_name}</div>
      </Link>
      <div className="short-description">{description?.slice(0, 150)}</div>
    </Col>
  );
};

export default RepoCard;
