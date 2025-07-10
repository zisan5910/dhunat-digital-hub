
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Heart,
  Users,
  Star,
  Clock,
  Award,
  CheckCircle
} from 'lucide-react';

const BeAVolunteer = () => {
  const qualifications = [
    'বয়স ১৮ বছর বা তার বেশি',
    'সমাজসেবায় আগ্রহী',
    'নিয়মিত সময় দিতে পারেন',
    'দলীয় কাজে অভিজ্ঞ',
  ];

  const benefits = [
    {
      icon: <Heart className="h-5 w-5 text-red-600" />,
      title: 'জীবন বাঁচান',
      description: 'আপনার স্বেচ্ছাসেবা অসংখ্য মানুষের জীবন বাঁচাতে সাহায্য করবে।'
    },
    {
      icon: <Users className="h-5 w-5 text-blue-600" />,
      title: 'সমাজসেবা',
      description: 'সমাজের কল্যাণে আপনার অবদান রাখুন।'
    },
    {
      icon: <Star className="h-5 w-5 text-yellow-600" />,
      title: 'দক্ষতা বৃদ্ধি',
      description: 'স্বেচ্ছাসেবার মাধ্যমে নতুন দক্ষতা অর্জন করুন।'
    },
    {
      icon: <Award className="h-5 w-5 text-purple-600" />,
      title: 'স্বীকৃতি',
      description: 'আপনার অবদানের জন্য সার্টিফিকেট ও সম্মাননা পাবেন।'
    }
  ];

  const roles = [
    { title: 'রক্তদান সমন্বয়ক', description: 'রক্তদাতা ও রোগীদের মধ্যে সমন্বয় সাধন' },
    { title: 'ইভেন্ট অর্গানাইজার', description: 'রক্তদান শিবির ও কর্মসূচি আয়োজন' },
    { title: 'সচেতনতা প্রচারক', description: 'রক্তদান সম্পর্কে সচেতনতা বৃদ্ধি' },
    { title: 'ডিজিটাল সাপোর্ট', description: 'অনলাইন প্ল্যাটফর্ম ব্যবস্থাপনা' }
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
          <h1 className="text-lg font-bold text-gray-900">স্বেচ্ছাসেবক হন</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-md space-y-4">
        {/* Primary Action - Google Form */}
        <Card className="shadow-sm border-0 bg-blue-50 border-blue-200">
          <CardContent className="p-4 text-center">
            <h3 className="font-semibold text-blue-900 mb-2 text-sm">স্বেচ্ছাসেবক হিসেবে যোগদান করুন</h3>
            <p className="text-blue-800 text-xs mb-3">নিচের ফর্মটি পূরণ করে স্বেচ্ছাসেবক হিসেবে নিবন্ধন করুন</p>
            <Button
              asChild
              className="w-full bg-blue-600 hover:bg-blue-700 h-10 rounded-xl"
            >
              <a
                href="https://forms.google.com/volunteer-registration"
                target="_blank"
                rel="noopener noreferrer"
              >
                স্বেচ্ছাসেবক নিবন্ধন ফর্ম
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Qualifications */}
        <Card className="shadow-sm border-0 bg-white">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              প্রয়োজনীয় যোগ্যতা
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {qualifications.map((qual, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700 text-sm">{qual}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-gray-900 px-2">কেন স্বেচ্ছাসেবক হবেন?</h3>
          {benefits.map((benefit, index) => (
            <Card key={index} className="shadow-sm border-0 bg-white rounded-xl">
              <CardContent className="p-3 flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Roles */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-gray-900 px-2">স্বেচ্ছাসেবকের ভূমিকা</h3>
          <div className="grid grid-cols-1 gap-3">
            {roles.map((role, index) => (
              <Card key={index} className="shadow-sm border-0 bg-white rounded-xl">
                <CardContent className="p-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">{role.title}</h4>
                      <p className="text-gray-600 text-sm">{role.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeAVolunteer;
