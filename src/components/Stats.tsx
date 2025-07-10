
import React from 'react';
import { Droplet, Heart, Users, Award } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, color }) => {
  return (
    <div className="text-center bg-white rounded-lg shadow-sm border p-3">
      <div className={`mb-2 flex justify-center ${color}`}>
        {icon}
      </div>
      <div className="text-lg font-bold mb-1 text-gray-900">{value}</div>
      <div className="text-xs text-gray-600">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="bg-gray-50 py-4">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-lg font-bold text-center mb-4 text-gray-900">
          আমাদের অর্জন
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <StatItem
            icon={<Droplet className="h-5 w-5" />}
            value="২৫,০০০+"
            label="রক্তদান"
            color="text-red-600"
          />
          <StatItem
            icon={<Heart className="h-5 w-5" />}
            value="৫,০০০+"
            label="সংরক্ষিত জীবন"
            color="text-pink-600"
          />
          <StatItem
            icon={<Users className="h-5 w-5" />}
            value="২,৫০০+"
            label="নিবন্ধিত দাতা"
            color="text-blue-600"
          />
          <StatItem
            icon={<Award className="h-5 w-5" />}
            value="১০০+"
            label="স্বেচ্ছাসেবক"
            color="text-green-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
