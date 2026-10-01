import { useState } from 'react'
export default function Sumadora() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [res, setRes] = useState(null)
  const sumar = () => setRes(Number(a) + Number(b))
  return (
    <section className="tarjeta">
      <h1>Sumadora</h1>
      <input type="number" placeholder="Primer número" value={a} onChange={e => setA(e.target.value)} />
      <input type="number" placeholder="Segundo número" value={b} onChange={e => setB(e.target.value)} />
      <button className="primario" disabled={a === '' || b === ''} onClick={sumar}>Sumar</button>
      {res !== null && <p className="resultado">{a} + {b} = {res}</p>}
    </section>
  )
}
s