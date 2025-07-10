
import React from 'react';
import { Heart, Users, Target, Award, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutUs = () => {
  const achievements = [
    { icon: <Users className="h-6 w-6 text-blue-600" />, title: '১০০০+', subtitle: 'নিবন্ধিত রক্তদাতা' },
    { icon: <Heart className="h-6 w-6 text-red-600" />, title: '৫০০+', subtitle: 'সফল রক্তদান' },
    { icon: <Target className="h-6 w-6 text-green-600" />, title: '২৫+', subtitle: 'রক্তদান ক্যাম্প' },
    { icon: <Award className="h-6 w-6 text-purple-600" />, title: '৫০+', subtitle: 'স্বেচ্ছাসেবক' },
  ];

  const values = [
    {
      icon: <Heart className="h-5 w-5 text-red-600" />,
      title: 'মানবিকতা',
      description: 'মানুষের সেবায় নিবেদিত'
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-green-600" />,
      title: 'নির্ভরযোগ্যতা',
      description: 'জরুরি মুহূর্তে পাশে থাকা'
    },
    {
      icon: <Star className="h-5 w-5 text-yellow-600" />,
      title: 'স্বচ্ছতা',
      description: 'সব কাজে স্বচ্ছতা বজায় রাখা'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* App Header */}
      <section className="bg-white py-4">
        <div className="container mx-auto px-4 max-w-md text-center">
          <div className="w-16 h-16 mx-auto mb-3">
            <img 
              src="https://i.postimg.cc/pVmRddDC/bobdo-removebg-preview.png" 
              alt="BOBDO Logo" 
              className="h-full w-full object-contain"
            />
          </div>
          <h1 className="text-lg font-bold text-gray-900">আমাদের সম্পর্কে</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-md space-y-4">
        {/* About Text */}
        <Card className="shadow-sm border-0 bg-white">
          <CardContent className="p-4">
            <h2 className="text-base font-bold text-gray-900 mb-3">আমাদের পরিচয়</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                বগুড়া অনলাইন রক্তদান সংগঠন (BOBDO) একটি অলাভজনক সেবামূলক সংগঠন যা ২০১৮ সালে প্রতিষ্ঠিত হয়েছে।
              </p>
              <p>
                আমাদের মূল উদ্দেশ্য হলো বগুড়া জেলার মানুষের রক্তের প্রয়োজন মেটানো এবং রক্তদানে উৎসাহিত করা।
              </p>
              <p>
                আমরা একটি স্বেচ্ছাসেবী টিম নিয়ে কাজ করি যারা নিঃস্বার্থভাবে মানুষের সেবায় নিয়োজিত।
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 gap-4">
          <Card className="shadow-sm border-0 bg-blue-50">
            <CardContent className="p-4">
              <h3 className="text-base font-bold text-blue-900 mb-2">আমাদের লক্ষ্য</h3>
              <p className="text-sm text-blue-800">
                রক্তের প্রয়োজনে প্রতিটি মানুষের পাশে দাঁড়ানো এবং একটি সুস্থ সমাজ গড়ে তোলা।
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-0 bg-green-50">
            <CardContent className="p-4">
              <h3 className="text-base font-bold text-green-900 mb-2">আমাদের স্বপ্ন</h3>
              <p className="text-sm text-green-800">
                এমন একটি সমাজ গড়া যেখানে কেউ রক্তের অভাবে মৃত্যুর মুখোমুখি হবে না।
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="shadow-sm border-0 bg-white">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">আমাদের অর্জন</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                    {achievement.icon}
                  </div>
                  <div className="text-lg font-bold text-gray-900">{achievement.title}</div>
                  <div className="text-xs text-gray-600">{achievement.subtitle}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Values */}
        <Card className="shadow-sm border-0 bg-white">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">আমাদের মূল্যবোধ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3 p-2 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team */}
        <Card className="shadow-sm border-0 bg-gradient-to-r from-red-50 to-pink-50">
          <CardContent className="p-4 text-center">
            <h3 className="text-base font-bold text-red-900 mb-2">আমাদের টিম</h3>
            <p className="text-sm text-red-800 mb-3">
              আমাদের রয়েছে একদল নিবেদিতপ্রাণ স্বেচ্ছাসেবক যারা দিনরাত মানুষের সেবায় কাজ করে যাচ্ছেন।
            </p>
            <div className="text-xs text-red-700">
              "স্বেচ্ছায় করি রক্তদান, হাসবে রোগী বাঁচবে প্রাণ"
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
