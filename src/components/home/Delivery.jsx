export default function Delivery() {
  return (
    <section className="delivery">
      <div className="delivery-overlay">

        {/* Left Content */}
        <div className="delivery-left">
          <h2>
            BRINGING <br /> HAPPINESS <br /> TO YOU
          </h2>
          <p>
            Tellus id nisl quis at sollicitudin nisl nisi tincidunt purus.
          </p>
        </div>

        {/* Right Cards */}
        <div className="delivery-right">

          <div className="delivery-card">
            <div className="icon"><i className="fas fa-mobile-alt"></i></div>
            <h3>ONLINE DELIVERY</h3>
            <span>ORDER ONLINE →</span>
          </div>

          <div className="delivery-card">
            <div className="icon"><i className="fas fa-box"></i></div>
            <h3>CLICK & COLLECT</h3>
            <span>TAKEOUT ORDER →</span>
          </div>

          <div className="delivery-card">
            <div className="icon"><i className="fas fa-pizza-slice"></i></div>
            <h3>RESTAURANT DINING</h3>
            <span>BOOK A TABLE →</span>
          </div>

        </div>

      </div>
    </section>
  );
}