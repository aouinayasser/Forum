import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import "./ViewPost.css";
import "./ViewPost.scss";

export default function ViewPost() {
  const jobSeeker = useSelector(
    (state) => state.jobSeekerAuthReducer.jobSeekerIsAuth
  );
  const { clientIsAuth } = useSelector((state) => state.clientAuthReducer);
  const { clientPost, clientLoading } = useSelector(
    (state) => state.clientPostReducer
  );
  const { callCenterPost, callLoading } = useSelector(
    (state) => state.callCenterPostReducer
  );
  return (
    <>
      {callLoading && clientLoading ? (
        <h2>loading</h2>
      ) : (
        <>
          <div className="heading-page header-text">
            <section className="page-heading">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="text-content">
                      <h2 style={{ color: "white" }}>Offer details</h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <div className="container mt-5">
              <div className="row">
                <div className="col-12">
                  <article className="blog-card">
                    <div className="blog-card__background">
                      <div className="card__background--wrapper">
                        <div className="card__background--main">
                          <div className="card__background--layer" />
                        </div>
                      </div>
                    </div>
                    <div className="blog-card__info">
                      {jobSeeker || clientIsAuth ? (
                        <h5>
                          {callCenterPost &&
                            callCenterPost.CallCenter.companyName}
                        </h5>
                      ) : (
                        <h5>{clientPost && clientPost.Client.companyName}</h5>
                      )}
                      <p>
                        <a className="icon-link mr-3">
                          <i className="fa fa-pencil-square-o" />
                          {jobSeeker || clientIsAuth ? (
                            <p>
                              {callCenterPost &&
                                callCenterPost.CallCenter.firstname}{" "}
                              {callCenterPost &&
                                callCenterPost.CallCenter.lastname}{" "}
                              posted this
                            </p>
                          ) : (
                            <p>
                              {clientPost && clientPost.Client.firstname}{" "}
                              {clientPost && clientPost.Client.lastname} posted
                              this
                            </p>
                          )}
                        </a>
                      </p>
                      {jobSeeker || clientIsAuth ? (
                        <p>{callCenterPost && callCenterPost.description}</p>
                      ) : (
                        <p>{clientPost && clientPost.description}</p>
                      )}
                    </div>
                    <div className="blog-card__info">
                      <p>
                        <a className="icon-link mr-3">
                          <i className="fa fa-pencil-square-o" />
                          Informations de la société
                        </a>
                      </p>
                      <ul>
                        {jobSeeker || clientIsAuth ? (
                          <p>
                            Email :{" "}
                            {callCenterPost && callCenterPost.CallCenter.email}
                          </p>
                        ) : (
                          <p>Email : {clientPost && clientPost.Client.email}</p>
                        )}
                      </ul>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <section className="detail-page">
              <div className="container mt-5"></div>
            </section>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
