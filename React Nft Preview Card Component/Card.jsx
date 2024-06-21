import equilibriumImage from './assets/images/image-equilibrium.jpg';
import ethereumIcon from './assets/images/icon-ethereum.svg';
import clockIcon from './assets/images/icon-clock.svg';
import julesAvatar from './assets/images/image-avatar.png';

function Card() {
  return (
    <article>
      <div className="cube">
        <img src={equilibriumImage} alt="abstract cube balancing on one edge" />
      </div>
      <h2 tabIndex={0}>Equilibrium #3429</h2>
      <p>Our Equilibrium collection promotes balance and calm.</p>
      <section>
        <div className="eth" tabIndex={0}>
          <img src={ethereumIcon} alt="Ethereum Icon" />

          <span>0.041 ETH </span>
        </div>
        <div className="time">
          <img src={clockIcon} alt="clock icon" />
          <time>3 days left</time>
        </div>
      </section>
      <div className="divider" role="separator" />
      <footer>
        <img src={julesAvatar} alt="avatar of Jules Wyvern" />
        <p>
          Creation of <span tabIndex={0}>Jules Wyvern</span>{' '}
        </p>
      </footer>
    </article>
  );
}


export default Card;
       