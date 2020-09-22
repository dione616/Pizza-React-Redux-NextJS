import React, { Component } from "react"

class About extends Component {
  render() {
    const { siteData } = this.props
    return (
      <div>
        <div className="title_page"></div>
        <div className="content_wrapper">
          <div className="inner">
            <h1>My Pizzeria</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa neque repellendus possimus voluptatibus
              voluptate facilis reprehenderit fuga est natus, itaque optio eaque necessitatibus dolor aut omnis
              veritatis id nam eius?
            </p>
          </div>
          <div className="middle">
            <div className="inner_middle">
              <div className="item two_c">
                <div className="wrapp">
                  <div className="top" style={{ background: `url("/static/images/chef.jpg")` }}></div>
                  <div className="bottom">
                    <h2>Our Chefs</h2>
                    <h3>Pizzeria</h3>
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rem harum quae exercitationem eum,
                      iusto officiis veniam, hic adipisci sint provident magni nemo molestias? Dignissimos cum ad
                      voluptate vero culpa.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item two_c">
                <div className="wrapp">
                  <div className="top" style={{ background: `url("/static/images/chef.jpg")` }}></div>
                  <div className="bottom">
                    <h2>Our Store</h2>
                    <div>{siteData.name}</div>
                    <br />
                    <div>Phone: {siteData.phone}</div>
                    <div>Email: {siteData.email}</div>
                    <div>Address: {siteData.address}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default About
