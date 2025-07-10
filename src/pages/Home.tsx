
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Plus, 
  Users, 
  Award, 
  Building2, 
  HeartHandshake, 
  Bell, 
  Info, 
  Phone, 
  Facebook, 
  Youtube,
  Clock,
  MapPin,
  Droplet,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from '@/components/ui/card';

const Home = () => {
  const services = [
    {
      title: 'ডোনার খুঁজুন',
      icon: <Search className="h-6 w-6" />,
      link: '/find-donors',
      color: 'text-red-600'
    },
    {
      title: 'রক্তদাতা হোন',
      icon: <Plus className="h-6 w-6" />,
      link: '/donate-blood',
      color: 'text-pink-600'
    },
    {
      title: 'রক্তের জন্য আবেদন',
      icon: <Heart className="h-6 w-6" />,
      link: '/get-blood',
      color: 'text-red-500'
    },
    {
      title: 'স্বেচ্ছাসেবক হোন',
      icon: <Users className="h-6 w-6" />,
      link: '/be-a-volunteer',
      color: 'text-blue-600'
    },
    {
      title: 'হাসপাতাল',
      icon: <Building2 className="h-6 w-6" />,
      link: '/hospitals',
      color: 'text-green-600'
    },
    {
      title: 'সার্টিফিকেট',
      icon: <Award className="h-6 w-6" />,
      link: '/certificate',
      color: 'text-yellow-600'
    },
    {
      title: 'আর্থিক অনুদান',
      icon: <HeartHandshake className="h-6 w-6" />,
      link: '/donate',
      color: 'text-purple-600'
    },
    {
      title: 'নোটিশ',
      icon: <Bell className="h-6 w-6" />,
      link: '/notice',
      color: 'text-orange-600'
    },
    {
      title: 'আমাদের সম্পর্কে',
      icon: <Info className="h-6 w-6" />,
      link: '/about-us',
      color: 'text-indigo-600'
    },
    {
      title: 'যোগাযোগ',
      icon: <Phone className="h-6 w-6" />,
      link: '/contacts',
      color: 'text-teal-600'
    }
  ];

  const achievements = [
    {
      icon: <Droplet className="h-5 w-5" />,
      value: '২৫,০০০+',
      label: 'রক্তদান',
      color: 'text-red-600'
    },
    {
      icon: <Heart className="h-5 w-5" />,
      value: '৫,০০০+',
      label: 'সংরক্ষিত জীবন',
      color: 'text-pink-600'
    },
    {
      icon: <Users className="h-5 w-5" />,
      value: '২,৫০০+',
      label: 'নিবন্ধিত দাতা',
      color: 'text-blue-600'
    },
    {
      icon: <Award className="h-5 w-5" />,
      value: '১০০+',
      label: 'স্বেচ্ছাসেবক',
      color: 'text-green-600'
    }
  ];

  const organizationInfo = [
    {
      title: 'জরুরি হটলাইন',
      value: '০১৭২২-৫২৮১৬৪',
      icon: <Phone className="h-5 w-5" />,
      color: 'text-red-600'
    },
    {
      title: 'সেবার সময়',
      value: '২৪/৭',
      icon: <Clock className="h-5 w-5" />,
      color: 'text-blue-600'
    },
    {
      title: 'সদস্য সংখ্যা',
      value: '৬৮,০০০+',
      icon: <Users className="h-5 w-5" />,
      color: 'text-green-600'
    },
    {
      title: 'লোকেশন',
      value: 'সারাদেশে',
      icon: <MapPin className="h-5 w-5" />,
      color: 'text-purple-600'
    }
  ];

  const socialLinks = [
    {
      name: 'ফেসবুক পেজ',
      url: 'https://www.facebook.com/bobdo.official',
      icon: <Facebook className="h-4 w-4" />,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'ফেসবুক গ্রুপ',
      url: 'https://www.facebook.com/groups/BOBO.BD',
      icon: <Users className="h-4 w-4" />,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'ইউটিউব চ্যানেল',
      url: 'https://youtube.com/@BograOnlineBloodDonationOrgani',
      icon: <Youtube className="h-4 w-4" />,
      color: 'bg-red-600 hover:bg-red-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="container mx-auto px-4 max-w-md">
        {/* App Logo and Info */}
        <section className="bg-white py-6 text-center">
          <div className="w-24 h-24 mx-auto mb-4">
            <img 
              src="https://i.postimg.cc/pVmRddDC/bobdo-removebg-preview.png" 
              alt="BOBDO Logo" 
              className="h-full w-full object-contain"
            />
          </div>
          <h1 className="text-xl font-bold text-gray-900 mb-2">
            বগুড়া অনলাইন রক্তদান সংগঠন
          </h1>
          <p className="text-sm text-gray-600 mb-4">
            স্বেচ্ছায় করি রক্তদান, হাসবে রোগী বাঁচবে প্রাণ
          </p>

          {/* Social Links */}
          <div className="flex gap-2 justify-center">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 ${link.color} text-white px-3 py-1.5 rounded-full text-xs transition-colors`}
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-6 bg-white mt-2">
          <h2 className="text-lg font-bold text-center text-gray-900 mb-4">
            সেবাসমূহ
          </h2>
          
          <div className="grid grid-cols-3 gap-3">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="block">
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white">
                  <CardContent className="p-3 text-center">
                    <div className={`${service.color} mb-2 flex justify-center`}>{service.icon}</div>
                    <p className="text-xs font-medium text-gray-900">{service.title}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="py-6 bg-white mt-2">
          <h2 className="text-lg font-bold text-center text-gray-900 mb-4">
            আমাদের অর্জন
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-0 shadow-sm bg-gray-50">
                <CardContent className="p-3 text-center">
                  <div className={`${achievement.color} mb-2 flex justify-center`}>{achievement.icon}</div>
                  <p className="text-lg font-bold text-gray-900 mb-1">{achievement.value}</p>
                  <p className="text-xs text-gray-600">{achievement.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Organization Info */}
        <section className="py-6 bg-white mt-2">
          <h2 className="text-lg font-bold text-center text-gray-900 mb-4">
            প্রতিষ্ঠানের তথ্য
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {organizationInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-sm bg-gray-50">
                <CardContent className="p-3 text-center">
                  <div className={`${info.color} mb-2 flex justify-center`}>{info.icon}</div>
                  <p className="text-sm font-bold text-gray-900 mb-1">{info.value}</p>
                  <p className="text-xs text-gray-600">{info.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
