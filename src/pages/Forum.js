import { useState } from 'react';

export default function Forum() {
  const [topics, setTopics] = useState([]); // Initialized with empty array
  const [newTopic, setNewTopic] = useState('');

  const handleNewTopicChange = (e) => {
    setNewTopic(e.target.value);
  };

  const handleNewTopicSubmit = (e) => {
    e.preventDefault();
    if (!newTopic.trim()) return;

    const topic = {
      id: topics.length + 1,
      title: newTopic,
      author: 'Demo User',
      role: 'patient',
      date: new Date().toISOString().split('T')[0],
      replies: 0,
    };
    setTopics([topic, ...topics]);
    setNewTopic('');
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Discussion Forum</h1>
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#new-topic-form" aria-expanded="false" aria-controls="new-topic-form">
            Start a New Discussion
          </button>
      </div>
      
        <div className="collapse mb-4" id="new-topic-form">
          <div className="card card-body">
            <form onSubmit={handleNewTopicSubmit}>
              <div className="mb-3">
                <label htmlFor="new-topic" className="form-label">Your Discussion Topic</label>
                <input
                  type="text"
                  className="form-control"
                  id="new-topic"
                  value={newTopic}
                  onChange={handleNewTopicChange}
                  placeholder="e.g., Best practices for a healthy diet"
                  required
                />
              </div>
              <button type="submit" className="btn btn-success">Post Topic</button>
            </form>
          </div>
        </div>
      )}

      <ul className="list-group">
        <li key={1} className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">General questions about the flu vaccine</h5>
            <small>Replies: 5</small>
          </div>
          <p className="mb-1">
            <small>
              By: Jane Smith 
              <span className="badge ms-2 bg-secondary">patient</span>
            </small>
          </p>
          <small>Date: 2025-11-19</small>
        </li>
        <li key={2} className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Tips for managing anxiety and stress</h5>
            <small>Replies: 12</small>
          </div>
          <p className="mb-1">
            <small>
              By: Dr. Davis 
              <span className="badge ms-2 bg-primary">doctor</span>
            </small>
          </p>
          <small>Date: 2025-11-15</small>
        </li>
      </ul>
    </div>
  );
}