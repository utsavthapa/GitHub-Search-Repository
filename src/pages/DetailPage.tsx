import { faStar, faEye, faCodeFork } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useParams } from "react-router-dom";
import { GetRepositoryDetail } from "../react-query-services";

const DetailPage = () => {
  const { user, id } = useParams();
  console.log("id ===>", id, user);
  const { data: repositoryDetail, isLoading: isLoadingRepositoryDetail } =
    GetRepositoryDetail(`/${user}/${id}`);

  console.log(
    "./repositoryDetail",
    repositoryDetail,
    isLoadingRepositoryDetail
  );

  return (
    <div className="detail-page">
      {repositoryDetail?.data !== undefined ? (
        <>
          <div className="detail-header">
            <div className="user">
              <img src={repositoryDetail?.data.owner.avatar_url} alt="" />
              <div>{repositoryDetail.data.owner.login}</div>
            </div>
          </div>
          <div className="detail-body">
            <div className="attributes">
              <div className="attribute">
                {" "}
                <FontAwesomeIcon icon={faEye} fontSize="15" /> watch{" "}
                {repositoryDetail.data.watchers}
              </div>
              <div className="attribute">
                <FontAwesomeIcon icon={faCodeFork} fontSize="15" /> Fork{" "}
                {repositoryDetail.data.forks_count}
              </div>
              <div className="attribute">
                <FontAwesomeIcon icon={faStar} fontSize="15" /> Star{" "}
                {repositoryDetail.data.stargazers_count}
              </div>
            </div>
            <div className="repo-detail">
              <div className="title">{repositoryDetail.data.full_name}</div>
              <div className="short-description">
                {repositoryDetail.data.description}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="display-message">
          Please wait while we load the content for you.
        </div>
      )}
    </div>
  );
};

export default DetailPage;
