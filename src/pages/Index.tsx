
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Plus, 
  Users, 
  Award, 
  Building2, 
  HeartHandshake, 
  Phone, 
  Mail, 
  Facebook,
  ArrowRight,
  Droplet,
  Heart,
  Shield,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const quickActions = [
    {
      title: 'ডোনার খুঁজুন',
      description: 'প্রয়োজনীয় রক্তের দাতা খুঁজুন',
      icon: <Search className="h-5 w-5" />,
      link: '/find-donors',
      color: 'bg-red-500'
    },
    {
      title: 'রক্তদাতা হোন',
      description: 'রক্তদাতা হিসেবে যোগদান করুন',
      icon: <Plus className="h-5 w-5" />,
      link: '/donate-blood',
      color: 'bg-pink-500'
    },
    {
      title: 'স্বেচ্ছাসেবক',
      description: 'স্বেচ্ছাসেবক হিসেবে যোগদান',
      icon: <Users className="h-5 w-5" />,
      link: '/be-a-volunteer',
      color: 'bg-blue-500'
    },
    {
      title: 'সার্টিফিকেট',
      description: 'আপনার অবদানের স্বীকৃতি নিন',
      icon: <Award className="h-5 w-5" />,
      link: '/certificate',
      color: 'bg-yellow-500'
    },
    {
      title: 'হাসপাতাল',
      description: 'নিকটস্থ হাসপাতালের তথ্য',
      icon: <Building2 className="h-5 w-5" />,
      link: '/hospitals',
      color: 'bg-green-500'
    },
    {
      title: 'আর্থিক সহায়তা',
      description: 'সংগঠনকে সহায়তা প্রদান',
      icon: <HeartHandshake className="h-5 w-5" />,
      link: '/donate',
      color: 'bg-purple-500'
    }
  ];

  const features = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'জীবন বাঁচান',
      description: 'রক্তদানের মাধ্যমে জীবন বাঁচান'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'নিরাপদ সেবা',
      description: 'সম্পূর্ণ নিরাপদ ও বিশ্বস্ত সেবা'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: '২৪/৭ সেবা',
      description: 'সর্বদা আপনার সেবায় নিয়োজিত'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center">
            <img 
              src="https://i.postimg.cc/pVmRddDC/bobdo-removebg-preview.png" 
              alt="BOBDO" 
              className="h-12 w-12 object-contain"
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            বগুড়া অনলাইন রক্তদান সংগঠন
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            স্বেচ্ছায় করি রক্তদান, হাসবে রোগী বাঁচবে প্রাণ
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild className="h-12 px-8 bg-red-600 hover:bg-red-700 text-white shadow-lg">
              <Link to="/find-donors" className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                ডোনার খুঁজুন
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-12 px-8 border-red-600 text-red-600 hover:bg-red-50">
              <Link to="/donate-blood" className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                রক্তদাতা হোন
              </Link>
            </Button>
          </div>

          <div className="flex justify-center gap-4">
            <a 
              href="https://www.facebook.com/groups/BOBO.BD" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all text-sm font-medium text-gray-700"
            >
              <Facebook className="h-4 w-4" />
              ফেসবুক গ্রুপ
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">68K+</div>
              <div className="text-sm text-gray-600">সদস্য</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">1000+</div>
              <div className="text-sm text-gray-600">রক্তদান</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">জীবন বাঁচানো</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">8+</div>
              <div className="text-sm text-gray-600">বছর সেবা</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">
            সেবা সমূহ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${action.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                    {action.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{action.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{action.description}</p>
                  <Button asChild className="w-full h-10 bg-gray-900 hover:bg-gray-800 text-white">
                    <Link to={action.link} className="flex items-center justify-center gap-2">
                      শুরু করুন
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">
            কেন আমরা?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">জরুরি যোগাযোগ</h2>
          <p className="text-lg mb-8 opacity-90">
            জরুরি রক্তের প্রয়োজনে যোগাযোগ করুন
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Phone className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">ফোন</h3>
              <a href="tel:01722528164" className="text-lg hover:underline">
                ০১৭২২-৫২৮১৬৪
              </a>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">ইমেইল</h3>
              <a href="mailto:bobdo5800@gmail.com" className="text-lg hover:underline">
                bobdo5800@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
