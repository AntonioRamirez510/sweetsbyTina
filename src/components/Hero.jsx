import sweets from '../assets/sweets.PNG'
import cupcakes from '../assets/cupcakes.PNG'
import cookies from '../assets/cookies.PNG'
import shooters from '../assets/shooters.PNG'
import cakes from '../assets/cakes.PNG'

const Hero = () => {
  return (
    <div className="hero">
      <img className="banner" src={sweets} ></img>

      <h1>Sweetening the Bay Area</h1>
      <p>ONE CUSTOM TREAT AT A TIME</p>

      <div className="categories">
        <div className="category-sweet">
          <img src={cupcakes} ></img>
          <p>CUPCAKES</p>
        </div>

        <div className="category-sweet">
          <img src={cakes} ></img>
          <p>CAKES</p>
        </div>

        <div className="category-sweet">
          <img src={shooters} ></img>
          <p>SHOOTERS</p>
        </div>

        <div className="category-sweet">
          <img src={cookies} ></img>
          <p>COOKIES</p>
        </div>

      </div>
    </div>
  )
}

export default Hero;
