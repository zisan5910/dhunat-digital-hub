
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Users, Search, Plus, Building2, Award, HeartHandshake, Bell, Info, Phone, Home, Droplet, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'হোম', path: '/', icon: <Home className="h-4 w-4" /> },
    { name: 'ডোনার খুঁজুন', path: '/find-donors', icon: <Search className="h-4 w-4" /> },
    { name: 'রক্তদাতা হোন', path: '/donate-blood', icon: <Plus className="h-4 w-4" /> },
    { name: 'রক্তের জন্য আবেদন', path: '/get-blood', icon: <Droplet className="h-4 w-4" /> },
    { name: 'স্বেচ্ছাসেবক হোন', path: '/be-a-volunteer', icon: <Users className="h-4 w-4" /> },
    { name: 'হাসপাতাল', path: '/hospitals', icon: <Building2 className="h-4 w-4" /> },
    { name: 'সার্টিফিকেট', path: '/certificate', icon: <Award className="h-4 w-4" /> },
    { name: 'আর্থিক অনুদান', path: '/donate', icon: <HeartHandshake className="h-4 w-4" /> },
    { name: 'নোটিশ', path: '/notice', icon: <Bell className="h-4 w-4" /> },
    { name: 'আমাদের সম্পর্কে', path: '/about-us', icon: <Info className="h-4 w-4" /> },
    { name: 'যোগাযোগ', path: '/contacts', icon: <Phone className="h-4 w-4" /> },
  ];

  const serviceItems = [
    { name: 'ডোনার খুঁজুন', path: '/find-donors', icon: <Search className="h-4 w-4" /> },
    { name: 'রক্তদাতা হোন', path: '/donate-blood', icon: <Plus className="h-4 w-4" /> },
    { name: 'রক্তের জন্য আবেদন', path: '/get-blood', icon: <Droplet className="h-4 w-4" /> },
    { name: 'স্বেচ্ছাসেবক হোন', path: '/be-a-volunteer', icon: <Users className="h-4 w-4" /> },
  ];

  const infoItems = [
    { name: 'হাসপাতাল', path: '/hospitals', icon: <Building2 className="h-4 w-4" /> },
    { name: 'সার্টিফিকেট', path: '/certificate', icon: <Award className="h-4 w-4" /> },
    { name: 'আর্থিক অনুদান', path: '/donate', icon: <HeartHandshake className="h-4 w-4" /> },
    { name: 'নোটিশ', path: '/notice', icon: <Bell className="h-4 w-4" /> },
    { name: 'আমাদের সম্পর্কে', path: '/about-us', icon: <Info className="h-4 w-4" /> },
    { name: 'যোগাযোগ', path: '/contacts', icon: <Phone className="h-4 w-4" /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center">
              <img 
                src="https://i.postimg.cc/pVmRddDC/bobdo-removebg-preview.png" 
                alt="BOBDO Logo" 
                className="h-8 w-8 object-contain"
              />
            </div>
            <div className="block">
              <h1 className="text-lg font-bold text-gray-900">BOBDO</h1>
              <p className="text-xs text-gray-600 hidden sm:block">রক্তদান সংগঠন</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/')
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-red-600'
              }`}
            >
              <Home className="h-4 w-4" />
              <span>হোম</span>
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-red-600">
                  <Heart className="h-4 w-4" />
                  <span>সেবাসমূহ</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border shadow-lg rounded-lg p-1">
                {serviceItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link
                      to={item.path}
                      className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 cursor-pointer"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Info Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-red-600">
                  <Info className="h-4 w-4" />
                  <span>তথ্য</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border shadow-lg rounded-lg p-1">
                {infoItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link
                      to={item.path}
                      className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 cursor-pointer"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Developer Link - Icon Only */}
            <a
              href="https://ridoan-zisan.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-all duration-200"
              title="ডেভেলপার"
            >
              <Code className="h-4 w-4" />
            </a>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden w-10 h-10 rounded-xl"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="p-6 border-b bg-red-50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                      <img 
                        src="https://i.postimg.cc/pVmRddDC/bobdo-removebg-preview.png" 
                        alt="BOBDO Logo" 
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">BOBDO</h2>
                      <p className="text-sm text-gray-600">রক্তদান সংগঠন</p>
                    </div>
                  </div>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-2">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 p-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                          isActive(item.path)
                            ? 'bg-red-600 text-white shadow-md'
                            : 'bg-gray-50 text-gray-700 hover:bg-red-50 hover:text-red-600'
                        }`}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </Link>
                    ))}
                    
                    {/* Developer Link - Icon Only */}
                    <a
                      href="https://ridoan-zisan.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 p-4 rounded-xl text-sm font-medium transition-all duration-200 bg-gray-50 text-gray-700 hover:bg-red-50 hover:text-red-600"
                    >
                      <Code className="h-4 w-4" />
                      <span>ডেভেলপার</span>
                    </a>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t bg-gray-50">
                  <div className="text-center">
                    <p className="text-xs text-gray-600 mb-2">জরুরি সেবা</p>
                    <a
                      href="tel:01722528164"
                      className="text-red-600 font-semibold text-sm"
                    >
                      ০১৭২২-৫২৮১৬৪
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
