import { TCategory } from "./types";

export const CATEGORIES: Record<TCategory, {label: string, emoji: string}> = {
    food: { label: 'Еда', emoji: '🥑' },
    transport: { label: 'Транспорт', emoji: '🚇' },
    home: { label: 'Жильё', emoji: '🏠' },
    fun: { label: 'Досуг', emoji: '🎟️' },
    other: { label: 'Другое', emoji: '📦' },
}

export const CATERGORY_KEYS = Object.keys(CATEGORIES) as TCategory[] 