import React from 'react';
import './ChangePassword.css';
import axios from 'axios';

const ChangePassword = ({
  isVisible,
  onClose,
  onSubmit, // Add onSubmit prop
  currentPassword,
  newPassword,
  confirmNewPassword,
  setCurrentPassword,
  setNewPassword,
  setConfirmNewPassword,
  passwordChangeError,
  passwordChangeSuccess
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/FYP/api/change-password', {
        currentPassword,
        newPassword
      });
      console.log(response.data);
      // Assuming the backend returns a success message
      passwordChangeSuccess(response.data.message);
    } catch (error) {
      console.error('Error changing password:', error.response ? error.response.data : error.message);
      // Assuming the backend returns an error message
      passwordChangeError(error.response ? error.response.data.error : 'Failed to change password');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Change Password</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Current Password:</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>New Password:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Confirm New Password:</label>
            <input
              type="password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
            />
          </div>
          <button id="changebtn" type="submit">Change Password</button>
          {passwordChangeError && <p className="error">{passwordChangeError}</p>}
          {passwordChangeSuccess && <p className="success">{passwordChangeSuccess}</p>}
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
