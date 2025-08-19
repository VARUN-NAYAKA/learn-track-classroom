import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const LoginForm = ({ type, onLogin }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const idLabel = type === "student" ? "USN" : "Employee ID";
  const title = type === "student" ? "Student Portal" : "Faculty Portal";

  const handleSubmit = (isSignUp) => {
    if (isSignUp && password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    onLogin({ id, password, isSignUp });
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-card backdrop-blur-sm border-0 shadow-glow">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-primary-foreground">{title}</CardTitle>
        <CardDescription className="text-primary-foreground/70">
          Access your classroom dashboard
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="signin" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="signin-id" className="text-primary-foreground">{idLabel}</Label>
              <Input
                id="signin-id"
                type="text"
                placeholder={`Enter your ${idLabel.toLowerCase()}`}
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="bg-background/50 border-accent/30 text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signin-password" className="text-primary-foreground">Password</Label>
              <Input
                id="signin-password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-background/50 border-accent/30 text-foreground"
              />
            </div>
            <Button 
              onClick={() => handleSubmit(false)}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              disabled={!id || !password}
            >
              Sign In
            </Button>
          </TabsContent>
          
          <TabsContent value="signup" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="signup-id" className="text-primary-foreground">{idLabel}</Label>
              <Input
                id="signup-id"
                type="text"
                placeholder={`Enter your ${idLabel.toLowerCase()}`}
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="bg-background/50 border-accent/30 text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-password" className="text-primary-foreground">Password</Label>
              <Input
                id="signup-password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-background/50 border-accent/30 text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-primary-foreground">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-background/50 border-accent/30 text-foreground"
              />
            </div>
            <Button 
              onClick={() => handleSubmit(true)}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              disabled={!id || !password || !confirmPassword}
            >
              Sign Up
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};