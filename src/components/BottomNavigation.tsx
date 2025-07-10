
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Heart, Search } from 'lucide-react';

const BottomNavigation = () => {
  const location = useLocation();
  
  const navItems = [
    {
      id: 'home',
      label: 'হোম',
      icon: Home,
      path: '/',
      isActive: location.pathname === '/'
    },
    {
      id: 'community',
      label: 'কমিউনিটি',
      icon: Users,
      path: 'https://www.facebook.com/groups/BOBO.BD',
      isActive: false,
      isExternal: true
    },
    {
      id: 'donate',
      label: 'রক্তদান',
      icon: Heart,
      path: '/donate-blood',
      isActive: location.pathname === '/donate-blood'
    },
    {
      id: 'find',
      label: 'খুঁজুন',
      icon: Search,
      path: '/find-donors',
      isActive: location.pathname === '/find-donors'
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 safe-area-padding-bottom">
      <div className="grid grid-cols-4 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          
          if (item.isExternal) {
            return (
              <a
                key={item.id}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center space-y-1 transition-colors duration-200 text-gray-600 hover:text-red-600 hover:bg-red-50"
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </a>
            );
          }
          
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`flex flex-col items-center justify-center space-y-1 transition-colors duration-200 ${
                item.isActive
                  ? 'text-red-600 bg-red-50'
                  : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
