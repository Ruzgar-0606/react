function GameCard(props) {
  return (
    <article className="game-card">
      <h3>{props.title}</h3>
      <p>Platform: {props.platform}</p>
    </article>
  )
}

export default GameCard
