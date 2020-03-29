import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [teamMembers, setTeamMembers] = useState([{
    name: "",
    email: "",
    role: ""
  }]);



console.log(teamMembers);
  return (
    <div className="App">
      <Form green={teamMembers} blue={setTeamMembers}/> 
    </div>
  );
}

export default App;

