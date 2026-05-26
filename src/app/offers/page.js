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
      <section className="offers-hero">
        <div className="about-overlay">
          <h1>Offers</h1>
          <p>Dignissim sed suscipit mattis neque, in nibh blandit at nec in urna tristique ornare aliquam orci augue vestibulum dignissim vel aliquam.</p>
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
    <section className="deals-section">
      <div className="deals-top">
        <h2>BEST DEALS!</h2>

        <button className="view-btn">
          VIEW ALL
        </button>
      </div>

      <div className="deal-card">

        <div className="deal-image">
           <div className="yellow-shape"></div>
           <div class="pink-shape"></div>
          <img src="/deal-pizza.jpg" alt="Pizza Deal" />

          <div className="discount-badge">
            <span>SAVE</span>
            <strong>35%</strong>
          </div>
        </div>

        <div className="deal-content">

          <p className="deal-tag">
            DAILY DEAL!
          </p>

          <h3>
            BIG MEAT MONSTA
          </h3>

          <p className="deal-desc">
            Nunc tellus pellentesque ut est fames vitae dui posuere.
          </p>

          <div className="deal-price">
            $18
          </div>

        </div>
      </div>
    </section>
        <section className="promo-section">

      {/* LEFT CARD */}

      <div className="promo-card left-card">

        <img
          src="/promo-left.jpg"
          alt="pizza"
          className="promo-bg"
        />

        <div className="left-yellow-shape"></div>

        <div className="left-red-shape">
          <div className="left-content">
            <h3>
              COMBO <br />
              DOUBLE BOX
            </h3>

            <h2>$24</h2>
          </div>
        </div>
      </div>

      {/* RIGHT CARD */}

      <div className="promo-card right-card">

        <img
          src="/promo-right.jpg"
          alt="pizza"
          className="promo-bg"
        />

        <div className="save-circle">
          <span>SAVE</span>
          <strong>30%</strong>
        </div>

        <div className="right-red-shape">

          <div className="right-content">

            <h3>
              ITALIAN <br />
              STALLION
            </h3>

            <p>STARTING AT</p>

            <h2>$16</h2>

          </div>
        </div>
      </div>
    </section>
        <section className="promo-section">

      {/* LEFT CARD */}

      <div className="promo-card left-card">

        <img
          src="/promo-left.jpg"
          alt="pizza"
          className="promo-bg"
        />

        <div className="left-yellow-shape"></div>

        <div className="left-red-shape">
          <div className="left-content">
            <h3>
              2-In-1 <br />
              Combo Deal
            </h3>

            <h2>$24</h2>
          </div>
        </div>
      </div>

      {/* RIGHT CARD */}

      <div className="promo-card right-card">

        <img
          src="/promo-right.jpg"
          alt="pizza"
          className="promo-bg"
        />

        <div className="save-circle">
          <span>SAVE</span>
          <strong>30%</strong>
        </div>

        <div className="right-red-shape">

          <div className="right-content">

            <h3>
              Veggie <br />
              Delight
            </h3>

            <p>STARTING AT</p>

            <h2>$16</h2>

          </div>
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