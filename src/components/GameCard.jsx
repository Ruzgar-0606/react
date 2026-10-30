import { useState } from 'react'

function GameCard(props) {
  const [favorite, setFavorite] = useState(false)

  return (
    <article className="game-card">
      <img
        src={`/images/${props.image ?? 'game-default.svg'}`}
        alt={`${props.image ? 'Poster' : 'Gamecontrollerillustratie'} voor ${props.title}`}
        className="game-image"
        loading="lazy"
      />
      <h3>{props.title}</h3>
      <p>Platform: {props.platform}</p>
      <p>Genre: {props.genre}</p>
      <p>Rating: ⭐ {props.rating}</p>
      <p>Jaar: {props.year}</p>
      <p>Developer: {props.developer}</p>
      <p>Multiplayer: {props.multiplayer ? 'Ja' : 'Nee'}</p>
      <button
        className="favorite-button"
        type="button"
        aria-pressed={favorite}
        onClick={() => setFavorite((currentFavorite) => !currentFavorite)}
      >
        {favorite ? '❤️ Favoriet' : '🤍 Favoriet'}
      </button>
    </article>
  )
}

export default GameCard
