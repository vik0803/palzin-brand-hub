import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  products: z.array(z.string()).min(1, "Please select at least one product"),
  problem: z.string().min(10, "Please describe your problem in more detail"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  industry: z.string().min(1, "Please select your industry"),
  meetingDate: z.date().refine((date) => date !== undefined, {
    message: "Please select a meeting date",
  }),
  meetingTime: z.string().min(1, "Please select a meeting time"),
});

type FormData = z.infer<typeof formSchema>;

const products = [
  { id: "track", name: "Palzin Track", description: "Event tracking & analytics" },
  { id: "monitor", name: "Palzin Monitor", description: "Website & server monitoring" },
  { id: "feedback", name: "Palzin Feedback", description: "Customer feedback management" },
];

const industries = [
  "Technology", "Healthcare", "Finance", "E-commerce", "Education", 
  "Marketing", "Manufacturing", "Real Estate", "Consulting", "Other"
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

export default function GetStarted() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      products: [],
      problem: "",
      name: "",
      email: "",
      phone: "",
      industry: "",
      meetingTime: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    setCurrentStep(5);
  };

  const nextStep = async () => {
    let isValid = false;
    
    switch (currentStep) {
      case 1:
        isValid = selectedProducts.length > 0;
        if (isValid) {
          form.setValue("products", selectedProducts);
        }
        break;
      case 2:
        isValid = await form.trigger("problem");
        break;
      case 3:
        isValid = await form.trigger(["name", "email", "phone", "industry"]);
        break;
      case 4:
        isValid = await form.trigger(["meetingDate", "meetingTime"]);
        break;
    }

    if (isValid) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleProductToggle = (productId: string) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const StepIndicator = () => (
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

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Get Started</h1>
          <p className="text-muted-foreground">Let's find the perfect solution for your needs</p>
        </div>

        <StepIndicator />

        <Card className="shadow-lg">
          <CardContent className="p-8">
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {/* Step 1: Product Selection */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-2">Which products interest you?</h2>
                    <p className="text-muted-foreground">Select all that apply</p>
                  </div>
                  
                  <div className="grid gap-4">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className={cn(
                          "p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md",
                          selectedProducts.includes(product.id)
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        )}
                        onClick={() => handleProductToggle(product.id)}
                      >
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            checked={selectedProducts.includes(product.id)}
                            className="mt-1"
                          />
                          <div>
                            <h3 className="font-medium">{product.name}</h3>
                            <p className="text-sm text-muted-foreground">{product.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {selectedProducts.length === 0 && (
                    <p className="text-sm text-destructive text-center">Please select at least one product</p>
                  )}
                </div>
              )}

              {/* Step 2: Problem Description */}
              {currentStep === 2 && (
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
                      {...form.register("problem")}
                    />
                    {form.formState.errors.problem && (
                      <p className="text-sm text-destructive">{form.formState.errors.problem.message}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: User Information */}
              {currentStep === 3 && (
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
                        {...form.register("name")}
                      />
                      {form.formState.errors.name && (
                        <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        {...form.register("email")}
                      />
                      {form.formState.errors.email && (
                        <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="+1 (555) 123-4567"
                        {...form.register("phone")}
                      />
                      {form.formState.errors.phone && (
                        <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Select onValueChange={(value) => form.setValue("industry", value)}>
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
                      {form.formState.errors.industry && (
                        <p className="text-sm text-destructive">{form.formState.errors.industry.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Meeting Scheduling */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-2">Schedule a meeting</h2>
                    <p className="text-muted-foreground">Choose your preferred date and time</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Meeting Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !form.watch("meetingDate") && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {form.watch("meetingDate") ? (
                              format(form.watch("meetingDate"), "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={form.watch("meetingDate")}
                            onSelect={(date) => form.setValue("meetingDate", date!)}
                            disabled={(date) =>
                              date < new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                      {form.formState.errors.meetingDate && (
                        <p className="text-sm text-destructive">{form.formState.errors.meetingDate.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Meeting Time</Label>
                      <Select onValueChange={(value) => form.setValue("meetingTime", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {form.formState.errors.meetingTime && (
                        <p className="text-sm text-destructive">{form.formState.errors.meetingTime.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Thank You */}
              {currentStep === 5 && (
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
              )}

              {/* Navigation Buttons */}
              {currentStep < 5 && (
                <div className="flex justify-between mt-8">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="flex items-center"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                  
                  {currentStep < 4 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center"
                    >
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="flex items-center"
                    >
                      Schedule Meeting
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}