import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useExpensesStore = create() (
    persist((set) => ({}), {name: 'expanses'})
)