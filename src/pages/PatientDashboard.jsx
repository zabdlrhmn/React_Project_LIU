import { useAuth } from '../context/AuthContext';
import { mockPatientUpdates } from '../data/mockData';

export default function PatientDashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="mb-4">Patient Dashboard</h1>
      <h4>Welcome, {user ? user.email : 'Patient'}!</h4>
      <p>This is your personal space to view updates from your doctor and manage your health information.</p>

      <hr className="my-4" />

      <h3>Updates from Your Doctor</h3>
      {mockPatientUpdates.length > 0 ? (
        mockPatientUpdates.map(update => (
          <div className="card mb-3" key={update.id}>
            <div className="card-header d-flex justify-content-between">
              <strong>{update.title}</strong>
              <small>From: {update.doctor}</small>
            </div>
            <div className="card-body">
              <p className="card-text">{update.content}</p>
            </div>
            <div className="card-footer text-muted text-end">
              <small>Date: {update.date}</small>
            </div>
          </div>
        ))
      ) : (
        <p>You have no new updates from your doctor.</p>
      )}
    </div>
  );
}
