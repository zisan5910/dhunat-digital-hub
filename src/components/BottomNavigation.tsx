
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Bell, Search, Info } from 'lucide-react';

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
      id: 'notice',
      label: 'নোটিশ',
      icon: Bell,
      path: '/notice',
      isActive: location.pathname === '/notice'
    },
    {
      id: 'find-donors',
      label: 'ডোনার খুঁজুন',
      icon: Search,
      path: '/find-donors',
      isActive: location.pathname === '/find-donors'
    },
    {
      id: 'about',
      label: 'আমাদের সম্পর্কে',
      icon: Info,
      path: '/about-us',
      isActive: location.pathname === '/about-us'
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 safe-area-padding-bottom">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          
          if (item.isExternal) {
            return (
              <a
                key={item.id}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center space-y-1 transition-colors duration-200 text-gray-600 hover:text-blood-600 hover:bg-blood-50 px-1"
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                <span className="text-xs font-medium leading-tight text-center">{item.label}</span>
              </a>
            );
          }
          
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`flex flex-col items-center justify-center space-y-1 transition-colors duration-200 px-1 ${
                item.isActive
                  ? 'text-blood-600 bg-blood-50'
                  : 'text-gray-600 hover:text-blood-600 hover:bg-blood-50'
              }`}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              <span className="text-xs font-medium leading-tight text-center">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
