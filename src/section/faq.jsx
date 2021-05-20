import React, { Component } from "react";

class Faq extends Component {
  render() {
    return (
      <section
        className="tm-faq-wrap tm-bg"
        id="faq"
        style={{ backgroundImage: "url(assets/img/greeen-faq.jpg)" }}
      >
        <div className="empty-space col-md-b90 col-xs-b55" />
        <h2
          className="text-center col-xs-b2 tm-green-c col-xs-t-1 tm-md-f28 tm-md-lh34 wow fadeIn"
          data-wow-duration="0.8s"
          data-wow-delay="0.25s"
        >
          Frequently Asked Questions
        </h2>
        <div className="empty-space col-md-b55 col-xs-b35" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tabs animated-fade">
                <ul className="tab-links">
                  <li
                    className="active wow fadeIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.35s"
                  >
                    <a href="#top-question">Top Questions</a>
                  </li>
                  <li
                    className="wow fadeIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.45s"
                  >
                    <a href="#company">Company</a>
                  </li>
                  <li
                    className="wow fadeIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.55s"
                  >
                    <a href="#product">Product</a>
                  </li>
                  <li
                    className="wow fadeIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.65s"
                  >
                    <a href="#token-sale">Token Sale</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div id="top-question" className="tab active">
                    <div className="tm-faq">
                      <div className="accordian-wrapper">
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.25s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            What is Ocher ?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.35s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            Why do we need Ethereum?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.45s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            Which countries does populous currently support?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.55s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            What kind security does populous use to protect my
                            account?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.65s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            What problems does Ocher attempt to solve?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.75s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            What would you consider to be a success with this
                            ICO?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.85s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            Are Ocher token ERC-20 resellable?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.95s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            Whom can I reach out to with other questions?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                      </div>
                    </div>
                    {/* .tm-faq */}
                  </div>
                  <div id="company" className="tab">
                    <div className="tm-faq">
                      <div className="accordian-wrapper">
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.25s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            What is Ocher ?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.35s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            Why do we need Ethereum?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.45s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            Which countries does populous currently support?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.55s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            What kind security does populous use to protect my
                            account?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.65s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            What problems does Ocher attempt to solve?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.75s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            What would you consider to be a success with this
                            ICO?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.85s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            Are Ocher token ERC-20 resellable?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.95s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            Whom can I reach out to with other questions?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                      </div>
                    </div>
                    {/* .tm-faq */}
                  </div>
                  <div id="product" className="tab">
                    <div className="tm-faq">
                      <div className="accordian-wrapper">
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.25s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            What is Ocher ?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.35s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            Why do we need Ethereum?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.45s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            Which countries does populous currently support?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.55s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            What kind security does populous use to protect my
                            account?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.65s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            What problems does Ocher attempt to solve?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.75s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            What would you consider to be a success with this
                            ICO?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.85s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            Are Ocher token ERC-20 resellable?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.95s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            Whom can I reach out to with other questions?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                      </div>
                    </div>
                    {/* .tm-faq */}
                  </div>
                  <div id="token-sale" className="tab">
                    <div className="tm-faq">
                      <div className="accordian-wrapper">
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.25s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            What is Ocher ?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.35s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            Why do we need Ethereum?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.45s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            Which countries does populous currently support?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.55s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            What kind security does populous use to protect my
                            account?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.65s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            What problems does Ocher attempt to solve?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.75s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            What would you consider to be a success with this
                            ICO?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.85s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            Are Ocher token ERC-20 resellable?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                        <div
                          className="single-accordian wow fadeIn"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.95s"
                        >
                          <h3 className="accordian-head tm-green-c tm-f20 tm-md-f16">
                            Whom can I reach out to with other questions?
                          </h3>
                          <div className="accordian-body">
                            Ocher is the most functional template for Ethereum
                            block chain ERC Token ICO’S. Switable for star up
                            ICO’s. A token sale, sometimes referred to as an
                            initial coin offering (ICO), is form of rowd-funding
                            for digital currency-related projects.
                          </div>
                        </div>
                        {/* .single-accordian */}
                      </div>
                    </div>
                    {/* .tm-faq */}
                  </div>
                </div>
              </div>
            </div>
            {/* .col */}
          </div>
        </div>
        <div className="empty-space col-md-b85 col-xs-b50" />
      </section>
    );
  }
}

export default Faq;
