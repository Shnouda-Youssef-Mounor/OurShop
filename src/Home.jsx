import  React,{ Component } from "react";
import sl1 from './img/slider offers/sl1.jpg';
import sl2 from './img/slider offers/sl2.jpg';
import sl3 from './img/slider offers/sl3.jpg';
import './home.css';

class Home extends Component{
    state={

    }
   
    render(){
return(
   <div className="pagehome">
    <div className="sliderOffers-container">
    <ul>
      <li>
      <img src={sl1} alt="fontOffers" id="pho" />
      </li>
      <li>
      <img src={sl2} alt="fontOffers" id="pho" />
      </li>
      <li>
      <img src={sl3} alt="fontOffers" id="pho" />
      </li>
    </ul>
     
       
   
    </div>
    <div className="produts">
        <div className="product">
          <font className="productFont"> </font>
          <img className="productImg" src="" alt="" />
        </div>
    </div>
    <div className="sliderDeals">

    </div>
    <div className="sliderBudget">

    </div>
   </div>
);
}    
}
export default Home;