import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

const CancelButton = ({ onClick }) => {
  return (
    <RiCloseCircleLine
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    />
  );
};

export default CancelButton;
