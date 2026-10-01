import { useState } from 'react'
export default function Tabla() {
  const [num, setNum] = useState('')
  const n = Number(num)
  return (
    <section className="tarjeta">
      <h1>Tabla de multiplicar</h1>
      <input type="number" placeholder="Escribe un número" value={num} onChange={e => setNum(e.target.value)} />
      {num !== '' && (
        <ul className="tabla">
          {Array.from({ length: 13 }, (_, i) => i + 1).map(i => (
            <li key={i}>{n} × {i} = <b>{n * i}</b></li>
          ))}
        </ul>
      )}
    </section>
  )
}
