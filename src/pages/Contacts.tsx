
import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Code,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailBody = `Name: ${formData.name}\n\nMessage:\n${formData.message}`;

    if (isMobile()) {
      const mailtoLink = `mailto:bobdo5800@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
    } else {
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=bobdo5800@gmail.com&su=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(emailBody)}`;
      window.open(gmailLink, '_blank');
    }

    // Reset form
    setFormData({
      name: "",
      subject: "",
      message: ""
    });

    setIsSubmitting(false);
    
    toast({
      title: isMobile() ? "ইমেইল অ্যাপ খোলা হয়েছে!" : "জিমেইল সফলভাবে খোলা হয়েছে!",
      description: isMobile() 
        ? "অনুগ্রহ করে আপনার ইমেইল অ্যাপ থেকে বার্তা পাঠান।" 
        : "অনুগ্রহ করে খোলা জিমেইল থেকে আপনার বার্তা পাঠান।",
    });
  };

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
          <h1 className="text-lg font-bold text-gray-900">যোগাযোগ করুন</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-md space-y-4">
        {/* Contact Form */}
        <Card className="shadow-sm border-0 bg-white">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  আপনার নাম
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1"
                  placeholder="আপনার পূর্ণ নাম লিখুন"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                  বিষয়
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1"
                  placeholder="এটি কী সম্পর্কে?"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                  বার্তা
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 resize-none"
                  placeholder="আপনার জিজ্ঞাসা সম্পর্কে আরও বলুন..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blood-600 hover:bg-blood-700 py-3"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                    {isMobile() ? 'ইমেইল অ্যাপ খোলা হচ্ছে...' : 'জিমেইল খোলা হচ্ছে...'}
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    বার্তা পাঠান
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="shadow-sm border-0">
          <CardContent className="p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-4 text-center">যোগাযোগ</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blood-600" />
                  <div>
                    <p className="text-sm font-medium">পরিচালক</p>
                    <p className="text-sm text-gray-600">01780-703075</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open('tel:01780703075', '_self')}
                >
                  কল করুন
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blood-600" />
                  <div>
                    <p className="text-sm font-medium">জরুরি হটলাইন</p>
                    <p className="text-sm text-gray-600">01722-528164</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open('tel:01722528164', '_self')}
                >
                  কল করুন
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blood-600" />
                  <div>
                    <p className="text-sm font-medium">ইমেইল</p>
                    <p className="text-sm text-gray-600">bobdo5800@gmail.com</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open('mailto:bobdo5800@gmail.com', '_self')}
                >
                  ইমেইল করুন
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Code className="h-5 w-5 text-blood-600" />
                  <div>
                    <p className="text-sm font-medium">ডেভলপার সহায়তা</p>
                    <p className="text-sm text-gray-600">ridoan.zisan@gmail.com</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open('mailto:ridoan.zisan@gmail.com', '_self')}
                >
                  ইমেইল করুন
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Address & Working Hours */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="shadow-sm border-0">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blood-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-blood-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">ঠিকানা</h3>
              <p className="text-gray-600 text-sm">সাতমাথা, বগুড়া</p>
              <p className="text-gray-600 text-sm">বাংলাদেশ</p>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-0">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blood-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-blood-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">কর্মঘণ্টা</h3>
              <p className="text-gray-600 text-sm">জরুরি সেবা</p>
              <p className="text-gray-600 text-sm">২৪/৭ উপলব্ধ</p>
            </CardContent>
          </Card>
        </div>

        {/* Google Map */}
        <Card className="shadow-sm border-0">
          <CardContent className="p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-4 text-center">আমাদের অবস্থান</h3>
            <div className="w-full aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.454787351233!2d89.36973922442924!3d24.848312245745298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc5588105b94a3%3A0x5502254b1806651f!2sBogra%20Online%20Blood%20Donation%20Organization%20(BOBDO)!5e0!3m2!1sen!2sbd!4v1744263007774!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BOBDO-এর অবস্থান গুগল ম্যাপে"
              ></iframe>
            </div>
            <p className="text-gray-600 text-center mt-4 text-sm">বগুড়া, বাংলাদেশ</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contacts;
