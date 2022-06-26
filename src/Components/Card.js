import React from 'react'

export default function Card({item: {id, title, body, image}}) {
    const ali = require
  return (
    <div>
        <div>
            <h2>
                {title}
            </h2>
            <p>
                {body}
            </p>
        </div>
        <div>
            <img src={'./images/' + image} alt={''} />
        </div>
    </div>
  )
}
