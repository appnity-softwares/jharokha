import React, { useState } from 'react';
import './Nav.css'; // optional for custom styles

const ModalMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="nav">
    <div className='container'>
        <div className='logo'>Jharokha</div>
      {/* Menu Bar Button */}
      <button onClick={openModal} className="menu-button">
        ☰ Menu
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              ✕ Close
            </button>
            <ul className="menu-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#service">Service</a></li>
              <li><a href="#feature">Feature</a></li>
              <li><a href="#project">Project</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
        </div>
      )}
    </div>
    </div>
  
  );
};

export default ModalMenu;
