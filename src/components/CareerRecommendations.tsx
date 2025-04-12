import React from 'react';
import { Briefcase, GraduationCap, LineChart, BookOpen, Trophy, Target, Lightbulb, Users, Clock, TrendingUp } from 'lucide-react';

interface CareerRecommendationsProps {
  formData: {
    personalInfo: any;
    education: any;
    interests: {
      fields: string[];
      skills: string[];
      workStyle: string;
    };
    goals: {
      shortTerm: string;
      longTerm: string;
      salary: string;
      workEnvironment: string[];
    };
  };
}

const CareerRecommendations: React.FC<CareerRecommendationsProps> = ({ formData }) => {
  const getRecommendedCareers = () => {
    const { fields, skills } = formData.interests;
    
    const careerSuggestions = {
      'Technology': [
        { 
          title: 'Software Developer',
          salary: '$70,000 - $150,000',
          growth: 'High',
          skills: ['JavaScript', 'Python', 'Cloud Computing', 'Agile'],
          education: ["Bachelor's in Computer Science", 'Coding Bootcamp'],
          certifications: ['AWS Certified Developer', 'Google Cloud Professional']
        },
        { 
          title: 'Data Scientist',
          salary: '$80,000 - $160,000',
          growth: 'Very High',
          skills: ['Python', 'Machine Learning', 'Statistics', 'SQL'],
          education: ["Master's in Data Science", 'Statistics'],
          certifications: ['TensorFlow Developer', 'IBM Data Science Professional']
        }
      ],
      'Arts & Design': [
        {
          title: 'UI/UX Designer',
          salary: '$65,000 - $120,000',
          growth: 'High',
          skills: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
          education: ["Bachelor's in Design", 'HCI Certificate'],
          certifications: ['Google UX Design Certificate', 'Certified Usability Analyst']
        },
        {
          title: 'Art Director',
          salary: '$75,000 - $140,000',
          growth: 'Moderate',
          skills: ['Creative Direction', 'Brand Strategy', 'Team Leadership', 'Visual Design'],
          education: ["Bachelor's in Fine Arts", 'Graphic Design'],
          certifications: ['Adobe Certified Expert', 'Brand Management Certificate']
        },
        {
          title: 'Motion Graphics Designer',
          salary: '$60,000 - $110,000',
          growth: 'High',
          skills: ['After Effects', 'Cinema 4D', 'Animation', 'Storyboarding'],
          education: ["Bachelor's in Animation", 'Digital Arts'],
          certifications: ['Adobe After Effects Certification', 'Autodesk Certified Professional']
        },
        {
          title: 'Illustrator',
          salary: '$45,000 - $95,000',
          growth: 'Moderate',
          skills: ['Digital Illustration', 'Character Design', 'Color Theory', 'Traditional Art'],
          education: ["Bachelor's in Illustration", 'Fine Arts'],
          certifications: ['Adobe Certified Professional', 'Digital Art Certificate']
        }
      ],
      'Media & Communication': [
        {
          title: 'Content Strategist',
          salary: '$65,000 - $120,000',
          growth: 'High',
          skills: ['Content Planning', 'SEO', 'Analytics', 'Storytelling'],
          education: ["Bachelor's in Communications", 'Marketing'],
          certifications: ['Content Marketing Certificate', 'Google Analytics']
        },
        {
          title: 'Digital Producer',
          salary: '$70,000 - $130,000',
          growth: 'High',
          skills: ['Project Management', 'Digital Production', 'Team Coordination', 'Budget Management'],
          education: ["Bachelor's in Media Production", 'Digital Media'],
          certifications: ['PMP', 'Agile Certified Practitioner']
        }
      ],
      'Entertainment': [
        {
          title: 'Game Designer',
          salary: '$60,000 - $120,000',
          growth: 'High',
          skills: ['Game Design', 'Unity/Unreal', 'Level Design', 'Scripting'],
          education: ["Bachelor's in Game Design", 'Computer Science'],
          certifications: ['Unity Certified Developer', 'Unreal Engine Certification']
        },
        {
          title: 'Film/Video Editor',
          salary: '$55,000 - $100,000',
          growth: 'Moderate',
          skills: ['Video Editing', 'Color Grading', 'Sound Design', 'Storytelling'],
          education: ["Bachelor's in Film Production", 'Digital Media'],
          certifications: ['Adobe Premiere Pro', 'DaVinci Resolve']
        },
        {
          title: 'Music Producer',
          salary: '$45,000 - $150,000',
          growth: 'Moderate',
          skills: ['Music Production', 'Audio Engineering', 'Sound Design', 'DAW Proficiency'],
          education: ["Bachelor's in Music Production", 'Audio Engineering'],
          certifications: ['Pro Tools Certification', 'Ableton Live Certificate']
        }
      ],
      'Fashion': [
        {
          title: 'Fashion Designer',
          salary: '$50,000 - $120,000',
          growth: 'Moderate',
          skills: ['Design', 'Pattern Making', 'Trend Analysis', 'Illustration'],
          education: ["Bachelor's in Fashion Design", 'Fashion Institute'],
          certifications: ['Fashion Design Certificate', 'CAD Fashion Design']
        },
        {
          title: 'Fashion Marketing Manager',
          salary: '$65,000 - $110,000',
          growth: 'High',
          skills: ['Marketing Strategy', 'Brand Management', 'Digital Marketing', 'Trend Forecasting'],
          education: ["Bachelor's in Fashion Marketing", 'Business'],
          certifications: ['Fashion Marketing Certificate', 'Digital Marketing']
        }
      ],
      'Environmental': [
        {
          title: 'Environmental Scientist',
          salary: '$55,000 - $100,000',
          growth: 'High',
          skills: ['Data Analysis', 'Research', 'Environmental Assessment', 'GIS'],
          education: ["Bachelor's in Environmental Science", 'Earth Sciences'],
          certifications: ['HAZWOPER Certification', 'GIS Certificate']
        },
        {
          title: 'Sustainability Consultant',
          salary: '$65,000 - $120,000',
          growth: 'Very High',
          skills: ['Environmental Planning', 'Sustainability Assessment', 'Project Management', 'Reporting'],
          education: ["Master's in Environmental Management", 'Sustainability'],
          certifications: ['LEED AP', 'Certified Sustainability Professional']
        }
      ],
      'Creative Writing': [
        {
          title: 'Screenwriter',
          salary: '$60,000 - $130,000',
          growth: 'Moderate',
          skills: ['Screenwriting', 'Story Structure', 'Character Development', 'Dialogue Writing'],
          education: ["Bachelor's in Film & Television", 'Creative Writing'],
          certifications: ['Screenwriting Certificate', 'Film Industry Workshops']
        },
        {
          title: 'Content Creator',
          salary: '$45,000 - $100,000',
          growth: 'High',
          skills: ['Writing', 'Social Media', 'Video Production', 'Storytelling'],
          education: ["Bachelor's in Communications", 'Digital Media'],
          certifications: ['Digital Marketing Certificate', 'Content Strategy']
        }
      ],
      'Performing Arts': [
        {
          title: 'Voice Actor',
          salary: '$40,000 - $100,000',
          growth: 'Moderate',
          skills: ['Voice Acting', 'Script Reading', 'Character Voices', 'Audio Production'],
          education: ["Bachelor's in Theater Arts", 'Voice Training'],
          certifications: ['Voice Acting Workshop', 'Audio Production Certificate']
        },
        {
          title: 'Dance Choreographer',
          salary: '$45,000 - $90,000',
          growth: 'Moderate',
          skills: ['Choreography', 'Dance Techniques', 'Music Theory', 'Performance Direction'],
          education: ["Bachelor's in Dance", 'Performing Arts'],
          certifications: ['Dance Education Certificate', 'Movement Direction']
        }
      ],
      'Photography': [
        {
          title: 'Commercial Photographer',
          salary: '$45,000 - $100,000',
          growth: 'Moderate',
          skills: ['Photography', 'Photo Editing', 'Lighting', 'Client Relations'],
          education: ["Bachelor's in Photography", 'Visual Arts'],
          certifications: ['Adobe Certified Professional', 'Photography Business']
        },
        {
          title: 'Photo Editor',
          salary: '$40,000 - $85,000',
          growth: 'Moderate',
          skills: ['Photo Editing', 'Color Correction', 'Retouching', 'Digital Asset Management'],
          education: ["Bachelor's in Photography", 'Digital Arts'],
          certifications: ['Adobe Photoshop Certification', 'Color Management']
        }
      ]
    };

    return fields.flatMap(field => 
      careerSuggestions[field as keyof typeof careerSuggestions] || []
    ).slice(0, 3);
  };

  const getSkillRecommendations = () => {
    const { fields, skills } = formData.interests;
    
    const skillSuggestions = {
      'Arts & Design': [
        'Visual Design',
        'Typography',
        'Color Theory',
        'Digital Illustration',
        'UI/UX Design',
        '3D Modeling'
      ],
      'Media & Communication': [
        'Content Strategy',
        'Social Media Management',
        'Video Production',
        'Copywriting',
        'Public Relations',
        'Brand Strategy'
      ],
      'Entertainment': [
        'Game Development',
        'Animation',
        'Video Editing',
        'Sound Design',
        'Scriptwriting',
        'Virtual Reality'
      ],
      'Fashion': [
        'Pattern Making',
        'Fashion Illustration',
        'Textile Design',
        'Trend Forecasting',
        'Merchandising',
        'Sustainable Fashion'
      ],
      'Environmental': [
        'Environmental Assessment',
        'GIS Mapping',
        'Sustainability Planning',
        'Waste Management',
        'Climate Analysis',
        'Environmental Policy'
      ],
      'Technology': [
        'Cloud Computing',
        'Machine Learning',
        'Cybersecurity',
        'DevOps',
        'Blockchain',
        'Mobile Development'
      ],
      'Creative Writing': [
        'Story Structure',
        'Character Development',
        'Dialogue Writing',
        'Script Analysis',
        'Creative Writing',
        'Editing'
      ],
      'Performing Arts': [
        'Voice Acting',
        'Movement',
        'Stage Direction',
        'Performance',
        'Choreography',
        'Music Theory'
      ],
      'Photography': [
        'Photography',
        'Photo Editing',
        'Lighting',
        'Composition',
        'Color Theory',
        'Digital Asset Management'
      ]
    };

    return Array.from(new Set(
      fields.flatMap(field => 
        skillSuggestions[field as keyof typeof skillSuggestions] || []
      )
    )).slice(0, 6);
  };

  const getLearningResources = (career: any) => {
    return {
      courses: [
        'Coursera Professional Certificates',
        'LinkedIn Learning Paths',
        'Udacity Nanodegrees',
        'Industry-specific training',
        'Specialized Bootcamps',
        'Professional Workshops'
      ],
      platforms: [
        'edX',
        'Udemy',
        'Pluralsight',
        'Skillshare',
        'MasterClass',
        'CreativeLive'
      ]
    };
  };

  const recommendedCareers = getRecommendedCareers();
  const recommendedSkills = getSkillRecommendations();

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 space-y-12">
      {/* Career Summary */}
      <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
        <h3 className="text-2xl font-bold text-indigo-900 mb-4">Your Career Profile</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start space-x-3">
            <Target className="w-6 h-6 text-indigo-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Interests</h4>
              <p className="text-gray-600">{formData.interests.fields.join(', ')}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Trophy className="w-6 h-6 text-indigo-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Top Skills</h4>
              <p className="text-gray-600">{formData.interests.skills.join(', ')}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Users className="w-6 h-6 text-indigo-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Work Style</h4>
              <p className="text-gray-600">{formData.interests.workStyle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Careers */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Briefcase className="w-7 h-7 text-indigo-600 mr-3" />
          Recommended Career Paths
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendedCareers.map((career, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">{career.title}</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                    <span>Growth: {career.growth}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2 text-blue-500" />
                    <span>{career.salary}</span>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Required Skills:</h5>
                  <div className="flex flex-wrap gap-2">
                    {career.skills.map((skill: string, i: number) => (
                      <span key={i} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Education Path:</h5>
                  <ul className="list-disc list-inside text-gray-600 text-sm">
                    {career.education.map((edu: string, i: number) => (
                      <li key={i}>{edu}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills to Develop */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Lightbulb className="w-7 h-7 text-indigo-600 mr-3" />
          Recommended Skills to Develop
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {recommendedSkills.map((skill, index) => (
            <div key={index} className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg p-4 border border-indigo-200">
              <p className="text-indigo-900 font-medium text-center">{skill}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Resources */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <BookOpen className="w-7 h-7 text-indigo-600 mr-3" />
          Learning Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-4">Recommended Courses</h4>
            <ul className="space-y-3">
              {getLearningResources(recommendedCareers[0]).courses.map((course, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <GraduationCap className="w-5 h-5 text-indigo-600 mr-2" />
                  {course}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-4">Learning Platforms</h4>
            <ul className="space-y-3">
              {getLearningResources(recommendedCareers[0]).platforms.map((platform, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <Target className="w-5 h-5 text-indigo-600 mr-2" />
                  {platform}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <LineChart className="w-7 h-7 text-indigo-600 mr-3" />
          Action Plan
        </h3>
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 rounded-full p-2">
                  <Target className="w-6 h-6 text-indigo-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Short-term Goals</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Research target companies</li>
                <li>• Update your portfolio</li>
                <li>• Start networking</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 rounded-full p-2">
                  <BookOpen className="w-6 h-6 text-indigo-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Learning Path</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Complete core certifications</li>
                <li>• Join online communities</li>
                <li>• Build your portfolio</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 rounded-full p-2">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Networking</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Attend industry events</li>
                <li>• Connect with professionals</li>
                <li>• Join creative communities</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 rounded-full p-2">
                  <TrendingUp className="w-6 h-6 text-indigo-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Growth Track</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Set milestone goals</li>
                <li>• Track progress</li>
                <li>• Seek mentorship</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerRecommendations;