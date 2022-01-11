import './ViewPost.css'
import './ViewPost.scss'
import { useSelector } from 'react-redux';

export default function ViewPost() {
  return (
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
                    <div className="card__background--main" >
                      <div className="card__background--layer" />
                    </div>
                  </div>
                </div>
                <div className="blog-card__info">
                  <h5>Mariem</h5>
                  <p>
                    <a href="#" className="icon-link mr-3"><i className="fa fa-pencil-square-o" />Mariem posted this</a>
                  </p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque vero libero voluptatibus earum? Alias dignissimos quo cum, nulla esse facere atque, blanditiis doloribus at sunt quas, repellendus vel? Et, hic!</p>
                </div>
                <div className="blog-card__info">
                  <p>
                    <a href="#" className="icon-link mr-3"><i className="fa fa-pencil-square-o" />Nom de la société</a>
                  </p>
                  <ul>
                      <li>
                          Email :
                      </li>
                      <li>
                        Phone number :
                      </li>
                      <li>
                          Adress : 
                      </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>
        <section className="detail-page">
          <div className="container mt-5">
          </div>
        </section>
      </div>
    </>
  );
}
