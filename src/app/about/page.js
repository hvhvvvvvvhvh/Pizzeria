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
      <section className="about-hero">
        <div className="about-overlay">
          <h1>About</h1>
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


      {/* PASTA SECTION */}
      <section className="pasta-section">
        <div className="container">
          <div className="pasta-top">
            <h2>PASTA</h2>

            <p>
              Eros ornare nullam phasellus morbi mi rhoncus nunc neque risus
              mattis risus metus in suscipit scelerisque eu duis penatibus eros
              magna cursus elementum orci.
            </p>
          </div>

          <div className="pasta-grid">
            {pastaItems.map((item, index) => (
              <div className="pasta-card" key={index}>
                <div className="pasta-image">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="pasta-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
          <section className="">

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