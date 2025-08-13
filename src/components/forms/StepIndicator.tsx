import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex items-center space-x-2">
        {[1, 2, 3, 4, 5].map((step) => (
          <div key={step} className="flex items-center">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                step <= currentStep
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {step < currentStep ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : (
                step
              )}
            </div>
            {step < 5 && (
              <div
                className={cn(
                  "w-12 h-0.5 mx-2 transition-colors",
                  step < currentStep ? "bg-primary" : "bg-muted"
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}