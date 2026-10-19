import { nanoid } from 'nanoid';
import { FormEvent, useState } from 'react';
import { IExpense } from '../types';

export default function ExpenseForm() {
  const [title, setTitle] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !amount.trim()) return

    const newExpense: IExpense = {
      id: nanoid(),
      title: title,
      amount: Number(amount)
    }
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
      </div>
      <button type="submit" className="btn">
        Добавить
      </button>
    </form>
  );
}
