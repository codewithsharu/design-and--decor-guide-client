import React from "react";

const images = [
  "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80", // Modern living room interior
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80", // Stylish bedroom design
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80", // Contemporary kitchen
  "https://plus.unsplash.com/premium_photo-1686090448517-2f692cc45187?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Modern interior
];

const NewArrivals = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            outline: none;
        }
        .newarrivals-body{
            width: 100%;
            min-height: 100vh;
            display: grid;
            place-items: center;
            font-family: 'Poppins', sans-serif;
        }
        .newarrivals-container{
            width: 90%;
            height: 100%;
            max-width: 1170px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            align-items: center;
            grid-gap: 60px;
            padding: 35px 0;
        }
        .newarrivals-contentLeft,
        .newarrivals-contentRight{
            width: 100%;
        }
        .newarrivals-contentLeft .newarrivals-row{
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 10px;
        }
        .newarrivals-contentLeft .newarrivals-row .newarrivals-imgWrapper{
            width: 100%;
            height: 450px;
            overflow: hidden;
            border-radius: 10px;
            cursor: pointer;
            box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.15);
        }
        .newarrivals-contentLeft .newarrivals-row .newarrivals-imgWrapper img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            user-select: none;
            transition: 0.3s ease;
        }
        .newarrivals-contentLeft .newarrivals-row .newarrivals-imgWrapper:hover img{
            transform: scale(1.5);
        }
        .newarrivals-contentLeft .newarrivals-row .newarrivals-imgWrapper:nth-child(odd){
            transform: translateY(-20px);
        }
        .newarrivals-contentLeft .newarrivals-row .newarrivals-imgWrapper:nth-child(even){
            transform: translateY(20px);
        }
        .newarrivals-contentRight .newarrivals-content{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
        }
        .newarrivals-contentRight .newarrivals-content h4{
            font-size: 22px;
            font-weight: 400;
            color: #d35400;
        }
        .newarrivals-contentRight .newarrivals-content h2{
            font-size: 40px;
            color: #1e272e;
        }
        .newarrivals-contentRight .newarrivals-content p{
            font-size: 16px;
            color: #343434;
            line-height: 28px;
            padding-bottom: 10px;
        }
        .newarrivals-contentRight .newarrivals-content a{
            display: inline-block;
            text-decoration: none;
            font-size: 16px;
            letter-spacing: 1px;
            padding: 13px 30px;
            color: #fff;
            background: #d35400;
            border-radius: 8px;
            user-select: none;
        }
        @media(max-width: 768px){
            .newarrivals-container{
                grid-template-columns: 1fr;
            }
            .newarrivals-contentLeft .newarrivals-row{
                grid-template-columns: repeat(2, 1fr);
            }
            .newarrivals-contentLeft .newarrivals-row .newarrivals-imgWrapper{
                height: 150px;
            }
            .newarrivals-contentRight .newarrivals-content h4{
                font-size: 18px;
            }
            .newarrivals-contentRight .newarrivals-content h2{
                font-size: 30px;
            }
        }
      `}</style>
      <div className="newarrivals-body">
        <div className="newarrivals-container">
          <div className="newarrivals-contentLeft">
            <div className="newarrivals-row">
              {images.map((src, idx) => (
                <div className="newarrivals-imgWrapper" key={idx}>
                  <img src={src} alt={`New Arrival ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="newarrivals-contentRight">
            <div className="newarrivals-content">
              <h4>Welcome To</h4>
              <h2>Design &amp; Decor Guide</h2>
              <p>
                At our studio, we believe every space tells a story. Discover curated collections of modern furniture, elegant decor, and innovative design solutions to elevate your home. From cozy living rooms to serene bedrooms, we blend style and functionality for inspired living.
              </p>
              <a href="#">Learn More About Us</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivals;