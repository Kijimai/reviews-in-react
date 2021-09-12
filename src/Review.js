import React, { useState } from "react"
import people from "./data"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"

const Review = () => {
  const [counter, setCounter] = useState(0)
  const [person, setPerson] = useState({ people })
  console.log(person)

  function handleClick(e) {
    const btnName = e.target.name
    if (btnName === "prev") {
      if (counter === 0) {
        setCounter(people.length - 1)
      } else {
        setCounter(counter - 1)
      }
    } else if (btnName === "next") {
      if (counter === people.length) {
        setCounter(0)
      } else {
        setCounter(counter + 1)
      }
    }
  }

  return (
    <article key={people[counter].id} className="review">
      <div className="img-container">
        <img
          className="person-img"
          src={people[counter].image}
          alt={people[counter].name}
        />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{people[counter].name}</h4>
      <p className="job">{people[counter].job}</p>
      <p className="info">{people[counter].text}</p>
      <div className="button-container">
        <button name="prev" onClick={handleClick} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button name="next" onClick={handleClick} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
    </article>
  )
}

export default Review
