
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Youtube,
  Users,
  Mail,
  Phone,
  MapPin,
  Heart,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { to: '/certificate', text: 'সার্টিফিকেট' },
    { to: '/about-us', text: 'আমাদের সম্পর্কে' },
    { to: '/contacts', text: 'যোগাযোগ' },
    { to: '/notice', text: 'নোটিশ' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/bobdo.official',
      icon: <Facebook className="h-4 w-4" />,
    },
    {
      name: 'Group',
      url: 'https://www.facebook.com/groups/BOBO.BD',
      icon: <Users className="h-4 w-4" />,
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@BograOnlineBloodDonationOrgani',
      icon: <Youtube className="h-4 w-4" />,
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-100 py-6 px-4 mt-8">
      <div className="max-w-md mx-auto space-y-6">
        {/* App Info - Compact */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
              <img 
                src="https://i.postimg.cc/pVmRddDC/bobdo-removebg-preview.png" 
                alt="BOBDO Logo" 
                className="h-6 w-6 object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">BOBDO</h3>
              <p className="text-gray-500 text-xs">রক্তদান সংগঠন</p>
            </div>
          </div>
        </div>

        {/* Quick Links - Grid */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3 text-center">দ্রুত লিংক</h4>
          <div className="grid grid-cols-2 gap-2">
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-center py-2 px-3 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info - Compact */}
        <div className="bg-gray-50 rounded-xl p-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center justify-center gap-2">
            <Phone className="h-4 w-4 text-red-500" />
            যোগাযোগ
          </h4>
          <div className="space-y-2 text-center">
            <a href="tel:01722528164" className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors">
              <Phone className="h-3 w-3" />
              ০১৭২২-৫২৮১৬৤
            </a>
            <a href="mailto:bobdo5800@gmail.com" className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors">
              <Mail className="h-3 w-3" />
              bobdo5800@gmail.com
            </a>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <MapPin className="h-3 w-3" />
              সাতমাথা, বগুড়া
            </div>
          </div>
        </div>

        {/* Social Media - Horizontal */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center justify-center gap-2">
            <Heart className="h-4 w-4 text-red-500" />
            সামাজিক মাধ্যম
          </h4>
          <div className="flex justify-center gap-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-red-50 rounded-xl transition-all duration-200 hover:scale-105"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright - Simple */}
        <div className="text-center pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            © 2024 BOBDO. সকল অধিকার সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
