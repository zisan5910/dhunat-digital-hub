
import React from 'react';
import { Bell, Calendar, AlertTriangle, Info, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Notice = () => {
  const notices = [
    {
      id: 1,
      title: 'রক্তের সংকট',
      category: 'urgent',
      date: '২৫ ডিসেম্বর, ২০২৪',
      content: 'বর্তমানে আমরা রক্তের গুরুতর সংকটে আছি। রক্তদাতাদের অবিলম্বে প্রয়োজন। আপনি যদি রক্তদানের জন্য উপযুক্ত হন তবে দয়া করে আমাদের যে কোন দান কেন্দ্রে যত দ্রুত সম্ভব আসুন।',
    },
    {
      id: 2,
      title: 'আরো স্বেচ্ছাসেবক প্রয়োজন',
      category: 'announcement',
      date: '২০ ডিসেম্বর, ২০২৪',
      content: 'আমাদের এই মিশনে কাজ করতে আরও বেশি স্বেচ্ছাসেবক এর প্রয়োজন। যারা আগ্রহী আছেন তারা দয়া করে আমাদের সাথে যোগাযোগ করুন ধন্যবাদ।',
    },
    {
      id: 3,
      title: 'মাসিক মিটিংয়ে উপস্থিত হওয়ার জন্য অনুরোধ',
      category: 'important',
      date: '১৮ ডিসেম্বর, ২০২৪',
      content: 'স্বেচ্ছাসেবকগণ আপনাদের জন্য প্রতি মাসে যে মাসিক মিটিং এর ব্যবস্থা করা হয় তাতে দয়া করে উপস্থিত থাকবেন এবং মাসিক ভাতা প্রদান করবেন',
    },
    {
      id: 4,
      title: 'আমাদের দাতাদের ধন্যবাদ',
      date: '১৫ ডিসেম্বর, ২০২৪',
      category: 'announcement',
      content: 'আমরা আমাদের বসন্তকালীন রক্তদান শিবিরে অংশগ্রহণকারী সকল দাতাদের আন্তরিক ধন্যবাদ জানাতে চাই। আপনার উদারতার জন্য আমরা ৫০০ ইউনিটেরও বেশি রক্ত সংগ্রহ করতে পেরেছি যা প্রায় ১,৫০০ জীবন বাঁচাতে সাহায্য করবে!',
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'urgent':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'important':
        return <Info className="h-4 w-4 text-amber-500" />;
      case 'event':
        return <Calendar className="h-4 w-4 text-blue-500" />;
      default:
        return <Bell className="h-4 w-4 text-green-500" />;
    }
  };

  const getCategoryClass = (category: string) => {
    switch (category) {
      case 'urgent':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'important':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'event':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      default:
        return 'bg-green-50 text-green-700 border-green-200';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'urgent':
        return 'জরুরি';
      case 'important':
        return 'গুরুত্বপূর্ণ';
      case 'event':
        return 'ইভেন্ট';
      default:
        return 'ঘোষণা';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <section className="bg-white pt-4 pb-6">
        <div className="container mx-auto px-4 max-w-md">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-blood-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Bell className="h-8 w-8 text-blood-600" />
            </div>
            <h1 className="text-xl font-bold text-gray-900 mb-2">নোটিশ ও ঘোষণা</h1>
            <p className="text-sm text-gray-600">গুরুত্বপূর্ণ রক্তদান সংবাদ, ইভেন্ট এবং জরুরি আবেদন সম্পর্কে আপডেট থাকুন।</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-md space-y-4">
        {/* Notices */}
        {notices.map((notice) => (
          <Card key={notice.id} className="shadow-sm border-0 bg-white hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {getCategoryIcon(notice.category)}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base mb-1">{notice.title}</CardTitle>
                    <p className="text-gray-600 text-xs">{notice.date}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryClass(notice.category)}`}>
                  {getCategoryLabel(notice.category)}
                </span>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-700 text-sm leading-relaxed">{notice.content}</p>
            </CardContent>
          </Card>
        ))}

        {/* Subscribe Section */}
        <Card className="bg-gradient-to-r from-blood-50 to-pink-50 border-blood-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blood-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <MessageCircle className="h-6 w-6 text-blood-600" />
            </div>
            <h2 className="text-lg font-bold text-blood-900 mb-2">নোটিফিকেশন সাবস্ক্রাইব করুন</h2>
            <p className="text-blood-800 mb-4 text-sm">সর্বশেষ সংবাদ, জরুরি আবেদন এবং রক্তদান শিবির সম্পর্কে আপডেট পেতে আমাদের চ্যানেল সাবস্ক্রাইব করুন।</p>
            <Button asChild className="w-full h-10 bg-blood-600 hover:bg-blood-700 rounded-xl shadow-md">
              <a
                href="https://youtube.com/@BograOnlineBloodDonationOrgani"
                target="_blank"
                rel="noopener noreferrer"
              >
                এখনই সাবস্ক্রাইব করুন
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="shadow-sm border-0 bg-white pb-6">
          <CardContent className="p-4 text-center">
            <h3 className="font-bold text-gray-900 mb-2">আরও তথ্যের জন্য যোগাযোগ করুন</h3>
            <p className="text-gray-600 text-sm mb-3">এই নোটিশ সম্পর্কে আরও বিস্তারিত জানতে আমাদের তথ্য ডেস্কে যোগাযোগ করুন:</p>
            <div className="space-y-2">
              <a
                href="tel:01722528164"
                className="flex items-center justify-center gap-2 bg-blood-600 text-white px-4 py-2.5 rounded-xl hover:bg-blood-700 transition-colors font-medium text-sm"
              >
                ফোন: ০১৭২২-৫২৮১৬৪
              </a>
              <a
                href="mailto:bobdo5800@gmail.com"
                className="flex items-center justify-center gap-2 bg-blood-100 text-blood-700 px-4 py-2.5 rounded-xl hover:bg-blood-200 transition-colors font-medium text-sm"
              >
                ইমেইল: bobdo5800@gmail.com
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Notice;
