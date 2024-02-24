import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Lesson from "../components/Lesson";
const Mathematics = () => {
  return (
    <div>
      <Navbar />
      <section className="container lesson_study">
        <p className="lession" style={{ textAlign:'center',fontSize:'3rem' }} >MATHEMATICS</p>
        <Lesson/>
      </section>
      <Footer />
    </div>
  );
};
export default Mathematics;
