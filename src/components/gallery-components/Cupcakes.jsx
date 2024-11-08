import '../../styles/Gallery.css'
import cupcake1 from '/cupcake1.PNG'
import cupcake2 from '/cupcake2.PNG'
import cupcake3 from '/cupcake3.PNG'
import cupcake4 from '/cupcake4.PNG'
import cupcake5 from '/cupcake5.PNG'
import cupcake6 from '/cupcake6.PNG'
import cupcake7 from '/cupcake7.PNG'
const Cupcakes = () => {

  return (
    <>
    <h1 className="title">Custom Cupcakes</h1>
    <p className="description">At Sweets by Tina, our cheesecake cupcakes combine the creamy richness of cheesecake with the fun, shareable style of a cupcake—perfect for any social event or special occasion. We offer unique flavors like ube, peach cobbler, matcha, and blueberry, along with classics like vanilla and chocolate. For those who prefer a lighter treat, we also offer regular chiffon cake options. Each dessert is freshly made and customizable to fit your theme or flavor preference.</p>
    <div className="image-grid">

        <div className="row-2">
          <img src={cupcake1}id="cupcake1" alt="Cupcake 1" />
          <img src={cupcake2}id="cupcake2" alt="Cupcake 2" />
        </div>

        <div className="row-3">
          <img src={cupcake3} id="cupcake3"  alt="Cupcake 3" />
          <img src={cupcake4} id="cupcake4"  alt="Cupcake 4" />
          <img src={cupcake5} id="cupcake5"  alt="Cupcake 5" />
        </div>

        <div className="row-2">
          <img src={cupcake6} id="cupcake6"  alt="Cupcake 6" />
          <img src={cupcake7} id="cupcake7"  alt="Cupcake 7" />
        </div>

      </div>
    </>
  )
}
export default Cupcakes;
