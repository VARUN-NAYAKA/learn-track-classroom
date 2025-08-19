import { Card } from "@/components/ui/card";

export const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <Card className="group relative overflow-hidden border-0 bg-gradient-card backdrop-blur-sm shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 p-6">
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/20">
            <Icon className="w-6 h-6 text-accent" />
          </div>
          <h3 className="text-lg font-semibold text-primary-foreground">{title}</h3>
        </div>
        <p className="text-primary-foreground/80 text-sm leading-relaxed">{description}</p>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Card>
  );
};