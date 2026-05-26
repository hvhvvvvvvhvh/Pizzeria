export default function Hero(){
return(
<section className="hero">
<div className="overlay">
<h1>AUTHENTIC ITALIAN PIZZERIA</h1>
<p>Et praesent nulla urna consequat dui arcu cursus diam fringilla libero risus, aliquam diam, aliquam ullamcorper urna pulvinar velit suspendisse aliquam lacus sollicitudin mauris.</p>
<div className="buttons">
<button className="primary">BOOK A TABLE</button>
<button className="secondary">TAKEAWAY</button>
</div>
</div>
<div className="curve"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
	<path class="elementor-shape-fill" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"></path>
</svg></div>
<img src="/pizza.png" className="pizza"/>
</section>
)}