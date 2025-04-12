import React, { useState } from 'react';
import { Users, Star, Calendar, Clock, Briefcase, MessageSquare, Award, Target } from 'lucide-react';

const Mentorship = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const mentors = [
    {
      id: 1,
      name: 'Sarah Chen',
      title: 'Senior UX Designer',
      company: 'Design Co',
      experience: '8 years',
      industry: 'design',
      expertise: ['UI/UX Design', 'Product Design', 'Design Systems'],
      rating: 4.9,
      availability: 'Weekly',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      title: 'Tech Lead',
      company: 'Tech Solutions Inc',
      experience: '12 years',
      industry: 'technology',
      expertise: ['Software Architecture', 'Team Leadership', 'Cloud Computing'],
      rating: 4.8,
      availability: 'Bi-weekly',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'Creative Director',
      company: 'Creative Studios',
      experience: '10 years',
      industry: 'creative',
      expertise: ['Art Direction', 'Brand Strategy', 'Creative Leadership'],
      rating: 4.7,
      availability: 'Weekly',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 4,
      name: 'David Kim',
      title: 'Product Manager',
      company: 'Innovation Labs',
      experience: '7 years',
      industry: 'technology',
      expertise: ['Product Strategy', 'Agile', 'User Research'],
      rating: 4.9,
      availability: 'Monthly',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      title: 'Marketing Director',
      company: 'Global Marketing',
      experience: '15 years',
      industry: 'marketing',
      expertise: ['Digital Marketing', 'Brand Development', 'Strategy'],
      rating: 4.8,
      availability: 'Weekly',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 6,
      name: 'Michael Foster',
      title: 'Senior Developer',
      company: 'Tech Innovators',
      experience: '9 years',
      industry: 'technology',
      expertise: ['Full-stack Development', 'Architecture', 'Mentoring'],
      rating: 4.7,
      availability: 'Bi-weekly',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }
  ];

  const filteredMentors = selectedIndustry === 'all' 
    ? mentors 
    : mentors.filter(mentor => mentor.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Find Your Mentor
          </h1>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Connect with experienced professionals who can guide you on your career journey
          </p>
        </div>

        {/* Program Benefits */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Program Benefits</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            {[
              {
                icon: <Users className="w-6 h-6 text-indigo-600" />,
                title: '1:1 Mentorship',
                description: 'Personalized guidance from industry experts'
              },
              {
                icon: <Target className="w-6 h-6 text-indigo-600" />,
                title: 'Goal Setting',
                description: 'Define and achieve your career objectives'
              },
              {
                icon: <MessageSquare className="w-6 h-6 text-indigo-600" />,
                title: 'Regular Sessions',
                description: 'Scheduled meetings with your mentor'
              },
              {
                icon: <Award className="w-6 h-6 text-indigo-600" />,
                title: 'Skill Development',
                description: 'Learn from experienced professionals'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mentor Filtering */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Available Mentors</h2>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="all">All Industries</option>
              <option value="technology">Technology</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="creative">Creative</option>
            </select>
          </div>

          {/* Mentor Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {filteredMentors.map((mentor) => (
              <div key={mentor.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center">
                    <img className="h-16 w-16 rounded-full" src={mentor.image} alt={mentor.name} />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
                      <p className="text-gray-600">{mentor.title}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center text-gray-600">
                      <Briefcase className="w-5 h-5 mr-2 text-indigo-600" />
                      <span>{mentor.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-2 text-indigo-600" />
                      <span>{mentor.experience} experience</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Star className="w-5 h-5 mr-2 text-yellow-400" />
                      <span>{mentor.rating} rating</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
                      <span>{mentor.availability} availability</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="mt-6 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                    Schedule Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;