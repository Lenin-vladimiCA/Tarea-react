import { useState } from 'react'

const unidades = ['cero','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez',
  'once','doce','trece','catorce','quince','dieciséis','diecisiete','dieciocho','diecinueve',
  'veinte','veintiuno','veintidós','veintitrés','veinticuatro','veinticinco','veintiséis',
  'veintisiete','veintiocho','veintinueve']
const decenas = ['','','','treinta','cuarenta','cincuenta','sesenta','setenta','ochenta','noventa']
const centenas = ['','ciento','doscientos','trescientos','cuatrocientos','quinientos',
  'seiscientos','setecientos','ochocientos','novecientos']

export function numeroALetras(n) {
  if (n === 1000) return 'mil'
  if (n < 30) return unidades[n]
  if (n < 100) {
    const d = Math.floor(n / 10), u = n % 10
    return u === 0 ? decenas[d] : `${decenas[d]} y ${unidades[u]}`
  }
  if (n === 100) return 'cien'
  const c = Math.floor(n / 100), resto = n % 100
  return resto === 0 ? centenas[c] : `${centenas[c]} ${numeroALetras(resto)}`
}

export default function Traductor() {
  const [num, setNum] = useState('')
  const n = Number(num)
  const valido = num !== '' && Number.isInteger(n) && n >= 1 && n <= 1000
  return (
    <section className="tarjeta">
      <h1>Número a letras</h1>
      <input type="number" min="1" max="1000" placeholder="Número del 1 al 1000"
        value={num} onChange={e => setNum(e.target.value)} />
      {num !== '' && !valido && <p className="error">Escribe un número entero entre 1 y 1000.</p>}
      {valido && <p className="resultado">{n} = {numeroALetras(n)}</p>}
    </section>
  )
}
