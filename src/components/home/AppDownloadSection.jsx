export default function AppDownloadSection() {
  return (
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
  );
}