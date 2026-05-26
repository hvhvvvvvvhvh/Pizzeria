export default function LocationsSection() {
  return (
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
  );
}