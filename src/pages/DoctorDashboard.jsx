import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { mockDoctorPatients } from '../data/mockData';

export default function DoctorDashboard() {
  const { user } = useAuth();
  const [update, setUpdate] = useState({ title: '', content: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdate(prev => ({ ...prev, [name]: value }));
  };

  const handlePostUpdate = (e) => {
    e.preventDefault();
    console.log('Posting new update:', update);
    alert('Update posted successfully! (This is a demo)');
    setUpdate({ title: '', content: '' });
  };

  return (
    <div>
      <h1 className="mb-4">Doctor Dashboard</h1>
      <h4>Welcome, {user ? user.email : 'Doctor'}!</h4>
      <p>From here, you can manage your patients and post new updates and studies.</p>

      <hr className="my-4" />

      <div className="row">
        <div className="col-md-6">
          <h3>Post a New Update</h3>
          <form onSubmit={handlePostUpdate}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={update.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">Content</label>
              <textarea
                className="form-control"
                id="content"
                name="content"
                rows="5"
                value={update.content}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Post Update</button>
          </form>
        </div>
        <div className="col-md-6">
          <h3>Your Patients</h3>
          <ul className="list-group">
            {mockDoctorPatients.map(patient => (
              <li key={patient.id} className="list-group-item d-flex justify-content-between align-items-center">
                {patient.name}
                <span className="badge bg-secondary rounded-pill">{patient.email}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
