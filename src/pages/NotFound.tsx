
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-md">
        <Card className="shadow-sm border-0 bg-white text-center">
          <CardContent className="p-8">
            <div className="w-20 h-20 bg-blood-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-blood-600">404</span>
            </div>
            <h1 className="text-lg font-bold text-gray-900 mb-2">পেজটি খুঁজে পাওয়া যায়নি</h1>
            <p className="text-sm text-gray-600 mb-6">
              আপনি যে পেজটি খুঁজছেন সেটি বিদ্যমান নেই বা সরানো হয়েছে।
            </p>
            <Button asChild className="w-full bg-blood-600 hover:bg-blood-700 h-10 rounded-xl">
              <a href="/">হোমে ফিরে যান</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
