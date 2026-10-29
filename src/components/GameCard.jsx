import { useState } from 'react'

function GameCard(props) {
  const [favorite, setFavorite] = useState(false)

  return (
    <article className="game-card">
      <h3>{props.title}</h3>
      <p>Platform: {props.platform}</p>
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
