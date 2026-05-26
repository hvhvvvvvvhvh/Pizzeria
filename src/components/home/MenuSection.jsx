export default function MenuSection() {
  return (
    <section className="menu-section">

      <div className="menu-top">
        <span>CHOOSE YOUR FLAVOR</span>

        <h2>FOOD THAT BRINGS PEOPLE TOGETHER!</h2>

        <p>
          Cursus ultricies in maecenas pulvinar ultrices integer quam amet,
          semper dictumst sit interdum ut venenatis pellentesque nunc.
        </p>

        <button>VIEW ALL MENU</button>
      </div>

      <div className="menu-items">

        <div className="menu-card">
          <img src="/PizeriaPasta.png"/>
          <h3>PASTA</h3>
        </div>

        <div className="menu-card"style={{ paddingTop: '80px'}}>
          <img src="/menu-pizzeria.png"/>
          <h3>PIZZA</h3>
        </div>

        <div className="menu-card">
          <img src="/dessert.png"/>
          <h3>DESSERT</h3>
        </div>

      </div>

    </section>
  );
}