import React, { useState } from 'react';
import './ProfileManager.css'; // Import du fichier CSS pour le style

function ProfileManager() {
  const [profiles, setProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    position: '',
    department: '',
    salary: ''
  });
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [displayMode, setDisplayMode] = useState('form');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };

  const addProfile = () => {
    if (newProfile.id && newProfile.firstName && newProfile.lastName && newProfile.email && newProfile.position && newProfile.department && newProfile.salary) {
      setProfiles([...profiles, newProfile]);
      setNewProfile({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        position: '',
        department: '',
        salary: ''
      });
    } else {
      alert('Please fill in all fields.');
    }
  };

  const deleteProfile = (profileId) => {
    const updatedProfiles = profiles.filter(profile => profile.id !== profileId);
    setProfiles(updatedProfiles);
  };

  const openPopup = (profile) => {
    setSelectedProfile(profile);
    setShowPopup(true);
  };

  return (
    <div className="profile-manager">
      <div className="toggle-buttons">
        <button onClick={() => setDisplayMode('form')}>Create Profile</button>
        <button onClick={() => setDisplayMode('list')}>View Profiles</button>
      </div>

      {displayMode === 'form' ? (
        <div className="profile-form">
          <h2>Create Profile</h2>
          <div>
            <label>ID:</label>
            <input type="text" name="id" value={newProfile.id} onChange={handleInputChange} />
          </div>
          <div>
            <label>First Name:</label>
            <input type="text" name="firstName" value={newProfile.firstName} onChange={handleInputChange} />
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" name="lastName" value={newProfile.lastName} onChange={handleInputChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={newProfile.email} onChange={handleInputChange} />
          </div>
          <div>
            <label>Position:</label>
            <input type="text" name="position" value={newProfile.position} onChange={handleInputChange} />
          </div>
          <div>
            <label>Department:</label>
            <input type="text" name="department" value={newProfile.department} onChange={handleInputChange} />
          </div>
          <div>
            <label>Salary:</label>
            <input type="number" name="salary" value={newProfile.salary} onChange={handleInputChange} />
          </div>
          <button onClick={addProfile}>Add Profile</button>
        </div>
      ) : (
        <div className="profile-list">
          <h2>Profiles</h2>
          <ul>
            {profiles.map(profile => (
              <li key={profile.id} onClick={() => openPopup(profile)}>
                <div>
                  <span>{profile.firstName} {profile.lastName} - {profile.position}</span>
                  <button onClick={() => deleteProfile(profile.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showPopup && (
        <div className="popup">
          <h2>Profile Details</h2>
          <p>ID: {selectedProfile.id}</p>
          <p>First Name: {selectedProfile.firstName}</p>
          <p>Last Name: {selectedProfile.lastName}</p>
          <p>Email: {selectedProfile.email}</p>
          <p>Position: {selectedProfile.position}</p>
          <p>Department: {selectedProfile.department}</p>
          <p>Salary: {selectedProfile.salary}</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default ProfileManager;
