import bharatnatyam from "../imgs/bharatnatyam.jpg"
import bangra from "../imgs/bangra.jpg"
import hiphop from "../imgs/hiphop.jpg"
import Jazz from "../imgs/Jazz.jpg"
import Irish from "../imgs/Irish.jpg"
import Contemporary from "../imgs/Contemporary.jpg"
import Kathak from "../imgs/Kathak.jpg";
import Disco from "../imgs/Disco.jpg";



import "./Dance.css";
const Dance = () => {
  return (
    <>
    <style>{'body { background: #f2f2f2; },{font-family:sans-serif;},{margin:0;}'}</style>
        <div className="gallery">
            <div className="dance-content">
                <img className="danceImg" src={bharatnatyam} alt="bharatnatyam" />
                <h3>Bharatnatyam</h3>
                <p>This is the paragraph for the dance category bharatnatyam</p>
                {/* <h6>$100.0</h6> */}
                {/* <button className="buy-1 danceButton">Buy Now</button> */}
            </div>

            <div className="dance-content">
                <img className="danceImg" src={bangra} alt="bharatnatyam" />
                <h3>Bangra</h3>
                <p>This is the paragraph for the dance category bharatnatyam</p>
                {/* <h6>$100.0</h6> */}
                    {/* <button className="buy-2 danceButton">Buy Now</button> */}
            </div>

            <div className="dance-content">
                <img className="danceImg" src={hiphop} alt="bharatnatyam" />
                <h3>Hiphop</h3>
                <p>This is the paragraph for the dance category bharatnatyam</p>
                {/* <h6>$100.0</h6>
                <button className="buy-3 danceButton">Buy Now</button> */}
            </div>

            <div className="dance-content">
                <img className="danceImg" src={Jazz} alt="bharatnatyam" />
                <h3>Jazz</h3>
                <p>This is the paragraph for the dance category bharatnatyam</p>
                {/* <h6>$100.0</h6>
                <button className="buy-4 danceButton">Buy Now</button> */}
            </div>

            <div className="dance-content">
                <img className="danceImg" src={Irish} alt="bharatnatyam" />
                <h3>Irish</h3>
                <p>This is the paragraph for the dance category bharatnatyam</p>
                {/* <h6>$100.0</h6>
                <button className="buy-5 danceButton">Buy Now</button> */}
            </div> 

<div className="dance-content">
                <img className="danceImg" src={Contemporary} alt="bharatnatyam" />
                <h3>Contemporary</h3>
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
                <img className="danceImg" src={Kathak} alt="bharatnatyam" />
                <h3>Kathak</h3>
                <p>This is the paragraph for the dance category bharatnatyam</p>
                {/* <h6>$100.0</h6>
                <button className="buy-4 danceButton">Buy Now</button> */}
            </div>
            <div className="dance-content">
                <img className="danceImg" src={Disco} alt="bharatnatyam" />
                <h3>Disco</h3>
                <p>This is the paragraph for the dance category bharatnatyam</p>
                {/* <h6>$100.0</h6>
                <button className="buy-4 danceButton">Buy Now</button> */}
            </div>
        </div>
    </>
  );
};
export default Dance;
