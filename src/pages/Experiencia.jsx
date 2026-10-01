// TODO: pega aquí el ID de tu video de YouTube (lo que va después de "v=" en la URL)
const VIDEO_ID = 'TU_ID_DE_VIDEO'
export default function Experiencia() {
  return (
    <section className="tarjeta">
      <h1>Mi experiencia</h1>
      <p>Así fue mi experiencia al realizar esta tarea.</p>
      <div className="video">
        <iframe src={`https://www.youtube.com/embed/${VIDEO_ID}`} title="Experiencia personal"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen />
      </div>
    </section>
  )
}
