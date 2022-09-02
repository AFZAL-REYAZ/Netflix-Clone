import React,{useState} from "react";
import "./Card.css";
//import Navbar from "./Navbar";

const Card = (props) => {
  let dgcolor="rgb(156, 70, 78)";
  const [color, setState] = useState(dgcolor);
  const bgcolor =()=>{
	let upbgcolor="rgb(34, 194, 132)";
	setState(upbgcolor);
  }

  console.log("1", props);
  return (
    <>
	    <div className="cardbigbox">
        <div className="cards">
            <span className="card_categry">{props.tittle}</span>
            <img src={props.imgsrc} alt="Loding" className="card_img" />
          <div className="card_information" >
            <a href={props.link} target="blank" >
              <button onClick={bgcolor} style={{backgroundColor:color}}>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
