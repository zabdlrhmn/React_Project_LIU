import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { mockForumTopics } from '../data/mockData';

export default function Forum() {
  const { user } = useAuth();
  const [topics, setTopics] = useState(mockForumTopics);
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
      author: user.email,
      role: user.role,
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
        {user && (
          <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#new-topic-form" aria-expanded="false" aria-controls="new-topic-form">
            Start a New Discussion
          </button>
        )}
      </div>
      
      {user && (
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
        {topics.map(topic => (
          <li key={topic.id} className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{topic.title}</h5>
              <small>Replies: {topic.replies}</small>
            </div>
            <p className="mb-1">
              <small>
                By: {topic.author} 
                <span className={`badge ms-2 ${topic.role === 'doctor' ? 'bg-primary' : 'bg-secondary'}`}>{topic.role}</span>
              </small>
            </p>
            <small>Date: {topic.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
