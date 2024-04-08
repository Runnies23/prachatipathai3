import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function  Reporttest(){
   // Step 1: Setting up state for form inputs
  const [incidentLocation, setIncidentLocation] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // Add more state variables as needed for other form inputs

  // Step 2: Handle input changes
  const handleIncidentLocationChange = (event) => {
    setIncidentLocation(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  // Add more handlers for other inputs

  // Step 3: Submit the form
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const formData = {
      incidentLocation,
      firstName,
      lastName,
      // Include other form data here
    };

    // Step 4: Send data to the backend
    try {
      const response = await fetch('YOUR_BACKEND_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      // Handle success response
      console.log('Form data submitted successfully');
      // Optionally clear form fields here
    } catch (error) {
      console.error('Failed to submit form', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='pt-16 w-auto h-auto flex items-center flex-col gap-5'>
      {/* Form content with onChange handlers */}
      <input
        className='input bg-background w-1/2 focus:outline-none focus:border-black h-10 border-black border text-black'
        placeholder='กรอกที่เกิดเหตุ รหัสไปรษณีย์ ,เขต ,จังหวัด'
        value={incidentLocation}
        onChange={handleIncidentLocationChange}
      />
      {/* Add more inputs with their respective state and handlers */}
      <button type="submit">Submit</button>
    </form>
  );
};