export interface ITask{
    id: number;
    name: string;
    date?: Date;
    isDone: boolean;
    isImportant: boolean;
}

export const Tasks: ITask[] =[
    {id: 1, name: "Hit the gym", date: new Date(2023, 4, 1), isDone: false, isImportant: false},
    {id: 2, name: "Pay bills", date: new Date(2023,3,20), isDone: true, isImportant: true},
    {id: 3, name: "Meet John", isDone: false, isImportant: false},
    {id: 4, name: "Buy eggs", date: new Date(2023, 3, 29), isDone: false, isImportant: true},
    {id: 5, name: "Read a book", isDone: true, isImportant: false},
    {id: 6, name: "Organize office", isDone: false, isImportant: false},
    {id: 7, name: "Eat dinner", isDone: false, isImportant: false},
    {id: 8, name: "Buy apples", date: new Date(2023, 3, 5), isDone: false, isImportant: true},
    {id: 9, name: "Meet George",  isDone: false, isImportant: true},
    {id: 10, name: "Feed the cat",  isDone: false, isImportant: false},
    {id: 11, name: "Write a letter",  isDone: false, isImportant: false},
    {id: 12, name: "Run 1 km", date: new Date(2023, 3, 5), isDone: false, isImportant: false},
]