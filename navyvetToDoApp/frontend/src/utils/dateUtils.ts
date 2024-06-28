import { DailyRecurrence, MonthlyDateRecurrence, MonthlyWeekDayRecurrence, WeeklyRecurrence, YearlyRecurrence } from "../models/types";

export const calculateNextDueDate = (lastDueDate: Date, recurs: DailyRecurrence | WeeklyRecurrence | MonthlyDateRecurrence | MonthlyWeekDayRecurrence | YearlyRecurrence): Date => {
    switch (recurs.type) {
      case 'Daily':
        return new Date(lastDueDate.getTime() + 86400000 * (recurs.interval || 1));
      case 'Weekly':
        return new Date(lastDueDate.getTime() + 604800000 * (recurs.interval || 1));
      case 'MonthlyDate':
        return new Date(lastDueDate.getFullYear(), lastDueDate.getMonth() + (recurs.interval || 1), recurs.date);
      case 'MonthlyWeekDay':
        const nextDueDate = new Date(lastDueDate);
        nextDueDate.setMonth(nextDueDate.getMonth() + (recurs.interval || 1));
        nextDueDate.setDate(1);
        while (nextDueDate.getDay() !== ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(recurs.dayOfWeek)) {
          nextDueDate.setDate(nextDueDate.getDate() + 1);
        }
        const weekOffset = ['First', 'Second', 'Third', 'Fourth', 'Last'].indexOf(recurs.week);
        return new Date(nextDueDate.setDate(nextDueDate.getDate() + 7 * weekOffset));
      case 'Yearly':
        return new Date(lastDueDate.getFullYear() + (recurs.interval || 1), recurs.month, recurs.day);
    }
  }