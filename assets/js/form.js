
class formComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {

    this.innerHTML = `
         <section class="contact-section" style="background-image: url('assets/images/form/782061_11292-NNA6UN-01\ 1.png');">
        <div class="container">
            <div class="row">
                <!-- Left Side Info -->
                <div class="col-md-5 contact-left">
                    <h6>CONTACT US</h6>
                    <h2>We’re Here to Help You<br>Travel Better</h2>
                    <div class="contact-card">
                        <div class="contact-item">
                            <img src="assets/images/form/Group 2251.png" alt="Phone">
                            <span>+91 9500 877244</span>
                        </div>
                        <div class="contact-item">
                            <img src="assets/images/form/Group 2253.png" alt="Email">
                            <span>letsfly@wingsvacation.com</span>
                        </div>
                        <div class="contact-item">
                            <img src="assets/images/form/Group 2252.png" alt="Location">
                            <span>Wings Vacation, 34A, Dr. Narayanasamy Street,<br>
                                Appusamy Layout, Red Fields,<br>
                                Ramanathapuram, Coimbatore - 641045</span>
                        </div>
                    </div>
                </div>

                <!-- Right Side Form -->
                <div class="col-md-7 contact-form">
                    <div class="form-card">
                        <h6 style="color: #333333;">Please fill the form below:</h6>
                        <form>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label>First Name</label>
                                    <input type="text" class="form-control" placeholder="Enter your first name">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label>Last Name</label>
                                    <input type="text" class="form-control" placeholder="Enter your last name">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label>Phone Number</label>
                                    <input type="text" class="form-control" placeholder="Enter Phone Number">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label>Email ID</label>
                                    <input type="email" class="form-control" placeholder="Enter Email ID">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label>City Of Residence</label>
                                    <input type="text" class="form-control" placeholder="Enter pin code">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label>Travel Destination</label>
                                    <input type="text" class="form-control" placeholder="Enter Country, City name">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label>Date Of Travel</label>
                                    <input type="text" class="form-control" placeholder="DD/MM/YYYY">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label>Number Of Guests</label>
                                    <input type="number" class="form-control" placeholder="Enter">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label>Vacation Type</label>
                                    <select class="form-control">
                                        <option>Select</option>
                                    </select>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <label>Any Activity To Include</label>
                                    <select class="form-control">
                                        <option>Select</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
          `;
  }
}

customElements.define("form-component", formComponent); 
