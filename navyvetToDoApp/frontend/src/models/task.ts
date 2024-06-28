import { CompletionDetails } from './completion'

export default interface Task {
    id: string;
    listId: string;
    text: string;
    completed?: CompletionDetails;
    parentId?: string;
}  