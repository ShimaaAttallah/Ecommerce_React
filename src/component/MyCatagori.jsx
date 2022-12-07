import React from "react";
import MyProducts from "./MyProducts";
import { MySlider } from "./MySlider";
import { MyService } from "./MyService";
import "./css/MyAboutstyle.css";



const MyCatagori = () => {
  let categories = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "SHIRT STYLE!",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "LOUNGEWEAR LOVE",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "LIGHT JACKETS",
    },
  ];
  let carouselItems = [
    {
        id: 1,
        img: "https://media.istockphoto.com/photos/portrait-of-afro-man-in-the-clothing-store-picture-id1185068908?k=20&m=1185068908&s=612x612&w=0&h=PDyfElrL50YEnIUmZDlqY_BKx5zBQnjtR6R4hf2TDhY=",
        caption: "Men's Collection",
        des: "Discover the full Cartier Men's Collection on the Official Cartier® Online US Store. See our unique jewelry pieces, and one-of-a-kind creations."
    },
    {
      id: 2,
      img: "https://media.istockphoto.com/photos/young-woman-choosing-clothes-picture-id1222436604?k=20&m=1222436604&s=612x612&w=0&h=XfgEkHBIes93eejTwHKe642RI_zPj0Vba8LbyVAHEmA=",
      caption: "Women's Collection",
      des: "Discover the full Cartier Women's Collection on the Official Cartier® Online US Store. See our unique jewelry pieces, and one-of-a-kind creations."
    },
    {
      id: 3,
      img:"https://media.istockphoto.com/photos/happy-young-casual-woman-showing-pearl-accessories-and-gold-chain-picture-id1180825241?k=20&m=1180825241&s=612x612&w=0&h=-jrAeJvVy48i-YBQYOKzdo_t0vOCK2CJ1Fsn0KK3YW8=",
      caption: "Jewelery's Collection",
      des: "Discover the full Cartier Jewelry Collection on the Official Cartier® Online US Store. See our unique jewelry pieces, and one-of-a-kind creations."
    },
    {
      id: 4,
      img:"https://media.istockphoto.com/photos/large-office-set-electronic-agenda-retro-photo-camera-and-accessories-picture-id1203960304?k=20&m=1203960304&s=612x612&w=0&h=B_lOjvkB1u86X-LhBNziYz58H2lNw4_u-hCd1k29B3U=",
      caption: "Electronic's Collection",
      des: "Discover the full Cartier Electronics Collection on the Official Cartier® Online US Store....Computers, electronics, batteries, and light bulbs."
    }
  ]
  return (
    <div>
      <div className="container-fluid">
        <div className='row justify-content-center'>
          <MySlider carouselItems={carouselItems} />
        </div>
      </div>
      <MyProducts />
      <div className="container">
        <div className='row justify-content-center'>
          <MyService categories={categories} />
        </div>
      </div>

      {/* -----Learn more about Shopify----- */}
      <diV id="about">
      <h1>Learn more about Shopify</h1>
          <div id="hero">
            <div class="card">
              <i class="fa fa-archive" aria-hidden="true"></i>
              <h5 >Free Shopping Method</h5>
              <p >aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
            </div>
            <div class="card">
              <i class="fa fa-lock" aria-hidden="true"></i>
              <h5 >Secure Payment System</h5>
              <p >aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
            </div>
            <div class="card">
            <i class="fa fa-lock" aria-hidden="true"></i>
            <h5 >Secure Payment System</h5>
            <p >aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
            </div>
            </div>
        </diV>
    </div>
  );
};
export default MyCatagori;