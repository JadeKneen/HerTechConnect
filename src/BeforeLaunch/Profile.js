import './Profile.css'
import jade from "images/Jade.jpg";
import roshmi from "images/roshmi.jpg";
import kelly from "images/kelly.jpg";
import vivian from "images/Vivian.jpg";
import phoebe from "images/phoebe.jpg";



function Profile() {
  return (
    <div className="Profile">
        <div className="HTContainer">
            <div class="card">
                <h4><b>Jade</b></h4>
                <img src={jade}></img>
                <p class="HTtitle">Managing Director</p>
                <p>United Kingdom</p>
            </div>
            <div class="card">
                <h4><b>Kelly</b></h4>
                <img src={kelly}></img>
                <p class="HTtitle">Head of Partnerships</p>
                <p>United States</p>
            </div>
            <div class="card">
                <h4><b>Roshmi</b></h4>
                <img src={roshmi}></img>
                <p class="HTtitle">Head of Mentoring</p>
                <p>United States</p>
            </div>
            <div class="card">
                <h4><b>Phoebe</b></h4>
                <img src={phoebe}></img>
                <p class="HTtitle">Head of Product</p>
                <p>United Kingdom</p>
            </div>
            <div class="card">
                <h4><b>Vivian</b></h4>
                <img src={vivian}></img>
                <p class="HTtitle">Head of Business</p>
                <p>United Kingdom</p>
            </div>
        </div>
    </div>
  );
}

export default Profile;