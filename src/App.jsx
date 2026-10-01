import { useState } from 'react'
import Inicio from './pages/Inicio.jsx'
import Sumadora from './pages/Sumadora.jsx'
import Traductor from './pages/Traductor.jsx'
import Tabla from './pages/Tabla.jsx'
import Experiencia from './pages/Experiencia.jsx'

const paginas = [
  { id: 'inicio', nombre: 'Inicio', C: Inicio },
  { id: 'suma', nombre: 'Sumadora', C: Sumadora },
  { id: 'letras', nombre: 'Número a letras', C: Traductor },
  { id: 'tabla', nombre: 'Tabla de multiplicar', C: Tabla },
  { id: 'exp', nombre: 'Mi experiencia', C: Experiencia },
]

export default function App() {
  const [actual, setActual] = useState('inicio')
  const [abierto, setAbierto] = useState(false)
  const { C } = paginas.find(p => p.id === actual)
  return (
    <div className="app">
      <header className="barra">
        <strong>Tarea React</strong>
        <button className="burger" onClick={() => setAbierto(!abierto)} aria-label="Abrir menú">☰</button>
      </header>
      <nav className={'menu' + (abierto ? ' abierto' : '')}>
        {paginas.map(p => (
          <button key={p.id} className={p.id === actual ? 'activo' : ''}
            onClick={() => { setActual(p.id); setAbierto(false) }}>{p.nombre}</button>
        ))}
      </nav>
      <main><C /></main>
    </div>
  )
}
