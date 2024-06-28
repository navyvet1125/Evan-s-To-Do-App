import { CompletionDetails } from './completion'
import { Category } from './category';
import { 
    DailyRecurrence,
    WeeklyRecurrence,
    MonthlyDateRecurrence,
    MonthlyWeekDayRecurrence,
    YearlyRecurrence 
} from './types';


export default interface List {
    id: string;
    title: string;
    description?: string;
    category: Category;
    dueDate: Date;
    recurs?: DailyRecurrence | WeeklyRecurrence | MonthlyDateRecurrence | MonthlyWeekDayRecurrence | YearlyRecurrence;
    completed?: CompletionDetails;
}