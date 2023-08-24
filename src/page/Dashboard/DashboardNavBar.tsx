import React, { useState } from 'react'; 

interface DashboardNavBarProps {
    handleHeight: (isExpanded: boolean) => void;
  }

const Header : React.FC<DashboardNavBarProps> = ({ handleHeight }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    handleHeight(!isExpanded);
  };


  return (
    <div className="flex flex-col h-screen border-e bg-white">
      <div className="px-4 py-6">
        <button
          className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 fixed lg:hidden"
          onClick={toggleExpand}
        >
          {isExpanded ? 'Fermer' : 'Ouvrir'}
        </button>

        <ul
          className={`mt-6 space-y-1 ${
            isExpanded ? 'block fixed' : 'hidden lg:block'
          }`}
        >
          <li>
            <button
             
              className="block mt-4 rounded-lg px-4 py-2 text-sm font-medium text-gray-700"
            >
              HeaderApropos
            </button>
          </li>

          <li>
            <button
              
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700"
            >
              HeaderProjets
            </button>
          </li>

          <li>
            <button
              
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700"
            >
              HeaderContact
            </button>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;