import '../../styles/Gallery.css'
import cake1 from '/cake1.PNG'
import cake2 from '/cake2.PNG'
import cake3 from '/cake3.PNG'
import cake4 from '/cake4.PNG'
import cake5 from '/cake5.PNG'
import cake6 from '/cake6.PNG'
import cake7 from '/cake7.PNG'
const Cakes = () => {

  return (
    <>
    <h1 className="title">Custom Cakes</h1>
    <p className="description">Our cheesecake cakes are a perfect blend of creamy indulgence and personalized design. We offer everything from personal-sized lunchbox cakes to larger sheet cakes, as well as unique number and letter cakes that add a special touch to any celebration. Prefer something lighter? We also offer chiffon cake as an option. With a variety of flavors to choose from, each cake is freshly made and fully customizable to suit your occasion and preferences.</p>
    <div className="image-grid">

        <div className="row-2">
          <img src={cake1}id="cupcake1" alt="Cake 1" />
          <img src={cake2}id="cupcake2" alt="Cake 2" />
        </div>

        <div className="row-3">
          <img src={cake3} id="cupcake3"  alt="Cake 3" />
          <img src={cake4} id="cupcake4"  alt="Cake 4" />
          <img src={cake5} id="cupcake5"  alt="Cake 5" />
        </div>

        <div className="row-2">
          <img src={cake6} id="cupcake6"  alt="Cake 6" />
          <img src={cake7} id="cupcake7"  alt="Cake 7" />
        </div>

      </div>
    </>
  )
}

export default Cakes;
