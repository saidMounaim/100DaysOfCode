import React from 'react'

const Card = ({ char }) => {
    return (
        <div className="item" key={char.id}>
            <img src={char.img} alt={char.name} />
            <div className="info">
                <h3>{char.name}</h3>
                <span>{char.nickname}</span>
                <br />
                <span>{char.birthday}</span>
            </div>
        </div>
    )
}

export default Card
