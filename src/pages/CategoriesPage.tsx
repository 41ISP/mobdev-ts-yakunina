import { Link } from 'react-router-dom'
import { useExpensesStore } from '../store/expensesStore'
import { CATEGORIES, CATERGORY_KEYS } from '../constants'

export default function CategoriesPage() {
    const {expenses} = useExpensesStore()
    const rows = CATERGORY_KEYS.map(key => {
        const items = expenses.filter(el => el.category === key)
        return {
            key,
            count: items.length,
            sum: items.reduce((acc, v) => acc + v.amount, 0)
        }
    })
    .filter(r => r.count > 0)
    .sort((a, b) => a.sum - b.sum)

    return (
        <>
            <h1 className="title">По категориям</h1>

            {rows.length === 0 ? (
                <p className="empty">
                    Данных пока нет. <Link to="/">Добавить расход</Link>
                </p>
            ) : (
                <ul className="list">
                    {rows.map((el,i) => (
                         <li  key={i} className="row">
                            <span className="row__icon">{CATEGORIES[el.key].emoji}</span>
                            <div className="row__body">
                                <span className="row__title">{CATEGORIES[el.key].label}</span>
                                <span className="row__meta">Количество: {el.count}</span>
                            </div>
                            <span className="row__amount">{el.sum}</span>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}
