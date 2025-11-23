import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-light p-5 rounded-lg m-3 text-center">
        <h1 className="display-4">Welcome to Dr. Online</h1>
        <p className="lead">Your trusted platform for connecting doctors and patients.</p>
        <hr className="my-4" />
        <p>Join our community to manage your health, get updates from your doctor, and participate in discussions.</p>
        <Link className="btn btn-primary btn-lg" to="/register" role="button">Get Started</Link>
      </div>

      {/* Features Section */}
      <div className="row text-center m-3">
        <div className="col-lg-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Connect with Doctors</h5>
              <p className="card-text">Easily connect with your doctor and receive updates on your health and recent studies.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Discussion Forums</h5>
              <p className="card-text">Participate in discussions with doctors and other patients on various health topics.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Personalized Dashboard</h5>
              <p className="card-text">A personalized dashboard to track your health information and updates.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
