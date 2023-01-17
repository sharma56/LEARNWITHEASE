// import bharatnatyam from "../imgs/bharatnatyam.jpg"
// import bangra from "../imgs/bangra.jpg"
import Guiter from "../imgs/Guiter.jpg";
import Flute from "../imgs/Flute.jpeg";
import Sitar from "../imgs/Sitar.jpeg";
import Rap from "../imgs/Rap.jpg";
import piano from "../imgs/piano2.jpeg";
import Drum from "../imgs/Drum.jpg";
import {useNavigate} from 'react-router-dom'
import Location from "../NavBarContent/Location";

import "./Dance.css";
const Music = () => {
  const navigate=useNavigate();
  return (
    <>
      <style>
        {"body { background: #f2f2f2; },{font-family:sans-serif;},{margin:0;}"}
      </style>
      <div className="gallery" onClick={()=>{navigate("/Location")}}>
        <div className="dance-content">
          <img className="danceImg" src={Guiter} alt="bharatnatyam" />
          <h3>Guiter</h3>
          <p>This is the paragraph for the dance category bharatnatyam</p>
          {/* <h6>$100.0</h6> */}
          {/* <button className="buy-1 danceButton">Buy Now</button> */}
        </div>

        <div className="dance-content">
          <img className="danceImg" src={Flute} alt="bharatnatyam" />
          <h3>Flute</h3>
          <p>This is the paragraph for the dance category bharatnatyam</p>
          {/* <h6>$100.0</h6> */}
          {/* <button className="buy-2 danceButton">Buy Now</button> */}
        </div>

        <div className="dance-content">
          <img className="danceImg" src={Sitar} alt="bharatnatyam" />
          `` <h3>Sitar</h3>
          <p>This is the paragraph for the dance category bharatnatyam</p>
          {/* <h6>$100.0</h6> */}
          {/* <button className="buy-3 danceButton">Buy Now</button> */}
        </div>

        {/* <div className="dance-content">
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
          <img className="danceImg" src={Rap} alt="bharatnatyam" />
          <h3>Rap</h3>
          <p>This is the paragraph for the dance category bharatnatyam</p>
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
          <img className="danceImg" src={piano} alt="bharatnatyam" />
          <h3>piano</h3>
          <p>This is the paragraph for the dance category bharatnatyam</p>
          {/* <h6>$100.0</h6> */}
          {/* <button className="buy-4 danceButton">Buy Now</button> */}
        </div>
        <div className="dance-content">
          <img className="danceImg" src={Drum} alt="bharatnatyam" />
          <h3>Drum</h3>
          <p>This is the paragraph for the dance category bharatnatyam</p>
          {/* <h6>$100.0</h6> */}
          {/* <button className="buy-4 danceButton">Buy Now</button> */}
        </div>
      </div>
    </>
  );
};
export default Music;
