export interface IComments {
    id: number;
    content: string;
    vote: number;
    timestamp: string;
    replies: IComments[];
}