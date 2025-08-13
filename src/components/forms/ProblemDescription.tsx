import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ProblemDescriptionProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function ProblemDescription({ value, onChange, error }: ProblemDescriptionProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">What challenges are you facing?</h2>
        <p className="text-muted-foreground">Help us understand your current situation</p>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="problem">Describe your current challenges</Label>
        <Textarea
          id="problem"
          placeholder="Tell us about the problems you're looking to solve..."
          className="min-h-[120px]"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
      </div>
    </div>
  );
}