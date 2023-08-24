import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function HomePage() {
  return (
    <main>
      <Header />
      <section className="section-stories">
        <div className="link-to">
          <Link className="link" to="/questions">
            To Questions
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default HomePage;
