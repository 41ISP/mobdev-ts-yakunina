import { nanoid } from 'nanoid';
import { FormEvent, useState } from 'react';
import { IExpense, TCategory } from '../types';
import { useExpensesStore } from '../store/expensesStore';
import { CATEGORIES, CATERGORY_KEYS } from '../constants';

export default function ExpenseForm() {
  const [title, setTitle] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [category, setCategory] = useState<TCategory>('food')
  const{addExpense} = useExpensesStore()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !amount.trim()) return

    const newExpense: IExpense = {
      id: nanoid(),
      title: title,
      amount: Number(amount),
      category: category
    }
    addExpense(newExpense)
    setTitle("")
    setAmount("")
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        aria-label="Название"
        placeholder="Название"
        value={title}
        maxLength={60}
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="form__row">
        <input
          aria-label="Сумма"
          placeholder="Сумма, ₽"
          inputMode="decimal"
          value={amount}
          required
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value as TCategory)}>  
          {CATERGORY_KEYS.map((el, i) => (
          <option value={el} key={i}>
            {CATEGORIES[el].emoji} {CATEGORIES[el].label}
          </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn">
        Добавить
      </button>
    </form>
  );
}
