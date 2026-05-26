export default function ReviewsBar() {
  return (
    <section className="reviews-bar">

      {/* ITEM 1 */}
      <div className="review-item">

        <div className="review-icon">
          <i className="fab fa-app-store"></i>
        </div>

        <div className="review-content">
          <div className="review-top">
            <h2>4.6</h2>

            <div className="review-stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>

          <p>1234 reviews</p>
        </div>

      </div>

      {/* ITEM 2 */}
      <div className="review-item">

        <div className="review-icon">
          <i className="fa-brands fa-google-play"></i>
        </div>

        <div className="review-content">
          <div className="review-top">
            <h2>4.8</h2>

            <div className="review-stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>

          <p>2345 reviews</p>
        </div>

      </div>

      {/* ITEM 3 */}
      <div className="review-item">

        <div className="review-icon">
          <i className="fas fa-utensil-spoon"></i>
        </div>

        <div className="review-content">
          <div className="review-top">
            <h2>4.7</h2>

            <div className="review-stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>

          <p>678 reviews</p>
        </div>

      </div>

    </section>
  );
}