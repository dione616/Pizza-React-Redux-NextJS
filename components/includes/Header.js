import React from "react"
import Link from "next/link"

const Header = () => {
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
      </div>
    </header>
  )
}

export default Header
