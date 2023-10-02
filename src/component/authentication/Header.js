import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/Sidebarmenu.css'
import Sidebar from '../Sidebar';
import '../../css/Header.css'

function Header() {
  const navigate = useNavigate();
  const cinnamon = () => {
    navigate("/cinnamon");
  }
  const honeyGarlicGinger = () => {
    navigate("/honeyGarlicGinger");
  }
  const sweetChilliCheese = () => {
    navigate("/sweetChilliCheese");
  }

  const DatesButterPecan = () => {
    navigate("/DatesButterPecan");
  }

  const ClovesRaisins = () => {
    navigate("/ClovesRaisins");
  }

  const NutmegCoffe = () => {
    navigate("/NutmegCoffe")
  }

  const AlmondOats = () => {
    navigate("/AlmondOats")
  }

  const hidescroll = () => {
    let i = 1;
    if (i == 1) {
      const _Home = document.getElementsByTagName("body")[0];
      _Home.style.overflow = "hidden";
      i = -1;
      return
    }
  }
  setInterval(()=>{
    let overlayHidden = document.querySelector(".bm-menu-wrap");
    if (overlayHidden.getAttribute("hidden") === "true") {
      document.getElementsByTagName("body")[0].style.overflow = "scroll";
    }
  },500)


  // let activateScroll = document.querySelector("body");

  // ['click','mouseover','wheel','hover'].forEach(evt =>{
   
  //   activateScroll.addEventListener(evt,()=>{

  //     let overlayHidden = document.querySelector(".bm-menu-wrap");
  //     if (overlayHidden.getAttribute("hidden") === "true") {
  //       document.getElementsByTagName("body")[0].style.overflow = "scroll";
  //       // console.log("overflow activated");
  //     }

  //   },false)
    
  // });


  return (
    <>
      <header className='Header'>

        <nav id="outer-container" onClick={hidescroll}>
          <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        </nav>

        <div className='_PastryMenu'>
          <nav className="dropdown ">
            <button className="btn btn-outline-secondary dropdown-toggle DropdownBtn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <b className='fw-bold'>Pastry</b>
            </button>
            <ul className="dropdown-menu DropdownUl" aria-labelledby="dropdownMenuButton1">

              <li>
                <a className="dropdown-item btn " onClick={cinnamon}>
                  <b className='btn  btn-outline-warning'>Cinnamon Chocolate</b>
                </a>
              </li>

              <li>
                <a className="dropdown-item" onClick={honeyGarlicGinger} >
                  <b className='btn btn-outline-success'>Honey Garlic & Ginger
                  </b>
                </a>
              </li>

              <li>
                <a className="dropdown-item" onClick={ClovesRaisins}>
                  <b className='btn btn-outline-secondary'>Cloves Raisins</b>
                </a>
              </li>


              <li><a className="dropdown-item" onClick={sweetChilliCheese}><b className='btn btn-outline-danger'>Sweet Chilli Cheese</b></a></li>
              <li><a className="dropdown-item" onClick={DatesButterPecan}><b className='btn btn-outline-primary'>Dates & Butter Pecan</b></a></li>




              <li>
                <a className="dropdown-item" onClick={NutmegCoffe}>
                  <b className='btn btn-outline-secondary'>Nutmeg Coffe</b>
                </a>
              </li>

              <li>
                <a className="dropdown-item" onClick={AlmondOats}><b className='btn btn-outline-secondary'
                  style={{ borderBlock: "1px purple solid", color: "purple" }}
                >Almond Oats</b>
                </a>
              </li>


            </ul>
          </nav>
        </div>



      </header>
    </>
  )
}

export default Header