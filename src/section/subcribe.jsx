import React, { Component } from "react";

class Subcribe extends Component {
  render() {
    return (
      <section
        className="tm-subscribe-wrap tm-bg"
        id="tm-subscribe"
        style={{ backgroundImage: "url(assets/img/greeen-subscribe.jpg)" }}
      >
        <div className="empty-space col-md-b90 col-xs-b55" />
        <div className="container">
          <div className="row">
            <div className="offset-lg-2 col-lg-8">
              <form
                className="mailchimp subscribe-form text-center"
                action="https://storerepublic.us12.list-manage.com/subscribe/post?u=d227d8d335060b093084903d0&id=9ba078ceb0"
              >
                <h2
                  className="col-xs-b2 col-xs-t-1 tm-md-f28 tm-md-lh34 wow fadeIn"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.25s"
                >
                  Enter your email address for newsletter <br />
                  subscription
                </h2>
                <div className="empty-space col-md-b25 col-xs-b25" />
                <input
                  type="email"
                  name="subscribe"
                  id="subscriber-email"
                  placeholder="Your email address"
                  className=" wow fadeIn"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.35s"
                />
                <div className="empty-space col-md-b35 col-xs-b35" />
                <button
                  type="submit"
                  id="subscribe-button"
                  className="tm-btn col-xs-b1 wow fadeIn"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.45s"
                >
                  <span>SUBSCRIBE</span>
                </button>
                {/* SUBSCRIPTION SUCCESSFUL OR ERROR MESSAGES */}
                <h5 className="subscription-success"> .</h5>
                <h5 className="subscription-error"> .</h5>
                <label
                  className="subscription-label"
                  htmlFor="subscriber-email"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="empty-space col-md-b95 col-xs-b60" />
      </section>
    );
  }
}

export default Subcribe;
