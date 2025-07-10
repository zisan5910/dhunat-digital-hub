
import React, { useState } from 'react';
import { Wallet, CreditCard, AlertCircle, Copy, Check, HeartHandshake, ExternalLink } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const paymentMethods = [
  {
    id: 'bkash',
    name: 'bKash',
    number: '01722-528164',
    logo: 'https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg',
  },
  {
    id: 'nagad',
    name: 'Nagad',
    number: '01722-528164',
    logo: 'https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png',
  },
  {
    id: 'rocket',
    name: 'Rocket',
    number: '01722-528164',
    logo: 'https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png',
  },
];

export default function Donate() {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const handleCopyNumber = (number: string) => {
    navigator.clipboard.writeText(number.replace(/-/g, '')).then(() => {
      setCopiedNumber(number);
      toast({
        title: 'নম্বর কপি হয়েছে',
        description: 'নম্বরটি আপনার ক্লিপবোর্ডে কপি করা হয়েছে।',
      });
      setTimeout(() => setCopiedNumber(null), 2000);
    });
  };

  const instructions = [
    'পছন্দের পেমেন্ট পদ্ধতি নির্বাচন করুন',
    'প্রদত্ত নম্বরে অনুদানের পরিমাণ পাঠান',
    'লেনদেন আইডি সংরক্ষণ করুন',
    'অনুদান ফর্মটি পূরণ করুন'
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
          <h1 className="text-lg font-bold text-gray-900">আর্থিক অনুদান</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-md space-y-4">
        {/* Payment Methods */}
        <Card className="shadow-sm border-0 bg-white">
          <CardContent className="space-y-4 p-6">
            <div className="grid grid-cols-1 gap-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="bg-gray-50 rounded-xl p-3 text-center"
                >
                  <img
                    src={method.logo}
                    alt={method.name}
                    className="h-8 mx-auto mb-2 object-contain"
                  />
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                    {method.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-sm text-gray-600">{method.number}</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleCopyNumber(method.number)}
                      className="h-6 w-6"
                    >
                      {copiedNumber === method.number ? (
                        <Check className="h-3 w-3 text-green-600" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment Instructions */}
        <Card className="bg-blue-50 border-blue-200 shadow-sm border-0">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-2 text-sm">
                  পেমেন্ট নির্দেশাবলী:
                </h4>
                <ol className="space-y-1 text-xs text-blue-800">
                  {instructions.map((instruction, index) => (
                    <li key={index}>
                      {index + 1}. {instruction}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Donation Form Link */}
        <Card className="shadow-sm border-0 bg-gradient-to-r from-blood-50 to-pink-50 border-blood-200">
          <CardHeader className="text-center pb-3">
            <div className="w-10 h-10 bg-blood-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <CreditCard className="h-5 w-5 text-blood-600" />
            </div>
            <CardTitle className="text-base text-blood-900">যোগাযোগের জন্য</CardTitle>
            <CardDescription className="text-blood-800 text-sm">
              অনুদান সংক্রান্ত যেকোনো প্রশ্নের জন্য যোগাযোগ করুন
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button className="w-full h-10 bg-blood-600 hover:bg-blood-700 rounded-xl" asChild>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeRg5unKNOp5OAalKuoPS0FZ2y1W7TUEt5MXvhUKIv-lnt7NA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                যোগাযোগ ফর্ম খুলুন
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
