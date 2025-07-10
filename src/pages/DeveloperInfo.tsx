
import React from 'react';
import { ExternalLink, Github, Linkedin, Mail, Globe, Code, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DeveloperInfo = () => {
  const skills = [
    { category: 'Frontend', skills: 'React, TypeScript, Tailwind CSS' },
    { category: 'Backend', skills: 'Node.js, Express, PostgreSQL' },
    { category: 'Tools', skills: 'Git, VS Code, Figma' },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/ridoan01', icon: <Github className="w-4 h-4" /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ridoan-zisan', icon: <Linkedin className="w-4 h-4" /> },
    { name: 'Email', url: 'mailto:ridoan.zisan@gmail.com', icon: <Mail className="w-4 h-4" /> },
    { name: 'Portfolio', url: 'https://ridoan-zisan.netlify.app', icon: <Globe className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <section className="bg-white pt-4 pb-6">
        <div className="container mx-auto px-4 max-w-md">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-blood-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Code className="h-8 w-8 text-blood-600" />
            </div>
            <h1 className="text-xl font-bold text-gray-900 mb-2">Developer Information</h1>
            <p className="text-sm text-gray-600">Meet the developer behind BOBDO's web platform</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-md space-y-6">
        {/* Profile Card */}
        <Card className="shadow-sm border-0 bg-white overflow-hidden">
          <div className="h-24 bg-gradient-to-r from-blue-500 to-purple-600 relative">
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <img
                src="/bobdo.png"
                alt="Developer"
                className="w-16 h-16 rounded-2xl border-4 border-white shadow-lg"
              />
            </div>
          </div>
          
          <CardContent className="pt-12 pb-4 text-center">
            <h2 className="text-lg font-bold text-gray-900 mb-1">Ridoan Zisan</h2>
            <p className="text-blood-600 mb-3 text-sm">Full Stack Developer</p>
            
            <div className="grid grid-cols-4 gap-2 mb-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-100 hover:bg-blood-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-blood-600 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <Button asChild className="w-full h-10 bg-blood-600 hover:bg-blood-700 rounded-xl shadow-md text-sm">
              <a
                href="https://ridoan-zisan.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Portfolio
                <ExternalLink className="ml-1 w-3 h-3" />
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* About Section */}
        <Card className="shadow-sm border-0 bg-white">
          <CardHeader className="pb-3">
            <div className="w-10 h-10 bg-blood-100 rounded-xl flex items-center justify-center mb-2">
              <User className="h-5 w-5 text-blood-600" />
            </div>
            <CardTitle className="text-lg">About the Developer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-gray-600 text-sm leading-relaxed">
              Ridoan Zisan is a passionate Full Stack Developer with expertise in modern web technologies. 
              He developed the BOBDO web platform using React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              With a focus on creating impactful solutions, Ridoan combines technical expertise with a 
              deep understanding of user needs to build applications that make a difference in people's lives.
            </p>
          </CardContent>
        </Card>

        {/* Technical Skills */}
        <Card className="shadow-sm border-0 bg-white pb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-3">
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">{skill.category}</h4>
                  <p className="text-gray-600 text-sm">{skill.skills}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DeveloperInfo;
