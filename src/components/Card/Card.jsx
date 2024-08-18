import React from 'react'
import "./Card.css"
import LikesDislikes from '../LikesDislikes/LikesDislikes'
import { BorderBeam } from "../magicui/border-beam"

const Card = ({ name, email, imageUrl, details, index }) => {
  return (
    <div className="card">
      <div className="wrapper">
        <div className="profile">
          <img src={imageUrl} alt={name} />
        </div>
        <h2>{name || "Name will be updated"}</h2>
        <h6>Email: {email || "Email will be updated"}</h6>
        <p>
          <ul>
            {details && details.length > 0 ? (
              details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))
            ) : (
              <li>Subjects will be updated</li>
            )}
          </ul>
        </p>
        <div className="">
          <LikesDislikes />
        </div>
      </div>
      
    </div>
  )
}

export default Card