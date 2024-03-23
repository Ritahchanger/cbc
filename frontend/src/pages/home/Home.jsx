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

  const [ announcementModal,displayAnnouncementModal ] = useState(false);

  const displayModal = ()=>{
    displayAnnouncementModal(!announcementModal);
  }


  return (
    <div className="home">
      <Navbar />
      <section className="container section_a">
        <div className="main_dashboard grid">
          {dashboardBoardItems.map((item) => (
            <DashboardCard
              key={item.iD}
              iD={item.iD}
              icon={item.icon}
              title={item.title}
              path={item.path || "#"}
              displayModal={displayModal}
            />
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

      {/* MODAL */}
      {/* custom-modal */}
      <div className={`custom-modal ${announcementModal ? 'active':''}`}>
        <div className="container">
          <div className="modal-body">
            <p className="close-button" onClick={displayModal} >&times;</p>
            <div className="title">NO ANNOUNCEMENTS</div>
            <p>
              1.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              libero explicabo omnis eos debitis, amet architecto corporis
              necessitatibus aliquid quidem.
            </p>
            <p>
              2.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              libero explicabo omnis eos debitis, amet architecto corporis
              necessitatibus aliquid quidem.
            </p>
            <p>
              3.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              libero explicabo omnis eos debitis, amet architecto corporis
              necessitatibus aliquid quidem.
            </p>
            <p>
              4.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              libero explicabo omnis eos debitis, amet architecto corporis
              necessitatibus aliquid quidem.
            </p>
            <p>
              5.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              libero explicabo omnis eos debitis, amet architecto corporis
              necessitatibus aliquid quidem.
            </p>
            <p>
              6.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              libero explicabo omnis eos debitis, amet architecto corporis
              necessitatibus aliquid quidem.
            </p>
            <p>
              7.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              libero explicabo omnis eos debitis, amet architecto corporis
              necessitatibus aliquid quidem.
            </p>
            <p>
              8.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              libero explicabo omnis eos debitis, amet architecto corporis
              necessitatibus aliquid quidem.
            </p>
          </div>
        </div>
      </div>

      {/* MODAL */}

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
    </div>
  );
};
export default Home;
