import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThankYou() {
  return (
    <div className="text-center space-y-6 animate-scale-in">
      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle2 className="h-8 w-8 text-accent" />
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-2">Thank you!</h2>
        <p className="text-muted-foreground mb-4">
          We've received your information and someone from our team will get in touch with you shortly.
        </p>
        <p className="text-sm text-muted-foreground">
          You can expect to hear from us within 24 hours.
        </p>
      </div>
      
      <Button 
        onClick={() => window.location.href = '/'}
        className="w-full"
      >
        Return to Homepage
      </Button>
    </div>
  );
}