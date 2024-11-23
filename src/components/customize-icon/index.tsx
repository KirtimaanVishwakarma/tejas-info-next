import { IconContext } from 'react-icons';
import React from 'react';

interface IconContextInterface {
  icon: React.ReactNode;
  className?: string;
}
const Icon = ({ icon, className }: IconContextInterface) => {
  return (
    <IconContext.Provider value={{ className: className||'' }}>{icon}</IconContext.Provider>
  );
};

export default Icon;
