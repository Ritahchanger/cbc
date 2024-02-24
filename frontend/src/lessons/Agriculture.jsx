import Navbar from "../components/Navbar/Navbar";
import Subjects from "../SchoolResources/Subjects";
import Footer from "../components/Footer/Footer";
import Lesson from "../components/Lesson";
const Agriculture = () => {
  return (
    <div>
      <Navbar />
      <section className="container lesson_study">
        <p className="lession" style={{ textAlign:'center',fontSize:'3rem' }} >AGRICULTURE</p>
        <Lesson/>
      </section>
      <Footer />
    </div>
  );
};
export default Agriculture;
