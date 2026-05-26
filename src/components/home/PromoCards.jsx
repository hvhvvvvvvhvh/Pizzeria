export default function PromoCards() {
  return (
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
  );
}