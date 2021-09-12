import React, { useState } from "react"
import people from "./data"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"

const Review = () => {
  const [counter, setCounter] = useState(0)
  const { name, job, image, text } = people[counter]

  function checkNumber(num) {
    if(num > people.length - 1) {
      return 0
    } else if (num < 0) {
      return people.length- 1
    }
    return num 
  }

  function randomReview() {
    let randomIndex = Math.floor(Math.random() * people.length)
    if(randomIndex === counter) {
      randomIndex = counter + 1
    }
    setCounter(randomIndex)
  }

  function prevPerson() {
    setCounter((counter) => {
      let newIndex = counter - 1
      return checkNumber(newIndex)
    })
  }

  function nextPerson() {
    setCounter((counter) => {
      let newIndex = counter + 1
      return checkNumber(newIndex)
    })
  }

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button name="prev" onClick={prevPerson} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button name="next" onClick={nextPerson} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomReview} className="random-btn">
        Surprise Me!
      </button>
    </article>
  )
}

export default Review
