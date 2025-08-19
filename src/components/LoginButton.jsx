import { Button } from "@/components/ui/button";

export const LoginButton = ({ children, variant = "primary", onClick }) => {
  const isPrimary = variant === "primary";
  
  return (
    <Button
      onClick={onClick}
      className={`
        relative px-8 py-3 font-semibold text-lg rounded-xl transition-all duration-300 min-w-[200px]
        ${isPrimary 
          ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg hover:shadow-xl hover:scale-105" 
          : "bg-transparent text-primary-foreground border-2 border-primary-foreground/30 hover:border-primary-foreground hover:bg-primary-foreground/10"
        }
      `}
    >
      {children}
    </Button>
  );
};