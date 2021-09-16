import './Profile.css'

function Profile() {
  return (
    <div className="Profile">
        <div className="container">
            <div class="card">
                <h4>Jade</h4>
                <p class="title">CEO</p>
                <p>United Kingdom</p>
                <p><button><a href="mailto:jade@hertechconnect.com">Contact</a></button></p>
            </div>
            <div class="card">
                <h4>Kelly</h4>
                <p class="title">COO</p>
                <p>United States</p>
                <p><button><a href="mailto:kelly@hertechconnect.com">Contact</a></button></p>
            </div>
            <div class="card">
                <h4>Roshmi</h4>
                <p class="title">CTO</p>
                <p>United States</p>
                <p><button><a href="mailto:rosmi@hertechconnect.com">Contact</a></button></p>
            </div>
            <div class="card">
                <h4>Phoebe</h4>
                <p class="title">Head of Product</p>
                <p>United Kingdom</p>
                <p><button><a href="mailto:phoebe@hertechconnect.com">Contact</a></button></p>
            </div>
            <div class="card">
                <h4>Vivian</h4>
                <p class="title">Head of Business</p>
                <p>United Kingdom</p>
                <p><button><a href="mailto:vivian@hertechconnect.com">Contact</a></button></p>
            </div>
        </div>
    </div>
  );
}

export default Profile;