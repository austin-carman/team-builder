import React, { useState } from 'react'
import TeamMembers from './TeamMembers'
import Form from './Form'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

export default function App() {
  const [teamMembersList, setTeamMembersList] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    }
    if(!newMember.name || !newMember.email || !newMember.role) return
    setTeamMembersList([...teamMembersList, newMember])
    setFormValues(initialFormValues)
  }




  return (
    <div className="container">
      <h1>Team Members</h1>
      <TeamMembers values={formValues} update={updateForm} submit={submitForm} />
      {
        teamMembersList.map(member => {
          return (
            <Form key={member} details={member} />
          )
        })
      }
    </div>
  )
}
