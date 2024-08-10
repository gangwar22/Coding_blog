import React from 'react'

function Contacts() {
    return(
        <>
            <div className="container my-4 d-flex flex-column justify-content-center align-items-center">
                <br />
                <br />
                <br />
                <h2>Connect with Us</h2>
                <br />
                <br />
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Mobile Number</label>
                        <input type="text" className="form-control" id="inputPassword4" />
                        <br />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Home Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Enter Your Home Address" />
                        <br />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">Current Address</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Enter Your Current Address" />
                        <br />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">State</label>
                        <select id="inputState" className="form-select">
                            <option selected>Select State</option>
                            <option>Andhra Pradesh</option>
                            <option>Assam</option>
                            <option>Bihar</option>
                            <option>Chhattisgarh</option>
                            <option>Goa</option>
                            <option>Gujarat</option>
                            <option>Haryana</option>
                            <option>Himachal Pradesh</option>
                            <option>Jharkhand</option>
                            <option>Karnataka</option>
                            <option>Kerala</option>
                            <option>Madhya Pradesh</option>
                            <option>Maharashtra</option>
                            <option>Manipur</option>
                            <option>Meghalaya</option>
                            <option>Mizoram</option>
                            <option>Nagaland</option>
                            <option>Odisha</option>
                            <option>Punjab</option>
                            <option>Rajasthan</option>
                            <option>Sikkim</option>
                            <option>Tamil Nadu</option>
                            <option>Telangana</option>
                            <option>Tripura</option>
                            <option>Uttar Pradesh</option>
                            <option>Uttarakhand</option>
                            <option>West Bengal</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                        <br />
                    </div>

                    <div className="form-group row mb-3">
                        <div className="col-sm-2">Are you a Member?</div>
                        <div className="col-sm-10">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="membership" id="gridRadio1" value="yes" />
                                <label className="form-check-label" htmlFor="gridRadio1">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="membership" id="gridRadio2" value="no" />
                                <label className="form-check-label" htmlFor="gridRadio2">No</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group row mb-3">
                        <div className="col-sm-2">Are you a Professor?</div>
                        <div className="col-sm-10">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="professor" id="gridRadio3" value="yes" />
                                <label className="form-check-label" htmlFor="gridRadio3">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="professor" id="gridRadio4" value="no" />
                                <label className="form-check-label" htmlFor="gridRadio4">No</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group row mb-3">
                        <div className="col-sm-2">Are you a Coder?</div>
                        <div className="col-sm-10">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="coder" id="gridRadio5" value="yes" />
                                <label className="form-check-label" htmlFor="gridRadio5">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="coder" id="gridRadio6" value="no" />
                                <label className="form-check-label" htmlFor="gridRadio6">No</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1" className="mb-2">Tell me about yourself!</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                    </div>
                    <div className="form-group">
                        <br />
                        <label htmlFor="exampleFormControlTextarea2" className="mb-2">Elaborate your Concern</label>
                        <textarea className="form-control" id="exampleFormControlTextarea2" rows="4"></textarea>
                    </div>

                    <div className="col-12">
                        <br />
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">Check me out</label>
                        </div>
                        <br />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Contacts;
