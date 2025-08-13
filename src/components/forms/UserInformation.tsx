import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const industries = [
  "Technology", "Healthcare", "Finance", "E-commerce", "Education", 
  "Marketing", "Manufacturing", "Real Estate", "Consulting", "Other"
];

interface UserInfo {
  name: string;
  email: string;
  phone: string;
  industry: string;
}

interface UserInformationProps {
  userInfo: UserInfo;
  onInfoChange: (field: keyof UserInfo, value: string) => void;
  errors: Partial<UserInfo>;
}

export default function UserInformation({ userInfo, onInfoChange, errors }: UserInformationProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Tell us about yourself</h2>
        <p className="text-muted-foreground">We'll use this to personalize your experience</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="John Doe"
            value={userInfo.name}
            onChange={(e) => onInfoChange('name', e.target.value)}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@company.com"
            value={userInfo.email}
            onChange={(e) => onInfoChange('email', e.target.value)}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            placeholder="+1 (555) 123-4567"
            value={userInfo.phone}
            onChange={(e) => onInfoChange('phone', e.target.value)}
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="industry">Industry</Label>
          <Select onValueChange={(value) => onInfoChange('industry', value)} value={userInfo.industry}>
            <SelectTrigger>
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.industry && (
            <p className="text-sm text-destructive">{errors.industry}</p>
          )}
        </div>
      </div>
    </div>
  );
}