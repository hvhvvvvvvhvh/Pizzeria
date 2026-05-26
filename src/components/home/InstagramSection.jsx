export default function InstagramSection() {
  return (
    <section className="instagram-section">

      {/* Background Image */}
      <div className="instagram-bg"></div>

      {/* Overlay Card */}
      <div className="instagram-card">

        <div className="instagram-icon">
          <i className="fa-brands fa-instagram"></i>
        </div>

        <div className="instagram-content">
          <h2>FOLLOW @THEPIZZERIA</h2>

          <p>
            Leo nulla cras augue eros, diam vivamus et lectus
            volutpat at facilisi tortor porta.
          </p>

          <a href="#" className="instagram-btn">
            <i className="fa-brands fa-instagram"></i>
            VISIT INSTAGRAM
          </a>
        </div>

      </div>

    </section>
  );
}