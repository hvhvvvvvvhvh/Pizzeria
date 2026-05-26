import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export default function OurMenuPage() {
  const pastaItems = [
    {
      image: "/pasta-img-1.jpg",
      title: "SPAGHETTI BOLOGNESE",
      desc: "With Chianti-braised meat sauce and fresh basil.",
    },
    {
      image: "/pasta-img.jpg",
      title: "CAPRESE PASTA",
      desc: "Roma tomatoes, fresh basil, Sicilian extra-virgin olive oil, pine nuts, and fresh mozzarella.",
    },
    {
      image: "/pasta-img-3.jpg",
      title: "FETTUCCINE ALFREDO",
      desc: "Freshly prepared fettuccine pasta swirled in homemade cream sauce.",
    },
    {
      image: "/pasta-img-4.jpg",
      title: "TRUFFLE TORTELLONI",
      desc: "Cheese tortelloni with truffle mushroom sauce, topped with fresh arugula.",
    },
  ];

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="about-overlay">
          <h1>Contact</h1>
        </div>

        <div className="curve">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              className="elementor-shape-fill"
              d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"
            ></path>
          </svg>
        </div>
      </section>
    <section className="contact-section">
      <div className="contact-wrapper">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <div className="contact-block">
            <h2>CORPORATE OFFICE</h2>

            <div className="contact-item">
              {/* <FaMapMarkerAlt className="icon" /> */}
              <p>
                Via di S. Vincenzo, 12/34A, 00123
                <br />
                Roma RM, Italy.
              </p>
            </div>

            <div className="contact-item">
              {/* <FaPhoneAlt className="icon" /> */}
              <p>+39 123 456 7890</p>
            </div>

            <div className="contact-item">
              {/* <FaEnvelope className="icon" /> */}
              <p>mail@example.com</p>
            </div>
          </div>

          <div className="contact-block">
            <h2>PRESS INQUIRIES</h2>

            <h3>MATTEO DAMIAN</h3>

            <div className="contact-item">
              {/* <FaPhoneAlt className="icon" /> */}
              <p>+39 123 456 7890</p>
            </div>

            <div className="contact-item">
              {/* <FaEnvelope className="icon" /> */}
              <p>mail@example.com</p>
            </div>
          </div>

          <div className="contact-block">
            <h2>STAY CONNECTED</h2>

            <div className="social-icons">
      
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">

          <h2>WE LOVE TO HEAR FROM YOU</h2>

          <p className="contact-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut elit tellus, luctus nec ullamcorper mattis,
            pulvinar dapibus leo.
          </p>

          <form className="contact-form">

            <div className="form-row">
              <div className="form-group">
                <label>First Name *</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Last Name *</label>
                <input type="text" />
              </div>
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input type="email" />
            </div>

            <div className="form-group">
              <label>Phone Number *</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Subject *</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Select Location *</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Comment or Message</label>
              <textarea rows="6"></textarea>
            </div>

            <button type="submit" className="submit-btn">
              SUBMIT
            </button>

          </form>
        </div>
      </div>
    </section>

    <section className="locations-section">

      {/* TOP CONTENT */}

      <div className="locations-header">

        <p className="location-subtitle">
          OUR LOCATION
        </p>

        <h2>
          FIND THE PIZZERIA NEAR YOU
        </h2>

        <p className="location-desc">
          Cursus ultricies in maecenas pulvinar ultrices integer quam amet,
          semper dictumst sit interdum ut venenatis pellentesque.
        </p>

      </div>

      {/* LOCATION GRID */}

      <div className="locations-grid">

        {/* ITEM */}

        <div className="location-card">
          <h3>ROME</h3>

          <p>
            Via di S. Vincenzo, 12/34A, <br />
            00123 Roma RM, Italy. <br />
            +39 123 456 7890
          </p>
        </div>

        {/* ITEM */}

        <div className="location-card">
          <h3>FLORENCE</h3>

          <p>
            Viale Belfiore, 50, 50144 <br />
            Firenze FI, Italy. <br />
            +39 123 456 7890
          </p>
        </div>

        {/* ITEM */}

        <div className="location-card">
          <h3>BOLOGNA</h3>

          <p>
            Via delle Lame, 55, 40122 <br />
            Bologna BO, Italy. <br />
            +39 123 456 7890
          </p>
        </div>

        {/* ITEM */}

        <div className="location-card">
          <h3>VENICE</h3>

          <p>
            S. Marco, 615, 30124 Venezia <br />
            VE, Italy. <br />
            +39 123 456 7890
          </p>
        </div>

      </div>
    </section>
        <section className="franchise-section">
      <div className="franchise-container">

        {/* LEFT SIDE */}
        <div className="franchise-left">
          <span className="franchise-tag">
            JOIN THE TABLE
          </span>

          <h2>
            FRANCHISE <br />
            OPPORTUNITIES
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="franchise-right">
          <p>
            Fermentum non quis vitae viverra ipsum eget tincidunt
            consequat ac velit leo, rutrum tellus augue dolor leo
            massa augue rhoncus pellentesque pulvinar pellentesque
            potenti cras arcu praesent urna a, vitae mattis
            pellentesque rhoncus cursus enim ac eu justo.
          </p>

          <a href="#" className="franchise-btn">
            GET IN TOUCH
          </a>
        </div>

      </div>
    </section>
    <section className="app-download-section">

      <div className="app-download-container">

        {/* LEFT CONTENT */}
        <div className="app-left">

          <span className="app-tag">
            FREE DELIVERY!
          </span>

          <h2>
            DOWNLOAD THE APP NOW!
          </h2>

          <p>
            Malesuada dignissim non, aliquam id tincidunt amet
            in sed et gravida pulvinar ipsum mauris etiam mattis nisl.
          </p>

          <div className="app-buttons">

            <a href="#" className="store-btn">
              <i className="fa-brands fa-google-play"></i>
              GOOGLE PLAY
            </a>

            <a href="#" className="store-btn">
              <i className="fa-brands fa-app-store-ios"></i>
              APP STORE
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="app-right">
          <img
            src="/pizzeria-mobile-app-mockup.png"
            alt="Mobile App"
          />
        </div>

      </div>

    </section>
      <Footer />
    </>
  );
}