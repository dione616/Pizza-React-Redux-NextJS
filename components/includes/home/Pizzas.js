import React from "react"
import Link from "next/link"

const Pizzas = () => {
  return (
    <div className="pizzas_wrapper">
      <div className="articles">
        <Link href={{ pathname: "/pizzas", query: { pizzaId: 1 } }} as={`/pizzas/1`}>
          <a>
            <div className="item">
              <div className="inner-item" style={{ background: `url("/static/images/pizza_2.jpg")` }}>
                <div className="overlay"></div>
                <div className="item-nfo">
                  <h3>American</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti aperiam nesciunt. Hic,
                    odio necessitatibus.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </Link>
        <Link href={{ pathname: "/pizzas", query: { pizzaId: 2 } }} as={`/pizzas/2`}>
          <a>
            <div className="item">
              <div className="inner-item" style={{ background: `url("/static/images/pizza_4.jpg")` }}>
                <div className="overlay"></div>
                <div className="item-nfo">
                  <h3>Meat Pizza</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti aperiam nesciunt. Hic,
                    odio necessitatibus.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </Link>
        <Link href={{ pathname: "/pizzas", query: { pizzaId: 3 } }} as={`/pizzas/3`}>
          <a>
            <div className="item">
              <div className="inner-item" style={{ background: `url("/static/images/pizza_3.jpg")` }}>
                <div className="overlay"></div>
                <div className="item-nfo">
                  <h3>Pizza Margherita</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti aperiam nesciunt. Hic,
                    odio necessitatibus.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </Link>
        <Link href={{ pathname: "/pizzas", query: { pizzaId: 4 } }} as={`/pizzas/4`}>
          <a>
            <div className="item">
              <div className="inner-item" style={{ background: `url("/static/images/pizza_1.jpg")` }}>
                <div className="overlay"></div>
                <div className="item-nfo">
                  <h3>Tomato</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti aperiam nesciunt. Hic,
                    odio necessitatibus.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Pizzas
