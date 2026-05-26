
export default function DealsSection() {
  return (
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
  );
}