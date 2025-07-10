
import React from 'react';
import { Heart, Shield, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DonateBlood = () => {
  const requirements = [
    { text: 'বয়স ১৮-৬৫ বছর', icon: <CheckCircle className="h-4 w-4 text-green-600" /> },
    { text: 'ওজন ৫০ কেজি বা তার বেশি', icon: <CheckCircle className="h-4 w-4 text-green-600" /> },
    { text: 'সুস্থ ও সবল', icon: <CheckCircle className="h-4 w-4 text-green-600" /> },
    { text: 'শেষ রক্তদানের ৩ মাস পর', icon: <CheckCircle className="h-4 w-4 text-green-600" /> },
  ];

  const restrictions = [
    'কোনো সংক্রামক রোগ না থাকা',
    'গর্ভবতী মহিলাদের রক্তদান করা যাবে না',
    'ওষুধ সেবনের ক্ষেত্রে ডাক্তারের পরামর্শ নিন',
    'রক্তদানের আগে পর্যাপ্ত ঘুম ও খাবার গ্রহণ করুন',
  ];

  const benefits = [
    { title: 'স্বাস্থ্য উন্নতি', description: 'নিয়মিত রক্তদান স্বাস্থ্যের জন্য ভাল', icon: <Heart className="h-5 w-5 text-red-600" /> },
    { title: 'জীবন বাঁচান', description: 'একটি রক্তদানে ৩টি জীবন বাঁচানো যায়', icon: <Shield className="h-5 w-5 text-blue-600" /> },
    { title: 'সামাজিক দায়বদ্ধতা', description: 'সমাজের প্রতি আপনার অবদান', icon: <Clock className="h-5 w-5 text-green-600" /> },
  ];

  const steps = [
    { step: '১', title: 'নিবন্ধন', description: 'ফর্ম পূরণ করুন' },
    { step: '২', title: 'স্বাস্থ্য পরীক্ষা', description: 'সংক্ষিপ্ত চেকআপ' },
    { step: '৩', title: 'রক্তদান', description: '১০-১৫ মিনিট সময়' },
    { step: '৪', title: 'বিশ্রাম', description: 'হালকা খাবার ও বিশ্রাম' },
  ];

  const bloodCompatibility = [
    { donor: 'A+', canGiveTo: ['A+', 'AB+'], canReceiveFrom: ['A+', 'A-', 'O+', 'O-'] },
    { donor: 'A-', canGiveTo: ['A+', 'A-', 'AB+', 'AB-'], canReceiveFrom: ['A-', 'O-'] },
    { donor: 'B+', canGiveTo: ['B+', 'AB+'], canReceiveFrom: ['B+', 'B-', 'O+', 'O-'] },
    { donor: 'B-', canGiveTo: ['B+', 'B-', 'AB+', 'AB-'], canReceiveFrom: ['B-', 'O-'] },
    { donor: 'AB+', canGiveTo: ['AB+'], canReceiveFrom: ['সবার কাছ থেকে'] },
    { donor: 'AB-', canGiveTo: ['AB+', 'AB-'], canReceiveFrom: ['A-', 'B-', 'AB-', 'O-'] },
    { donor: 'O+', canGiveTo: ['A+', 'B+', 'AB+', 'O+'], canReceiveFrom: ['O+', 'O-'] },
    { donor: 'O-', canGiveTo: ['সবাইকে'], canReceiveFrom: ['O-'] },
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
          <h1 className="text-lg font-bold text-gray-900">রক্তদাতা হন</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-md space-y-4">
        {/* Primary Action - Google Form */}
        <Card className="shadow-sm border-0 bg-red-50 border-red-200">
          <CardContent className="p-4 text-center">
            <h3 className="font-semibold text-red-900 mb-2 text-sm">রক্তদাতা হিসেবে যোগদান করুন</h3>
            <p className="text-red-800 text-xs mb-3">নিচের ফর্মটি পূরণ করে রক্তদাতা হিসেবে নিবন্ধন করুন</p>
            <Button
              asChild
              className="w-full bg-red-600 hover:bg-red-700 h-10 rounded-xl"
            >
              <a
                href="https://forms.google.com/donor-registration"
                target="_blank"
                rel="noopener noreferrer"
              >
                রক্তদাতা নিবন্ধন ফর্ম
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Content Sections */}
        <div className="space-y-4">
          {/* Requirements & Restrictions */}
          <div className="grid grid-cols-1 gap-4">
            <Card className="shadow-sm border-0 bg-white rounded-xl">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  প্রয়োজনীয় শর্ত
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                      {req.icon}
                      <span className="text-gray-700 text-sm">{req.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-0 bg-white rounded-xl">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  সতর্কতা
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {restrictions.map((restriction, index) => (
                    <div key={index} className="flex items-start gap-2 p-2 bg-gray-50 rounded-lg">
                      <AlertCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{restriction}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-gray-900 px-2">রক্তদানের উপকারিতা</h3>
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

          {/* Process Steps */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-gray-900 px-2">রক্তদানের প্রক্রিয়া</h3>
            <div className="grid grid-cols-2 gap-3">
              {steps.map((step, index) => (
                <Card key={index} className="shadow-sm border-0 bg-white rounded-xl">
                  <CardContent className="p-3 text-center">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                      {step.step}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">{step.title}</h4>
                    <p className="text-gray-600 text-xs">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Blood Compatibility Chart */}
          <Card className="shadow-sm border-0 bg-white rounded-xl">
            <CardHeader className="pb-3 text-center">
              <CardTitle className="text-base">রক্তের গ্রুপ সামঞ্জস্যতা চার্ট</CardTitle>
              <p className="text-gray-600 text-sm">কে কাকে রক্ত দিতে ও নিতে পারে</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                {bloodCompatibility.map((group, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-3">
                    <div className="text-center mb-2">
                      <div className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center mx-auto mb-1 font-bold text-sm">
                        {group.donor}
                      </div>
                    </div>
                    <div className="space-y-2 text-center">
                      <div>
                        <p className="text-xs text-gray-600 mb-1">দিতে পারে:</p>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {Array.isArray(group.canGiveTo) ? group.canGiveTo.map((receiver, idx) => (
                            <span key={idx} className="bg-green-100 text-green-700 px-2 py-0.5 rounded-lg text-xs font-medium">
                              {receiver}
                            </span>
                          )) : (
                            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-lg text-xs font-medium">
                              {group.canGiveTo}
                            </span>
                          )}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">নিতে পারে:</p>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {Array.isArray(group.canReceiveFrom) ? group.canReceiveFrom.map((donor, idx) => (
                            <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-lg text-xs font-medium">
                              {donor}
                            </span>
                          )) : (
                            <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-lg text-xs font-medium">
                              {group.canReceiveFrom}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DonateBlood;
