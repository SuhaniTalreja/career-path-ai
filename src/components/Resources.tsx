import React from 'react';
import { BookOpen, Video, Award, Users, Laptop, Brain, Target, FileText, GraduationCap } from 'lucide-react';

const Resources = () => {
  const resources = {
    courses: [
      {
        title: 'Career Development Fundamentals',
        provider: 'Coursera',
        duration: '6 weeks',
        type: 'Online Course',
        level: 'Beginner',
        icon: <GraduationCap className="w-6 h-6 text-indigo-600" />,
        link: '#'
      },
      {
        title: 'Professional Skills Masterclass',
        provider: 'LinkedIn Learning',
        duration: '8 weeks',
        type: 'Video Course',
        level: 'Intermediate',
        icon: <Video className="w-6 h-6 text-indigo-600" />,
        link: '#'
      },
      {
        title: 'Industry Certification Prep',
        provider: 'edX',
        duration: '12 weeks',
        type: 'Certificate Program',
        level: 'Advanced',
        icon: <Award className="w-6 h-6 text-indigo-600" />,
        link: '#'
      }
    ],
    tools: [
      {
        title: 'Resume Builder Pro',
        description: 'Create professional resumes with AI-powered suggestions',
        category: 'Career Tools',
        icon: <FileText className="w-6 h-6 text-indigo-600" />,
        link: '#'
      },
      {
        title: 'Skills Assessment Platform',
        description: 'Evaluate your professional competencies',
        category: 'Assessment',
        icon: <Target className="w-6 h-6 text-indigo-600" />,
        link: '#'
      },
      {
        title: 'Interview Simulator',
        description: 'Practice with AI-powered mock interviews',
        category: 'Practice',
        icon: <Users className="w-6 h-6 text-indigo-600" />,
        link: '#'
      }
    ],
    guides: [
      {
        title: 'Career Transition Guide',
        description: 'Step-by-step guide for changing careers',
        format: 'PDF Guide',
        icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
        link: '#'
      },
      {
        title: 'Technical Interview Handbook',
        description: 'Comprehensive guide for technical interviews',
        format: 'Interactive Guide',
        icon: <Laptop className="w-6 h-6 text-indigo-600" />,
        link: '#'
      },
      {
        title: 'Soft Skills Development',
        description: 'Essential interpersonal skills guide',
        format: 'Online Resource',
        icon: <Brain className="w-6 h-6 text-indigo-600" />,
        link: '#'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Career Resources
          </h1>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Access comprehensive tools, guides, and courses to accelerate your career growth
          </p>
        </div>

        {/* Featured Courses */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Courses</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {resources.courses.map((course, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {course.icon}
                    <span className="ml-3 text-sm font-medium text-indigo-600">{course.type}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">Provider: {course.provider}</p>
                    <p className="text-gray-600">Duration: {course.duration}</p>
                    <p className="text-gray-600">Level: {course.level}</p>
                  </div>
                  <a
                    href={course.link}
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Tools */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Career Tools</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {resources.tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {tool.icon}
                    <span className="ml-3 text-sm font-medium text-indigo-600">{tool.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.title}</h3>
                  <p className="text-gray-600">{tool.description}</p>
                  <a
                    href={tool.link}
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Access Tool
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Guides */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Career Guides</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {resources.guides.map((guide, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {guide.icon}
                    <span className="ml-3 text-sm font-medium text-indigo-600">{guide.format}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{guide.title}</h3>
                  <p className="text-gray-600">{guide.description}</p>
                  <a
                    href={guide.link}
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Download Guide
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;