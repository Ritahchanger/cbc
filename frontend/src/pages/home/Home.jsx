import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Subjects from "../../SchoolResources/Subjects";
import DashboardCard from "../../components/DashboardCard";
import { dashboardBoardItems } from "../../components/Datasheet";
import cbc from "../../images/cbc.jpg";
const Home = () => {
  const [figuresCount, setfiguresCount] = useState(100);
  useEffect(() => {
    const incrementFigures = () => {
      if (figuresCount < 700) {
        setTimeout(() => setfiguresCount((prevcount) => prevcount + 1), 100);
      }
    };
    incrementFigures();
    return () => clearTimeout();
  }, [figuresCount]);
  return (
    <div className="home">
      <Navbar />
      <section className="container section_a">
        {/* <p className="title-first">
          LET'S SUPPORT COMPETENCY FOR SUSTAINABILITY GUARANTEED RESULTS
        </p> */}
        <div className="main_dashboard grid">
          {dashboardBoardItems.map((item) => (
            <DashboardCard icon={item.icon} title={item.title} />
          ))}
        </div>
      </section>

      <section className="home_banner">
        <div className="container">
          <div className="row flex">
            <div className="col">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate architecto magnam dolorem enim sunt dicta obcaecati
                iusto, voluptatum, dignissimos aliquid molestiae, assumenda
                libero similique accusamus reprehenderit maxime alias amet
                itaque! Ullam sapiente dolor aspernatur quam amet ducimus non,
                fugiat rem laudantium unde at soluta vero commodi iste nostrum
                aliquid? Quisquam quia et adipisci itaque aperiam quae minima
                porro excepturi quis.
              </p>
            </div>
            <div className="col">
              <img src={cbc} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="impact_numbers">
        <div className="container">
          <div className="wrapper">
            <p>
              <span className="figures">{figuresCount}</span>
              <span>k+</span>
            </p>
            <p className="figures_description">Target impact lives</p>
          </div>
        </div>
      </section>

      <section className="custom_footer container">
        <p className="footer_content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          consequuntur, aliquam dolor mollitia quis consequatur fugiat deserunt
          saepe id, commodi incidunt inventore. Vitae, quis et ab consectetur
          consequatur nobis sed neque quam ex, cum dolores molestias porro iusto
          facilis excepturi possimus, quos pariatur magnam asperiores? Molestias
          molestiae reiciendis rerum officiis. Accusantium molestiae, minus
          voluptatum rem unde quae reprehenderit doloribus perspiciatis enim
          eius modi corrupti quia reiciendis at tempore quas vitae ipsa.
          Voluptatibus rerum impedit vel nesciunt quas architecto eum at.
        </p>
      </section>
    </div>
  );
};

export default Home;
