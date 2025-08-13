import { useState, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import StepIndicator from "@/components/forms/StepIndicator";
import ProductSelection from "@/components/forms/ProductSelection";
import ProblemDescription from "@/components/forms/ProblemDescription";
import UserInformation from "@/components/forms/UserInformation";
import MeetingScheduling from "@/components/forms/MeetingScheduling";
import ThankYou from "@/components/forms/ThankYou";

// Simple validation functions
const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePhone = (phone: string) => {
  return phone.length >= 10;
};

export default function GetStarted() {
  const [currentStep, setCurrentStep] = useState(1);
  
  // Form state
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [problem, setProblem] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    industry: ""
  });
  const [meetingInfo, setMeetingInfo] = useState({
    date: undefined as Date | undefined,
    time: ""
  });

  // Error state
  const [errors, setErrors] = useState<any>({});

  const handleProductToggle = useCallback((productId: string) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
    // Clear error when user selects products
    setErrors(prev => prev.products ? { ...prev, products: undefined } : prev);
  }, []);

  const handleUserInfoChange = useCallback((field: string, value: string) => {
    setUserInfo(prev => ({ ...prev, [field]: value }));
    // Clear error when user types
    setErrors(prev => prev[field] ? { ...prev, [field]: undefined } : prev);
  }, []);

  const handleMeetingChange = useCallback((field: string, value: Date | string) => {
    setMeetingInfo(prev => ({ ...prev, [field]: value }));
    // Clear error when user selects
    setErrors(prev => prev[field] ? { ...prev, [field]: undefined } : prev);
  }, []);

  const validateStep = (step: number) => {
    const newErrors: any = {};

    switch (step) {
      case 1:
        if (selectedProducts.length === 0) {
          newErrors.products = "Please select at least one product";
        }
        break;
      case 2:
        if (problem.length < 10) {
          newErrors.problem = "Please describe your problem in more detail";
        }
        break;
      case 3:
        if (userInfo.name.length < 2) {
          newErrors.name = "Name must be at least 2 characters";
        }
        if (!validateEmail(userInfo.email)) {
          newErrors.email = "Please enter a valid email address";
        }
        if (!validatePhone(userInfo.phone)) {
          newErrors.phone = "Please enter a valid phone number";
        }
        if (!userInfo.industry) {
          newErrors.industry = "Please select your industry";
        }
        break;
      case 4:
        if (!meetingInfo.date) {
          newErrors.date = "Please select a meeting date";
        }
        if (!meetingInfo.time) {
          newErrors.time = "Please select a meeting time";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = useCallback(() => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep, selectedProducts, problem, userInfo, meetingInfo]);

  const prevStep = useCallback(() => {
    setCurrentStep(prev => prev - 1);
    setErrors({}); // Clear errors when going back
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(4)) {
      // Handle form submission
      const formData = {
        products: selectedProducts,
        problem,
        ...userInfo,
        meetingDate: meetingInfo.date,
        meetingTime: meetingInfo.time
      };
      console.log("Form submitted:", formData);
      setCurrentStep(5);
    }
  }, [selectedProducts, problem, userInfo, meetingInfo]);

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Get Started</h1>
          <p className="text-muted-foreground">Let's find the perfect solution for your needs</p>
        </div>

        <StepIndicator currentStep={currentStep} />

        <Card className="shadow-lg">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Product Selection */}
              {currentStep === 1 && (
                <ProductSelection
                  selectedProducts={selectedProducts}
                  onProductToggle={handleProductToggle}
                  error={errors.products}
                />
              )}

              {/* Step 2: Problem Description */}
              {currentStep === 2 && (
                <ProblemDescription
                  value={problem}
                  onChange={setProblem}
                  error={errors.problem}
                />
              )}

              {/* Step 3: User Information */}
              {currentStep === 3 && (
                <UserInformation
                  userInfo={userInfo}
                  onInfoChange={handleUserInfoChange}
                  errors={errors}
                />
              )}

              {/* Step 4: Meeting Scheduling */}
              {currentStep === 4 && (
                <MeetingScheduling
                  meetingInfo={meetingInfo}
                  onMeetingChange={handleMeetingChange}
                  errors={errors}
                />
              )}

              {/* Step 5: Thank You */}
              {currentStep === 5 && <ThankYou />}

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