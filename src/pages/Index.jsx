import React from "react";
import { FeatureCard } from "@/components/FeatureCard";
import { LoginButton } from "@/components/LoginButton";
import { Users, MessageSquare, Calendar, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleStudentLogin = () => {
    navigate("/student-login");
  };

  const handleFacultyLogin = () => {
    navigate("/faculty-login");
  };

  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-space font-bold bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent mb-6 tracking-tight drop-shadow-lg">
            CLASSROOM
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Track what you have learned in each class, across subjects and modules, 
            while aligning with syllabus deadlines and protocols.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <FeatureCard
            icon={Users}
            title="Students"
            description="Revise based on actual class flow."
          />
          <FeatureCard
            icon={MessageSquare}
            title="Feedback"
            description="Request revision or flag unclear topics."
          />
          <FeatureCard
            icon={Calendar}
            title="SyllabusProtocols, ModuleDeadlines"
            description="Stay aligned with curriculum timelines and academic protocols."
          />
          <FeatureCard
            icon={BookOpen}
            title="Structure"
            description="Who teaches what, and how it's structured."
          />
        </div>

        {/* Login Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <LoginButton variant="primary" onClick={handleStudentLogin}>
            Student Login
          </LoginButton>
          <LoginButton variant="secondary" onClick={handleFacultyLogin}>
            Faculty Login
          </LoginButton>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-primary-foreground/70 text-lg">
            Challenge your learning journey with structured progress tracking or teach with clarity!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;