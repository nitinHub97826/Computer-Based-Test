import React from 'react';
import './Style.scss'; // Import the CSS for styling
import { useScreen } from '../NTARouting';
import { currentUser } from '../sampleData';

const Welcome = (props) => {
    const userName = currentUser.name; // Example user name
    const userPhoto = currentUser.photo;// Example user photo URL

    const proceedToTest = () => {
        // Navigate to test page (use your routing logic here)
        console.log("Proceeding to test...");
          props.nextScreen(useScreen.Instruction);
    };

    return (
        <div className="welcome-page">
            <div className="user-info">
                <div className="user-photo">
                    <img src={userPhoto} alt="User" />
                </div>
                <div className="user-name">
                    <h3>{userName}</h3>
                </div>
            </div>

            <footer>
                <button className="proceed-btn" onClick={proceedToTest}>Proceed</button>
            </footer>
        </div>
    );
};

export default Welcome;
