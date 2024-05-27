import React from 'react';
import './ChangePassword.css';

const ChangePassword = ({
    isVisible,
    onClose,
    onSubmit,
    currentPassword,
    newPassword,
    confirmNewPassword,
    setCurrentPassword,
    setNewPassword,
    setConfirmNewPassword,
    passwordChangeError,
    passwordChangeSuccess
}) => {
    if (!isVisible) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>Change Password</h2>
                <form onSubmit={onSubmit}>
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
                    <button id ="changebtn" type="submit">Change Password</button>
                    {passwordChangeError && <p className="error">{passwordChangeError}</p>}
                    {passwordChangeSuccess && <p className="success">{passwordChangeSuccess}</p>}
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;
