
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Award,
  FileText,
  Download,
  CheckCircle,
  Clock,
  Star,
} from 'lucide-react';

const Certificate = () => {
  const certificateTypes = [
    {
      title: 'রক্তদান সার্টিফিকেট',
      description: 'নিয়মিত রক্তদানের জন্য স্বীকৃতি',
      icon: <Award className="h-6 w-6 text-blood-600" />,
      requirements: ['কমপক্ষে ৩ বার রক্তদান', 'সংগঠনের সদস্যপদ'],
    },
    {
      title: 'স্বেচ্ছাসেবক সার্টিফিকেট',
      description: 'স্বেচ্ছাসেবামূলক কাজের প্রশংসাপত্র',
      icon: <Star className="h-6 w-6 text-blood-600" />,
      requirements: ['৬ মাসের স্বেচ্ছাসেবা', 'কমিউনিটি সার্ভিস'],
    },
    {
      title: 'অংশগ্রহণ সার্টিফিকেট',
      description: 'কর্মসূচিতে অংশগ্রহণের সার্টিফিকেট',
      icon: <CheckCircle className="h-6 w-6 text-blood-600" />,
      requirements: ['ইভেন্টে অংশগ্রহণ', 'কার্যক্রম সম্পন্ন'],
    },
  ];

  const processSteps = [
    {
      icon: <FileText className="h-5 w-5 text-blood-600" />,
      title: '১. ফর্ম পূরণ',
      description: 'গুগল ফর্মটি পূরণ করুন'
    },
    {
      icon: <Clock className="h-5 w-5 text-blood-600" />,
      title: '২. যাচাইকরণ',
      description: 'তথ্য যাচাই (৭-১০ দিন)'
    },
    {
      icon: <Award className="h-5 w-5 text-blood-600" />,
      title: '৩. অনুমোদন',
      description: 'সার্টিফিকেট প্রস্তুত'
    },
    {
      icon: <Download className="h-5 w-5 text-blood-600" />,
      title: '৪. প্রাপ্তি',
      description: 'ইমেইলে পাঠানো হবে'
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
          <h1 className="text-lg font-bold text-gray-900">সার্টিফিকেট আবেদন</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-md space-y-4">
        {/* Primary Action - Google Form */}
        <Card className="shadow-sm border-0 bg-blood-50 border-blood-200">
          <CardContent className="p-4 text-center">
            <h3 className="font-semibold text-blood-900 mb-2 text-sm">সার্টিফিকেটের জন্য আবেদন করুন</h3>
            <p className="text-blood-800 text-xs mb-3">নিচের ফর্মটি পূরণ করে আপনার পছন্দের সার্টিফিকেটের জন্য আবেদন করুন</p>
            <Button
              asChild
              className="w-full bg-blood-600 hover:bg-blood-700 h-10 rounded-xl"
            >
              <a
                href="https://forms.google.com/certificate-application"
                target="_blank"
                rel="noopener noreferrer"
              >
                সার্টিফিকেট আবেদন ফর্ম
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Certificate Types */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-gray-900 px-2">সার্টিফিকেটের ধরন</h3>
          {certificateTypes.map((cert, index) => (
            <Card key={index} className="shadow-sm border-0 bg-white rounded-xl">
              <CardContent className="p-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blood-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">{cert.title}</h4>
                    <p className="text-gray-600 text-xs mb-2">{cert.description}</p>
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-gray-700">প্রয়োজনীয় যোগ্যতা:</p>
                      {cert.requirements.map((req, reqIndex) => (
                        <div key={reqIndex} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                          {req}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Application Process */}
        <Card className="shadow-sm border-0 bg-white">
          <CardHeader className="pb-3 text-center">
            <CardTitle className="text-base">আবেদন প্রক্রিয়া</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center p-2">
                  <div className="w-10 h-10 bg-blood-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    {step.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">{step.title}</h4>
                  <p className="text-gray-600 text-xs">{step.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Certificate;
