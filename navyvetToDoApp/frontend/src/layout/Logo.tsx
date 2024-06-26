import React, { ReactNode } from 'react';

interface LogoProps {
  children?: ReactNode;
  label: string;
  labelClass: string;
}

const Logo: React.FC<LogoProps> = ({ children, label, labelClass }) => {
  return (
    <div className="logo">
        <div className="logo1">
            {children}
        </div>
        <div className="text">
            <div className={labelClass}>
                {label}
            </div>
        </div>
    </div>
  );
};

export default Logo;