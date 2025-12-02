
class footerComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {

    this.innerHTML = `
         <footer class="footer">
        <div class="container px-0">
            <div class="footer-container">
                <div class="footer-logo-section">
                    <img src="assets/logo.png" alt="Wings Vacation Logo" class="logo">&nbsp;&nbsp;<img
                        src="assets/images/footer/Wings Vacation.png" alt="">
                    <p>Wings Vacation Creates The Perfect Setting For Memorable Journeys, Enriching Your Travel
                        Experience While Inspiring Both Relaxation And Adventure.</p>
                </div>

                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><img src="assets/images/footer/rarrow.png" alt="">&nbsp;<a href="#">Home</a></li>
                        <li><img src="assets/images/footer/rarrow.png" alt="">&nbsp;<a href="#">Packages</a></li>
                        <li><img src="assets/images/footer/rarrow.png" alt="">&nbsp;<a href="#">Services</a></li>
                        <li><img src="assets/images/footer/rarrow.png" alt="">&nbsp;<a href="#">About Us</a></li>
                        <li><img src="assets/images/footer/rarrow.png" alt="">&nbsp;<a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div class="footer-contact">
                    <h4>Contact Us</h4>
                    <p><img src="assets/images/footer/mynaui_location.png" alt="">
                        <a> Wings Vacation
                            34A, Dr. Narayanasamy Street, Appusamy Layout,
                            Red Fields, Ramanathapuram, <br> Coimbatore - 641045</a>
                    </p>
                    <p><img src="assets/images/footer/mail.png" alt=""> <a
                            href="mailto:letsfly@wingsvacation.com">letsfly@wingsvacation.com</a></p>
                    <p><img src="assets/images/footer/call.png" alt=""> <a href="tel:+919500877244">+91 95008
                            77244</a></p>
                </div>

                <div class="footer-social d-flex align-items-start justify-content-end">
                    <div>
                        <h4>Follow Us on</h4>
                        <div class="social-icons">
                            <a href="#"><img src="assets/images/footer/youtube.png" alt="YouTube"></a>
                            <a href="#"><img src="assets/images/footer/insta.png" alt="Instagram"></a>
                            <a href="#"><img src="assets/images/footer/fb.png" alt="Facebook"></a>
                            <a href="#"><img src="assets/images/footer/twitter.png" alt="Twitter"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </footer>
    <div class="footer-bottom">
        <div class="container">
            <div class=" copyright d-flex align-items-center justify-content-between w-100">
                <p class="mb-0 ">© Copyright 2024, All Rights Reserved by Vista Academy</p>
                <div class="">
                    <a href="#">Term’s & Conditions</a> |
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </div>
    </div>
          `;
  }
}

customElements.define("footer-component", footerComponent); 
