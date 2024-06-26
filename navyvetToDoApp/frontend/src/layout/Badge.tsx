import React from 'react';

interface BadgeProps {
  number: number;
}

const Badge: React.FC<BadgeProps> = ({ number }) => {
  return (
    <div className="text">
      <div className="number-notification-badge">
        <div className="div">{number}</div>
      </div>
    </div>
  );
};

export default Badge;