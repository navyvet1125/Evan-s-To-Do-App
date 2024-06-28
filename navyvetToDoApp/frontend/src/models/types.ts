export interface DailyRecurrence {
    type: 'Daily';
    interval?: number;
}
  
  // Weekly recurrence specifies which days of the week and includes interval
export interface WeeklyRecurrence {
    type: 'Weekly';
    daysOfWeek: ('Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday')[];
    interval?: number;
}
  
  // Monthly recurrence on a specific date (e.g., every 31st) includes interval
export interface MonthlyDateRecurrence {
    type: 'MonthlyDate';
    date: number; // 1 to 31
    interval?: number;
}
  
  // Monthly recurrence on a specific week and day (e.g., the third Wednesday) includes interval
export interface MonthlyWeekDayRecurrence {
    type: 'MonthlyWeekDay';
    week: 'First' | 'Second' | 'Third' | 'Fourth' | 'Last';
    dayOfWeek: 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
    interval?: number;
}
  
  // Yearly recurrence specifies the month and day
export interface YearlyRecurrence {
    type: 'Yearly';
    month: number; // 1 to 12 representing January to December
    day: number; // 1 to 31 depending on the month
    interval?: number;
}