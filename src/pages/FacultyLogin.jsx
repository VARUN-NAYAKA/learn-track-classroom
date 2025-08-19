import { LoginForm } from "@/components/auth/LoginForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FacultyLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (credentials) => {
    // TODO: Connect to backend authentication
    console.log("Faculty login/signup:", credentials);
    // For now, just log the credentials
    alert(`${credentials.isSignUp ? 'Signup' : 'Login'} successful! Employee ID: ${credentials.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 text-primary-foreground hover:bg-primary-foreground/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
        
        <LoginForm type="faculty" onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default FacultyLogin;