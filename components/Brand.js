import React from "react";
import { useState,useEffect } from "react";
import { Title } from "./common/Title";
import { brand ,poweredBy} from "@/assets/data/dummydata";

const Brand = () => {
  const [poweredByLogos, setPoweredByLogos] = useState([]);

  useEffect(() => {
    // Set the "Powered by" logos on the client side
    setPoweredByLogos(
      poweredBy.map((item) => (
        <img
          key={item.id}
          src={item.cover}
          alt={item.id}
          className="logo-powerby"
        />
      ))
    );
  }, []);
  const brandStyles = `
    /* Your CSS styles here */
    .brand {
      text-align: center;
      padding: 20px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .heading-title {
      margin-bottom: 20px;
    }

    .sponsor-group {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      text-align: center;
    }

    .sponsor-group-heading {
      width: 100%;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .images.sponsor {
      max-width: 200px;
      transition: filter 0.3s ease-in-out;
    }

    .images.sponsor:hover {
      filter: none;
    }

    .img_sponsor {
      max-width: 100%;
      height: auto;
    }

    /* Category styles */
    .gold {
      padding: 10px;
    }

    .silver {
      padding: 10px;
    }

    .bronze {
      padding: 10px;
    }
    .powered-by {
      margin-top: 10%;
      margin-bottom: 10%;
      text-align: center;
    }

    .powered-by p {
      font-weight: bold;
     
    }

    .logo-container {
      display: flex;
      justify-content: center;
      gap: 20px; /* Adjust the gap between logos */
    }

    .logo-powerby {
      max-width: 350px;
      height: 150px;
    }

    /* Responsive styles */
    @media screen and (max-width: 768px) {
      .logo-container {
        flex-direction: column; /* Stack logos vertically */
        align-items: center; /* Center align vertically */
      }
    }
  `;

  return (
    <>
      <style>{brandStyles}</style>
      <section className="brand">
        <div className="container">
          <div className="heading-title">
            <Title title="Our Sponsors" />
          </div>
          <div className="sponsor-group">
            <div className="sponsor-group-heading">Golden Sponsors</div>
            {brand.slice(0, 2).map((item, index) => (
              <div
                className={`images sponsor gold`}
                key={item.id}
              >
                <div className="category">
                  <img
                    src={item.cover}
                    alt={item.id}
                    className="img_sponsor"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="sponsor-group">
            <div className="sponsor-group-heading">Silver Sponsors</div>
            {brand.slice(2, 3).map((item) => (
              <div
                className={`images sponsor silver`}
                key={item.id}
              >
                <div className="category">
                  <img
                    src={item.cover}
                    alt={item.id}
                    className="img_sponsor"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="sponsor-group">
            <div className="sponsor-group-heading">Bronze Sponsors</div>
            {brand.slice(3).map((item) => (
              <div
                className={`images sponsor bronze`}
                key={item.id}
              >
                <div className="category">
                  <img
                    src={item.cover}
                    alt={item.id}
                    className="img_sponsor"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="powered-by">
        <h1 className="title">Powered by:</h1><br></br>
        <div className="logo-container">{poweredByLogos}</div>
      </div>
    </>
  );
};

export default Brand;
