import bharatnatyam from "../imgs/bharatnatyam.jpg"
import hathyoga from "../imgs/HathYoga.jpeg"
import kundlini from "../imgs/Hundlini.jpg"
import powerYoga from "../imgs/powerYoga.jpg"
import Restorativeyoga from "../imgs/Restorative yoga.jpg"

import "./Dance.css";
const Yoga = () => {
  return (
    <>
    <style>{'body { background: #f2f2f2; },{font-family:sans-serif;},{margin:0;}'}</style>
        <div className="gallery">
            <div className="dance-content">
                <img className="danceImg" src={hathyoga} alt="bharatnatyam" />
                <h3>Hath Yoga</h3>
                <p>This is the paragraph for the yoga category Hath Yoga</p>
                {/* <h6>$100.0</h6>
                <button className="buy-1 danceButton">Buy Now</button> */}
            </div>

            <div className="dance-content">
                <img className="danceImg" src={kundlini} alt="bharatnatyam" />
                <h3>Kundalini Yoga</h3>
                <p>This is the paragraph for the yoga category Kundalini Yoga</p>
                {/* <h6>$100.0</h6>
                    <button className="buy-2 danceButton">Buy Now</button> */}
            </div>

            {/* <div className="dance-content">
                <img className="danceImg" src={bharatnatyam} alt="bharatnatyam" />
                <h3>Bharatnatyam</h3>
                <p>This is the paragraph for the dance category bharatnatyam</p>
                <h6>$100.0</h6>
                <button className="buy-3 danceButton">Buy Now</button>
            </div>

            <div className="dance-content">
                <img className="danceImg" src={bharatnatyam} alt="bharatnatyam" />
                <h3>Bharatnatyam</h3>
                <p>This is the paragraph for the dance category bharatnatyam</p>
                <h6>$100.0</h6>
                <button className="buy-4 danceButton">Buy Now</button>
            </div>

            <div className="dance-content">
                <img className="danceImg" src={bharatnatyam} alt="bharatnatyam" />
                <h3>Bharatnatyam</h3>
                <p>This is the paragraph for the dance category bharatnatyam</p>
                <h6>$100.0</h6>
                <button className="buy-5 danceButton">Buy Now</button>
            </div>  */}

<div className="dance-content">
                <img className="danceImg" src={powerYoga} alt="bharatnatyam" />
                <h3>Power Yoga</h3>
                <p>This is the paragraph for the yoga category Power Yoga</p>
                {/* <h6>$100.0</h6> */}
                {/* <ul>
                    <li><i className="fa fa-star checked"></i></li>
                    <li><i className="fa fa-star checked"></i></li>
                    <li><i className="fa fa-star checked"></i></li>
                    <li><i className="fa fa-star checked"></i></li>
                    <li><i className="fa fa-star"></i></li>
                </ul> */}
                {/* <button className="buy-4 danceButton">Buy Now</button> */}
            </div>
            <div className="dance-content">
                <img className="danceImg" src={Restorativeyoga} alt="bharatnatyam" />
                <h3>Restorative yoga</h3>
                <p>This is the paragraph for the yoga category Restorative yoga</p>
                {/* <h6>$100.0</h6>
                <button className="buy-4 danceButton">Buy Now</button> */}
            </div>
            {/* <div className="dance-content">
                <img className="danceImg" src={bharatnatyam} alt="bharatnatyam" />
                <h3>Bharatnatyam</h3>
                <p>This is the paragraph for the dance category bharatnatyam</p>
                <h6>$100.0</h6>
                <button className="buy-4 danceButton">Buy Now</button>
            </div> */}
        </div>
    </>
  );
};
export default Yoga;
