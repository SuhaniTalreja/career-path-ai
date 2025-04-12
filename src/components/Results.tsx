import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CareerRecommendations from './CareerRecommendations';
import { CheckCircle } from 'lucide-react';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;

  if (!formData) {
    navigate('/');
    return null;
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
            Your Career Assessment Results
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Based on your responses, we've prepared personalized career recommendations for you.
          </p>
        </div>
        
        <div className="mt-12">
          <CareerRecommendations formData={formData} />
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Start New Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;