import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

interface MeetingInfo {
  date: Date | undefined;
  time: string;
}

interface MeetingSchedulingProps {
  meetingInfo: MeetingInfo;
  onMeetingChange: (field: keyof MeetingInfo, value: Date | string) => void;
  errors: { date?: string; time?: string };
}

export default function MeetingScheduling({ meetingInfo, onMeetingChange, errors }: MeetingSchedulingProps) {
  return (
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
                  !meetingInfo.date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {meetingInfo.date ? (
                  format(meetingInfo.date, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={meetingInfo.date}
                onSelect={(date) => date && onMeetingChange('date', date)}
                disabled={(date) =>
                  date < new Date() || date < new Date("1900-01-01")
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {errors.date && (
            <p className="text-sm text-destructive">{errors.date}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label>Meeting Time</Label>
          <Select onValueChange={(value) => onMeetingChange('time', value)} value={meetingInfo.time}>
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
          {errors.time && (
            <p className="text-sm text-destructive">{errors.time}</p>
          )}
        </div>
      </div>
    </div>
  );
}