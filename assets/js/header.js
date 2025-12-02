
 
class headerComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {

    this.innerHTML = `
            <header class="site-header">
            <div class="container navbar">
                <a class="brand" href="#">
                    <img src="assets/logo.png" alt="Wings Vacations logo" />
                </a>

                <!-- Hamburger Menu Button -->
                <button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div class="menu">
                    <nav class="nav-pills">
  <a href="index.html">Home</a>
  <div class="dropdown">
    <a href="tourPackages.html" class="active">Packages</a>
    <div class="mega-menu">
      <div class="column">
        <h4>Africa</h4>
        <ul>
          <li>Kenya</li>
          <li>Moraco</li>
          <li>South Africa</li>
          <li>Zimbabwe</li>
          <li>Seychelles</li>
          <li>Tanzania</li>
        </ul>
        <h4>America</h4>
        <ul>
          <li>Kenya</li>
          <li>Moraco</li>
          <li>South Africa</li>
          <li>Tanzania</li>
        </ul>
      </div>
      <div class="column">
        <h4>Asia</h4>
        <ul>
          <li class="active">Cambodia</li>
          <li>Hong Kong</li>
          <li>Japan</li>
          <li>Indonesia</li>
          <li>Kazakhstan</li>
          <li>Russia</li>
          <li>South Korea</li>
          <li>Malaysia</li>
          <li>Singapore</li>
          <li>Philippines</li>
        </ul>
      </div>
      <div class="column">
        <h4>Europe</h4>
        <ul>
          <li>Bali</li>
          <li>Hong Kong</li>
          <li>Japan</li>
          <li>Indonesia</li>
          <li>Kazakhstan</li>
          <li>Russia</li>
          <li>South Korea</li>
          <li>Malaysia</li>
          <li>Singapore</li>
          <li>Philippines</li>
        </ul>
      </div>
      <div class="column">
        <h4>Island</h4>
        <ul>
          <li>Kenya</li>
          <li>Moraco</li>
          <li>South Africa</li>
          <li>Zimbabwe</li>
          <li>Seychelles</li>
          <li>Tanzania</li>
        </ul>
        <h4>Middle East</h4>
        <ul>
          <li>Kenya</li>
          <li>Moraco</li>
          <li>South Africa</li>
          <li>Tanzania</li>
        </ul>
      </div>
      <div class="column">
        <h4>Honeymoon</h4>
        <ul>
          <li>Bali</li>
          <li>Hong Kong</li>
          <li>Japan</li>
          <li>Indonesia</li>
          <li>Kazakhstan</li>
          <li>Russia</li>
          <li>South Korea</li>
          <li>Malaysia</li>
          <li>Singapore</li>
          <li>Philippines</li>
        </ul>
        <a href="tourPackages.html" class="all-packages-btn">View All Packages</a>
      </div>
    </div>
  </div>
  <a href="services.html">Services</a>
  <a href="#">About us</a>
  <a href="contactUs.html">Contact us</a>
</nav>


                    <div class="login">
                        <a href="#">
                           <img src="assets/fi_597177.png" alt="">
                            98764543456
                        </a>
                    </div>
                </div>
            </div>
        </header>
          `;
  }
}

customElements.define("header-component", headerComponent); 
