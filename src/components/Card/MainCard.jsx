import React from 'react';
import Card from './Card';
import facultyData from '../../faculty_data.json';

const MainCard = () => {
    return (
      <div className="faculty-card-grid">
        {facultyData.map((faculty, index) => (
          <Card
            key={index}
            name={faculty.name}
            email={faculty.email}
            imageUrl={faculty.imageUrl}
            details={faculty.details}  // This will be undefined if not in the JSON
            index={index} 
          />
        ))}
      </div>
    );
  };

export default MainCard;