
import React, { useState } from 'react';
import { Search, MapPin, Phone, Clock, Users, Filter, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FindDonors = () => {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedUrgency, setSelectedUrgency] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  
  const areas = [
    'সাতমাথা', 'শিবগঞ্জ', 'দুপচাঁচিয়া', 'গাবতলী', 
    'কাহালু', 'নন্দীগ্রাম', 'শাহজাহানপুর', 'সোনাতলা', 
    'ধুনট', 'আদমদীঘি', 'শেরপুর', 'সারিয়াকান্দি'
  ];

  const allDonors = [
    { 
      id: 1, name: 'মোঃ রহিম উদ্দিন', bloodGroup: 'B+', area: 'সাতমাথা', 
      lastDonation: '৩ মাস আগে', phone: '০১৭১২-৫২৫৯১০', 
      rating: 4.8, donations: 12, available: true 
    },
    { 
      id: 2, name: 'সাকিব হাসান', bloodGroup: 'A+', area: 'শিবগঞ্জ', 
      lastDonation: '২ মাস আগে', phone: '০১৭১২-৫২৫৯১১', 
      rating: 4.9, donations: 8, available: true 
    },
    { 
      id: 3, name: 'তানিয়া আক্তার', bloodGroup: 'O+', area: 'দুপচাঁচিয়া', 
      lastDonation: '৪ মাস আগে', phone: '০১৭১২-৫২৫৯১২', 
      rating: 4.7, donations: 15, available: false 
    },
    { 
      id: 4, name: 'আব্দুল করিম', bloodGroup: 'AB+', area: 'গাবতলী', 
      lastDonation: '১ মাস আগে', phone: '০১৭১২-৫২৫৯১৩', 
      rating: 4.6, donations: 6, available: true 
    },
    { 
      id: 5, name: 'ফাতেমা খাতুন', bloodGroup: 'B+', area: 'কাহালু', 
      lastDonation: '৫ মাস আগে', phone: '০১৭১২-৫২৫৯১৪', 
      rating: 4.8, donations: 10, available: true 
    },
    { 
      id: 6, name: 'মোঃ আলী হাসান', bloodGroup: 'O-', area: 'নন্দীগ্রাম', 
      lastDonation: '২ মাস আগে', phone: '০১৭১২-৫২৫৯১৫', 
      rating: 4.9, donations: 20, available: true 
    }
  ];

  const handleSearch = () => {
    let results = allDonors;
    
    if (selectedBloodGroup) {
      results = results.filter(donor => donor.bloodGroup === selectedBloodGroup);
    }
    
    if (selectedArea) {
      results = results.filter(donor => donor.area === selectedArea);
    }
    
    if (selectedUrgency === 'available') {
      results = results.filter(donor => donor.available);
    }
    
    setSearchResults(results);
  };

  const handleQuickSearch = (bloodGroup) => {
    setSelectedBloodGroup(bloodGroup);
    const results = allDonors.filter(donor => donor.bloodGroup === bloodGroup);
    setSearchResults(results);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <img 
                src="https://i.postimg.cc/pVmRddDC/bobdo-removebg-preview.png" 
                alt="BOBDO Logo" 
                className="h-12 w-12 object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">ডোনার খুঁজুন</h1>
            <p className="text-gray-600">প্রয়োজনীয় রক্তের গ্রুপ ও এলাকা নির্বাচন করুন</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Quick Blood Group Selection */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">দ্রুত খুঁজুন</h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
            {bloodGroups.map((group) => (
              <Button
                key={group}
                variant={selectedBloodGroup === group ? "default" : "outline"}
                className={`h-12 ${selectedBloodGroup === group ? 'bg-red-600 hover:bg-red-700' : 'hover:bg-red-50 hover:text-red-600'}`}
                onClick={() => handleQuickSearch(group)}
              >
                {group}
              </Button>
            ))}
          </div>
        </div>

        {/* Advanced Search Form */}
        <Card className="mb-8 shadow-lg border-0">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Search className="h-5 w-5 text-red-600" />
              উন্নত খোঁজ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  রক্তের গ্রুপ
                </label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  value={selectedBloodGroup}
                  onChange={(e) => setSelectedBloodGroup(e.target.value)}
                >
                  <option value="">সব গ্রুপ</option>
                  {bloodGroups.map((group) => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  এলাকা
                </label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                >
                  <option value="">সব এলাকা</option>
                  {areas.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  উপলব্ধতা
                </label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  value={selectedUrgency}
                  onChange={(e) => setSelectedUrgency(e.target.value)}
                >
                  <option value="">সবাই</option>
                  <option value="available">এখন উপলব্ধ</option>
                </select>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                className="flex-1 h-12 bg-red-600 hover:bg-red-700 text-white"
                onClick={handleSearch}
              >
                <Search className="h-5 w-5 mr-2" />
                খুঁজুন
              </Button>
              <Button 
                variant="outline" 
                className="h-12 border-gray-300"
                onClick={() => {
                  setSelectedBloodGroup('');
                  setSelectedArea('');
                  setSelectedUrgency('');
                  setSearchResults([]);
                }}
              >
                <Filter className="h-5 w-5 mr-2" />
                রিসেট
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              খোঁজার ফলাফল ({searchResults.length} জন ডোনার পাওয়া গেছে)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((donor) => (
                <Card key={donor.id} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${donor.available ? 'bg-green-100' : 'bg-gray-100'}`}>
                          <span className={`font-bold text-sm ${donor.available ? 'text-green-600' : 'text-gray-500'}`}>
                            {donor.bloodGroup}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{donor.name}</h3>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <MapPin className="h-3 w-3" />
                            {donor.area}
                          </div>
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${donor.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {donor.available ? 'উপলব্ধ' : 'অনুপলব্ধ'}
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        শেষ রক্তদান: {donor.lastDonation}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Heart className="h-4 w-4" />
                        মোট রক্তদান: {donor.donations} বার
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Star className="h-4 w-4 text-yellow-500" />
                        রেটিং: {donor.rating}/৫.০
                      </div>
                    </div>
                    
                    <Button 
                      className={`w-full h-10 ${donor.available ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'} text-white`}
                      disabled={!donor.available}
                      onClick={() => window.open(`tel:${donor.phone.replace(/-/g, '')}`)}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      {donor.available ? 'যোগাযোগ করুন' : 'এখন অনুপলব্ধ'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Default Donors Display */}
        {searchResults.length === 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">সাম্প্রতিক ডোনার</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allDonors.slice(0, 6).map((donor) => (
                <Card key={donor.id} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${donor.available ? 'bg-green-100' : 'bg-gray-100'}`}>
                          <span className={`font-bold text-sm ${donor.available ? 'text-green-600' : 'text-gray-500'}`}>
                            {donor.bloodGroup}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{donor.name}</h3>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <MapPin className="h-3 w-3" />
                            {donor.area}
                          </div>
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${donor.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {donor.available ? 'উপলব্ধ' : 'অনুপলব্ধ'}
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        শেষ রক্তদান: {donor.lastDonation}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Heart className="h-4 w-4" />
                        মোট রক্তদান: {donor.donations} বার
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Star className="h-4 w-4 text-yellow-500" />
                        রেটিং: {donor.rating}/৫.০
                      </div>
                    </div>
                    
                    <Button 
                      className={`w-full h-10 ${donor.available ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'} text-white`}
                      disabled={!donor.available}
                      onClick={() => window.open(`tel:${donor.phone.replace(/-/g, '')}`)}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      {donor.available ? 'যোগাযোগ করুন' : 'এখন অনুপলব্ধ'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Alternative Method */}
        <Card className="mb-8 bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                ফেসবুক গ্রুপে পোস্ট করুন
              </h3>
              <p className="text-blue-800 mb-4">
                দ্রুত ডোনার খুঁজে পেতে আমাদের ফেসবুক গ্রুপে পোস্ট করুন
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <a
                  href="https://www.facebook.com/groups/BOBO.BD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  গ্রুপে পোস্ট করুন
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card className="bg-red-600 text-white border-0">
          <CardContent className="p-6 text-center">
            <Phone className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">জরুরি যোগাযোগ</h3>
            <p className="mb-4 opacity-90">
              ডোনার খুঁজে পেতে সমস্যা হলে সরাসরি যোগাযোগ করুন
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:01722528164"
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-red-50 transition-colors"
              >
                ০১৭২২-৫২৮১৬৪
              </a>
              <a
                href="mailto:bobdo5800@gmail.com"
                className="bg-white/10 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors"
              >
                bobdo5800@gmail.com
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FindDonors;
