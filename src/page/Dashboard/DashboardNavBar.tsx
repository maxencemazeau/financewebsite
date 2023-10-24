import React, { useState } from 'react'; 
import useLocalStorage from '../../hooks/useLocalStorage';

interface DashboardNavBarProps {
    handleHeight: (isExpanded: boolean) => void;
  }

const Header : React.FC<DashboardNavBarProps> = ({ handleHeight }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [, ,clearUserData] = useLocalStorage('user', []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    handleHeight(!isExpanded);
  };

  const Logout = () => {
    clearUserData();
  }


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
            <a
              href="/Dashboard"
              className="block mt-4 rounded-lg px-4 py-2 text-sm font-medium text-gray-700"
            >
              Dashboard
            </a>
          </li>

          <li>
            <a
              href="/ExpenseHome"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700"
            >
              Expenses
            </a>
          </li>

          <li>
            <button
              
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700"
            >
              Incomes
            </button>
          </li>
          <li>
            <button
              
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700"
            >
              Goals and notes
            </button>
          </li>
          <li>
            <button
              
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700"
            >
              Budget Planner
            </button>
          </li>
          <li>
            <a
              href='/'
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700"
            >
              Back to website
            </a>
          </li>
          <li className="bg-red-400 rounded-md">
            <a
              onClick={Logout}
              href='/login'
              className="block rounded-lg px-4 py-2 text-sm text-white font-semibold"
            >
              Disconnect
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;