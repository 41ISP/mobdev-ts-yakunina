export type TCategory = 'food' |'transport' |'home' |'fun' |'other'

export interface IExpense {
    id: string,
    title: string,
    amount: number,
    category?: TCategory
}