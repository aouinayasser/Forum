import EditPost from "../EditPost/EditPost";
import DeletePost from "../DeletePost/DeletePost"
import "./Post.css";

export default function Post() {
  return (
    <div className="row">
      <div className="col-lg">
        <div className="container-fluid d-flex justify-content-center">
          <div
            className="list list-row card"
            id="sortable"
            data-sortable-id={0}
            aria-dropeffect="move"
          >
            <div
              className="list-item"
              data-id={13}
              data-item-sortable-id={0}
              draggable="true"
              role="option"
              aria-grabbed="false"
              style={{}}
            >
              <div>
                <a href="#" data-abc="true">
                  <span className="w-40 avatar gd-primary">P</span>
                </a>
              </div>
              <div className="flex">
                {" "}
                <a href="#" className="item-author text-color" data-abc="true">
                  Patrick Linod
                </a>
                <div className="item-except text-muted text-sm h-1x">
                  For what reason would it be advisable for me to think about
                  business content?
                </div>
              </div>
              <div className="no-wrap">
                <div className="item-date text-muted text-sm d-none d-md-block">
                  3 weeks ago
                </div>
              </div>
              <div>
                <div className="item-action dropdown">
                  {" "}
                  <a
                    href="#"
                    data-toggle="dropdown"
                    className="text-muted"
                    data-abc="true"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-more-vertical"
                    >
                      <circle cx={12} cy={12} r={1} />
                      <circle cx={12} cy={5} r={1} />
                      <circle cx={12} cy={19} r={1} />
                    </svg>{" "}
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right bg-white"
                    role="menu"
                  >
                    
                      <a className="dropdown-item edit" data-abc="true">
                      <EditPost />
                      </a>
                    <div className="dropdown-divider" />{" "}
                    <a className="dropdown-item trash" data-abc="true">
                    <DeletePost />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
