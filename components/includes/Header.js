import React from "react"
import Link from "next/link"
import auth0Serv from "../../lib/appAuth"

const Header = (props) => {
  return (
    <header>
      <div className="wrapper">
        <div className="top_nav">
          <Link href="/">
            <a className="logo">
              <img src="/static/images/pizzaria_logo.png" alt="logo" />
            </a>
          </Link>
        </div>
        <div className="nav_section">
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a>
                    <i className="fas fa-pizza-slice">
                      <span>Our Pizzas</span>
                    </i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>
                    <i className="fas fa-store">
                      <span>About</span>
                    </i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>
                    <i className="fas fa-map">
                      <span>Contact</span>
                    </i>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {props.userAuth ? (
          <div className="user_actions">
            <Link href="/admin">
              <a>
                <span>Dashboard</span>
              </a>
            </Link>
            <br />
            <div className="btn btn-red" onClick={() => auth0Serv.logout()}>
              <span>Logout</span>
            </div>
          </div>
        ) : (
          <div
            className="login_btn btn-green"
            onClick={() => {
              auth0Serv.login()
            }}
          >
            <div>Login: test123@gmail.com</div>
            <div>Password: Password123</div>
            <div className="btn btn-green">Login</div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
