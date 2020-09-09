import React from "react"
import Link from "next/link"

const Featured = () => {
  return (
    <div>
      <Link href="/pizzas/2">
        <a>
          <div className="featured_container" style={{ background: `url("/static/images/pizza_5.jpg")` }}>
            <div className="overlay">
              <div className="info">
                <div className="top">
                  <h2>Pizza of the day</h2>
                </div>
                <div className="desscription">
                  <h3>Veggie junior</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius amet dolorum dolorem dolore itaque
                    quasi! Obcaecati, blanditiis error. Temporibus corrupti exercitationem id perferendis ipsa delectus
                    quidem quibusdam soluta aperiam distinctio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Featured
