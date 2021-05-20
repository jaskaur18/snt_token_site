import React, { Component } from "react";
import { Link } from "react-router-dom";
class Themodal extends Component {
  render() {
    return (
      <div>
        <div className="modal fade" id="tm-signup">
          <div className="modal-dialog">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal">
                x
              </button>
              <div className="tm-modal tm-color1">
                <h2 className="tm-modal-title">SIGN UP TO Ocher</h2>
                <form action="#" className="tm-modal-form">
                  <div className="tm-modal-input">
                    <input type="text" placeholder="User Name" />
                    <i className="flaticon-profile" />
                  </div>
                  <div className="tm-modal-input">
                    <input type="email" placeholder="Email" />
                    <i className="flaticon-mail" />
                  </div>
                  <div className="tm-modal-input">
                    <input type="text" placeholder="Password" />
                    <i className="flaticon-lock" />
                  </div>
                  <div className="tm-modal-input">
                    <input type="text" placeholder="Repeat Password" />
                    <i className="flaticon-lock" />
                  </div>
                  <div className="empty-space col-md-b40 col-xs-b40" />
                  <button className="tm-btn tm-style1 w-100" type="submit">
                    LOG IN
                  </button>
                  <div className="tm-modal-or">OR</div>
                  <button className="tm-btn tm-style1 w-100 tm-modal-fb-btn">
                    <i className="fa fa-facebook" />
                    LOG in with facebook
                  </button>
                  <div className="empty-space col-md-b20 col-xs-b20" />
                  <button className="tm-btn tm-style1 w-100 tm-modal-goo-btn">
                    <i className="fa fa-google-plus" />
                    LOG in with GOOGle
                  </button>
                </form>
                <div className="empty-space col-md-b55 col-xs-b55" />
                <div className="tm-modal-footer">
                  <Link to="#" className="tm-forgot-p">
                    Forgot Password?
                  </Link>
                  <Link to="#" className="tm-new-signup">
                    New Here? Sign UP
                  </Link>
                </div>
              </div>
              {/* .tm-modal */}
            </div>
          </div>
        </div>
        <div className="modal fade" id="tm-login">
          <div className="modal-dialog">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal">
                x
              </button>
              <div className="tm-modal tm-color1">
                <h2 className="tm-modal-title">Log In TO Ocher</h2>
                <form action="#" className="tm-modal-form">
                  <div className="tm-modal-input">
                    <input type="text" placeholder="User Name" />
                    <i className="flaticon-profile" />
                  </div>
                  <div className="tm-modal-input">
                    <input type="text" placeholder="Password" />
                    <i className="flaticon-lock" />
                  </div>
                  <div className="empty-space col-md-b40 col-xs-b40" />
                  <button className="tm-btn tm-style1 w-100" type="submit">
                    LOG IN
                  </button>
                  <div className="tm-modal-or">OR</div>
                  <button className="tm-btn tm-style1 w-100 tm-modal-fb-btn">
                    <i className="fa fa-facebook" />
                    LOG in with facebook
                  </button>
                  <div className="empty-space col-md-b20 col-xs-b20" />
                  <button className="tm-btn tm-style1 w-100 tm-modal-goo-btn">
                    <i className="fa fa-google-plus" />
                    LOG in with GOOGle
                  </button>
                </form>
                <div className="empty-space col-md-b55 col-xs-b55" />
                <div className="tm-modal-footer">
                  <Link to="#" className="tm-forgot-p">
                    Forgot Password?
                  </Link>
                  <Link to="#" className="tm-new-signup">
                    New Here? Sign UP
                  </Link>
                </div>
              </div>
              {/* .tm-modal */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Themodal;
