import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IExpense } from "../types";

interface IExpenseStore{
expenses: IExpense[],
addExpense: (data: IExpense) => void,
removeExpense: (id: string) => void
} 

export const useExpensesStore = create<IExpenseStore>() (
    persist((set) => ({
expenses: [], 
addExpense: (data) => set(v => ({expenses: [...v.expenses, data]})),
removeExpense: (id) => set(v => ({expenses: v.expenses.filter(
    e => e.id !== id),
})),
    }), {name: 'expanses', storage: createJSONStorage(() => localStorage)
    },),
)