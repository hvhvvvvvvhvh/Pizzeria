

export default function FooterSection() {
  return (
    <footer className="footer-section">

      <div className="footer-container">

        {/* Left Column */}

        <div className="footer-column footer-brand">

          <img src="/pizzeria-logo-red.svg"/>

          <p>
            Vivamus convallis fermen sollicitudin et,
            vitae elit in vel ultrices sed in urna ipsum
            ullamcorper auctor.
          </p>

          <div className="footer-socials">

            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>

            <a href="#">
              <i className="fab fa-facebook-square"></i>
            </a>

            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>

          </div>

        </div>

        {/* About */}

        <div className="footer-column">

          <h3>ABOUT US</h3>

          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Our Locations</a></li>
            <li><a href="#">Current Deals</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>

        </div>

        {/* Menu */}

        <div className="footer-column">

          <h3>OUR MENU</h3>

          <ul>
            <li><a href="#">Pizza</a></li>
            <li><a href="#">Pasta</a></li>
            <li><a href="#">Dessert</a></li>
            <li><a href="#">Take & Bake</a></li>
          </ul>

        </div>

        {/* Locations */}

        <div className="footer-column">

          <h3>OUR LOCATION</h3>

          <ul>
            <li><a href="#">The Pizzeria Rome</a></li>
            <li><a href="#">The Pizzeria Madrid</a></li>
            <li><a href="#">The Pizzeria Paris</a></li>
            <li><a href="#">The Pizzeria Miami</a></li>
          </ul>

        </div>

      </div>

      {/* Bottom */}

      <div className="footer-bottom">

        <p>Copyright © 2026 The Pizzeria</p>

        <p>Powered by The Pizzeria</p>

      </div>

    </footer>
  );
}