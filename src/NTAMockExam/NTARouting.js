import React, { useState } from 'react';
import Login from './Login';
import Instructions from './Instructions';
import Welcome from './Welcome';
import ExamBoard from './ExamBoard';



export const NTARouting=()=>{
  const [currentScreen, setCurrentScreen] = useState(useScreen.Login);  

  const nextScreen = React.useCallback((screen) => {
    // Handle successful login here
    setCurrentScreen(screen);
  },[]);

  switch (currentScreen) {
    case useScreen.Login:
      return <Login nextScreen={nextScreen} />;
      case useScreen.Welcome:
      return <Welcome nextScreen={nextScreen}  />;
    case useScreen.Instruction:
      return <Instructions nextScreen={nextScreen} />;
    case useScreen.ExamBoard:
      return <ExamBoard nextScreen={nextScreen} />;
    default:
      return <div style={{color:"Black"}}>Thanks You</div>;
  }
}

export const useScreen = {
  Login: 'Login',
  Welcome:"Welcome",
  Instruction: 'Instruction',
  ExamBoard: 'ExamBoard',
  Logout: 'Logout',
};