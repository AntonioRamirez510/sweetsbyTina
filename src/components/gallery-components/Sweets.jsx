import '../../styles/Gallery.css'
import sweet1 from '/sweet1.PNG'
import sweet2 from '/sweet2.PNG'
import sweet3 from '/sweet3.PNG'
import sweet4 from '/sweet4.PNG'
import sweet5 from '/sweet5.PNG'
import sweet6 from '/sweet6.PNG'
import sweet7 from '/sweet7.PNG'
const Sweets = () => {

  return (
    <>
    <h1 className="title">Custom Sweets</h1>
    <p className="description">At Sweets by Tina, we’re always excited to try something new! Whether it’s a customer request or a spark of inspiration, we love creating unique desserts beyond our regular menu. From inventive cheesecake flavors to custom cookies, muffins, and more, our specialty treats are perfect for adding something a little extra to your dessert experience.
    </p>
    <div className="image-grid">

        <div className="row-2">
          <img src={sweet1}id="cupcake1" alt="sweet 1" />
          <img src={sweet2}id="cupcake2" alt="sweet 2" />
        </div>

        <div className="row-3">
          <img src={sweet3} id="cupcake3"  alt="sweet 3" />
          <img src={sweet4} id="cupcake4"  alt="sweet 4" />
          <img src={sweet5} id="cupcake5"  alt="sweet 5" />
        </div>

        <div className="row-2">
          <img src={sweet6} id="cupcake6"  alt="sweet 6" />
          <img src={sweet7} id="cupcake7"  alt="sweet 7" />
        </div>

      </div>
    </>
  )
}

export default Sweets;
