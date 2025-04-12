import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  type: 'text' | 'select' | 'multiselect' | 'range';
  options?: string[];
}

const AssessmentSection = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      email: '',
      age: '',
      location: ''
    },
    education: {
      level: '',
      field: '',
      institution: '',
      graduationYear: ''
    },
    interests: {
      fields: [] as string[],
      skills: [] as string[],
      workStyle: '',
      values: [] as string[]
    },
    goals: {
      shortTerm: '',
      longTerm: '',
      salary: '',
      workEnvironment: [] as string[]
    }
  });

  const steps = [
    { id: 1, name: 'Personal Info' },
    { id: 2, name: 'Education' },
    { id: 3, name: 'Interests' },
    { id: 4, name: 'Goals' },
  ];

  const questions = {
    1: [
      { id: 1, text: 'Full Name', type: 'text' },
      { id: 2, text: 'Email Address', type: 'text' },
      { id: 3, text: 'Age', type: 'text' },
      { id: 4, text: 'Location', type: 'text' }
    ],
    2: [
      { 
        id: 1, 
        text: 'Education Level', 
        type: 'select',
        options: [
          'High School',
          'Some College',
          "Associate's Degree",
          "Bachelor's Degree",
          "Master's Degree",
          'Doctorate',
          'Professional Certification',
          'Trade School',
          'Self-Taught'
        ]
      },
      { id: 2, text: 'Field of Study', type: 'text' },
      { id: 3, text: 'Institution Name', type: 'text' },
      { id: 4, text: 'Graduation Year', type: 'text' }
    ],
    3: [
      {
        id: 1,
        text: 'Which fields interest you the most?',
        type: 'multiselect',
        options: [
          'Technology',
          'Healthcare',
          'Business',
          'Education',
          'Arts & Design',
          'Science & Research',
          'Engineering',
          'Social Services',
          'Law & Legal',
          'Media & Communication',
          'Finance & Banking',
          'Environmental',
          'Architecture',
          'Manufacturing',
          'Hospitality',
          'Government',
          'Non-profit',
          'Sports & Recreation',
          'Transportation',
          'Real Estate',
          'Agriculture',
          'Energy',
          'Entertainment',
          'Fashion',
          'Marketing & Advertising'
        ]
      },
      {
        id: 2,
        text: 'What are your strongest skills?',
        type: 'multiselect',
        options: [
          'Communication',
          'Problem Solving',
          'Leadership',
          'Technical',
          'Creative',
          'Analytical',
          'Organization',
          'Teamwork',
          'Project Management',
          'Research',
          'Writing',
          'Public Speaking',
          'Data Analysis',
          'Customer Service',
          'Strategic Planning',
          'Design',
          'Programming',
          'Sales',
          'Marketing',
          'Financial Analysis',
          'Teaching',
          'Negotiation',
          'Critical Thinking',
          'Time Management',
          'Adaptability',
          'Innovation',
          'Decision Making',
          'Conflict Resolution',
          'Emotional Intelligence',
          'Cross-cultural Communication'
        ]
      },
      {
        id: 3,
        text: 'Preferred work style',
        type: 'select',
        options: [
          'Remote',
          'Hybrid',
          'Office-based',
          'Flexible',
          'Field Work',
          'Travel-based',
          'International',
          'Project-based',
          'Consulting'
        ]
      },
      {
        id: 4,
        text: 'What values are most important to you?',
        type: 'multiselect',
        options: [
          'Work-Life Balance',
          'Innovation',
          'Social Impact',
          'Financial Success',
          'Professional Growth',
          'Job Security',
          'Independence',
          'Creativity',
          'Leadership',
          'Environmental Impact',
          'Global Reach',
          'Community Focus',
          'Diversity & Inclusion',
          'Entrepreneurship',
          'Research & Discovery'
        ]
      }
    ],
    4: [
      { id: 1, text: 'Short-term career goal (1-2 years)', type: 'text' },
      { id: 2, text: 'Long-term career goal (5+ years)', type: 'text' },
      {
        id: 3,
        text: 'Expected salary range',
        type: 'select',
        options: [
          'Under $30,000',
          '$30,000 - $50,000',
          '$50,000 - $75,000',
          '$75,000 - $100,000',
          '$100,000 - $150,000',
          '$150,000 - $200,000',
          '$200,000+'
        ]
      },
      {
        id: 4,
        text: 'Preferred work environment',
        type: 'multiselect',
        options: [
          'Startup',
          'Corporate',
          'Non-profit',
          'Government',
          'Educational',
          'Healthcare',
          'Technology',
          'Research Institution',
          'Creative Agency',
          'Consulting Firm',
          'Small Business',
          'International Organization',
          'Self-employed',
          'Social Enterprise',
          'Media Company'
        ]
      }
    ]
  };

  const handleInputChange = (step: number, questionId: number, value: string | string[]) => {
    const section = steps[step - 1].name.toLowerCase().replace(' ', '');
    let field = '';
    
    switch (step) {
      case 1:
        switch (questionId) {
          case 1: field = 'name'; break;
          case 2: field = 'email'; break;
          case 3: field = 'age'; break;
          case 4: field = 'location'; break;
        }
        break;
      case 2:
        switch (questionId) {
          case 1: field = 'level'; break;
          case 2: field = 'field'; break;
          case 3: field = 'institution'; break;
          case 4: field = 'graduationYear'; break;
        }
        break;
      case 3:
        switch (questionId) {
          case 1: field = 'fields'; break;
          case 2: field = 'skills'; break;
          case 3: field = 'workStyle'; break;
          case 4: field = 'values'; break;
        }
        break;
      case 4:
        switch (questionId) {
          case 1: field = 'shortTerm'; break;
          case 2: field = 'longTerm'; break;
          case 3: field = 'salary'; break;
          case 4: field = 'workEnvironment'; break;
        }
        break;
    }
    
    if (field) {
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section as keyof typeof prev],
          [field]: value
        }
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      // Here you would typically send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to results page with form data
      navigate('/results', { state: { formData } });
    } catch (error) {
      console.error('Error submitting assessment:', error);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderQuestion = (question: Question) => {
    switch (question.type) {
      case 'text':
        return (
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={(e) => handleInputChange(currentStep, question.id, e.target.value)}
          />
        );
      case 'select':
        return (
          <select
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={(e) => handleInputChange(currentStep, question.id, e.target.value)}
          >
            <option value="">Select an option</option>
            {question.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'multiselect':
        return (
          <div className="mt-2 space-y-2">
            {question.options?.map((option) => (
              <label key={option} className="inline-flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                  value={option}
                  onChange={(e) => {
                    const field = question.id === 1 ? 'fields' : question.id === 2 ? 'skills' : question.id === 4 ? 'values' : 'workEnvironment';
                    const section = steps[currentStep - 1].name.toLowerCase().replace(' ', '') as keyof typeof formData;
                    const currentValues = (formData[section] as any)[field] || [];
                    const newValues = e.target.checked
                      ? [...currentValues, option]
                      : currentValues.filter((v: string) => v !== option);
                    handleInputChange(currentStep, question.id, newValues);
                  }}
                />
                <span className="ml-2">{option}</span>
              </label>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div id="assessment-section" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Career Assessment
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Let's discover your ideal career path together
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <nav aria-label="Progress">
            <ol className="flex items-center justify-between">
              {steps.map((step) => (
                <li key={step.id} className="relative">
                  {step.id < currentStep ? (
                    <div className="flex items-center">
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full">
                        <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="ml-2 text-sm font-medium text-indigo-600">{step.name}</span>
                    </div>
                  ) : step.id === currentStep ? (
                    <div className="flex items-center">
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full">
                        <span className="h-2.5 w-2.5 bg-indigo-600 rounded-full" />
                      </span>
                      <span className="ml-2 text-sm font-medium text-indigo-600">{step.name}</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full">
                        <span className="h-2.5 w-2.5 bg-transparent rounded-full" />
                      </span>
                      <span className="ml-2 text-sm font-medium text-gray-500">{step.name}</span>
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-8 bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="space-y-6">
                {questions[currentStep as keyof typeof questions].map((question) => (
                  <div key={question.id}>
                    <label className="block text-sm font-medium text-gray-700">
                      {question.text}
                    </label>
                    {renderQuestion(question)}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm ${
                    currentStep === 1
                      ? 'bg-gray-200 cursor-not-allowed'
                      : 'text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {currentStep === steps.length ? 'Submit' : 'Next'}
                  {currentStep !== steps.length && <ArrowRight className="w-4 h-4 ml-2" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentSection;