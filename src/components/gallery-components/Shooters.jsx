import '../../styles/Gallery.css'
import shooter1 from '/shooter1.PNG'
import shooter2 from '/shooter2.PNG'
import shooter3 from '/shooter3.PNG'
import shooter4 from '/shooter4.PNG'
import shooter5 from '/shooter5.PNG'
import shooter6 from '/shooter6.PNG'
import shooter7 from '/shooter7.PNG'
const Shooters = () => {

  return (
    <>
    <h1 className="title">Custom Shooters</h1>
    <p className="description">Sweets by Tina’s cheesecake and chiffon cake shooters are the perfect bite-sized indulgence for any event. These mini desserts come layered with rich, creamy cheesecake or light, fluffy chiffon cake in a variety of flavors to match your theme or taste. Easy to enjoy and beautifully presented, our dessert shooters bring a touch of elegance and fun to any gathering, from parties to intimate celebrations.</p>
    <div className="image-grid">

        <div className="row-2">
          <img src={shooter1}id="cupcake1" alt="shooter 1" />
          <img src={shooter2}id="cupcake2" alt="shooter 2" />
        </div>

        <div className="row-3">
          <img src={shooter3} id="cupcake3"  alt="shooter 3" />
          <img src={shooter4} id="cupcake4"  alt="shooter 4" />
          <img src={shooter5} id="cupcake5"  alt="shooter 5" />
        </div>

        <div className="row-2">
          <img src={shooter6} id="cupcake6"  alt="shooter 6" />
          <img src={shooter7} id="cupcake7"  alt="shooter 7" />
        </div>

      </div>
    </>
  )
}

export default Shooters;
