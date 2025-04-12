import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookOpen, Brain, GraduationCap, LineChart, Users } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import AssessmentSection from './components/AssessmentSection';
import Results from './components/Results';
import Resources from './components/Resources';
import Mentorship from './components/Mentorship';
import Footer from './components/Footer';

function App() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-indigo-600" />,
      title: "AI-Powered Assessment",
      description: "Personalized evaluation of your skills, interests, and potential career paths"
    },
    {
      icon: <LineChart className="w-8 h-8 text-indigo-600" />,
      title: "Career Tracking",
      description: "Real-time progress monitoring and personalized milestone achievements"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
      title: "Custom Learning Paths",
      description: "Tailored educational content and skill development resources"
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Mentorship Network",
      description: "Connect with industry professionals and career mentors"
    }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features features={features} />
              <AssessmentSection />
            </>
          } />
          <Route path="/results" element={<Results />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/mentorship" element={<Mentorship />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;