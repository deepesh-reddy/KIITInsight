import React from 'react';
import "./Developers.css";
import { developerData } from '../Data/Data';
import Nav from '../Navbar/Nav';

const DeveloperCard = ({ developer }) => {
  return (
    <div className="wrap">
      <Nav/>
      <div className="img-area">
        <div className="inner-area">
          <img src={developer.imageUrl} alt={developer.name}/>
        </div>
      </div>
      <div className="name">{developer.name}</div>
      <div className="about">{developer.role}</div>
      <div className="social-icons">
        {developer.socialLinks.map((link, index) => (
          <a key={index} href={link.url} className={link.platform}>
            <i className={`bi bi-${link.icon}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
}

const Developers = () => {
  return (
    <div className="boxx">
      {developerData.map((developer, index) => (
        <DeveloperCard key={index} developer={developer} />
      ))}
    </div>
  );
}

export default Developers;