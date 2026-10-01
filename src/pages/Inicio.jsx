// TODO: cambia NOMBRE y APELLIDO por los tuyos
const datos = {
  nombre: 'Lenin Vladimir',
  apellido: 'Calderon Arroyo',
  matricula: '2023-1403',
  correo: '20231403@itla.edu.do',
}
export default function Inicio() {
  return (
    <section className="tarjeta perfil">
      <img src={import.meta.env.BASE_URL + 'foto.jpeg'} alt="Foto 2x2" className="foto" />
      <div>
        <h1>{datos.nombre} {datos.apellido}</h1>
        <p><b>Nombre:</b> {datos.nombre}</p>
        <p><b>Apellido:</b> {datos.apellido}</p>
        <p><b>Matrícula:</b> {datos.matricula}</p>
        <p><b>Correo:</b> <a href={'mailto:' + datos.correo}>{datos.correo}</a></p>
      </div>
    </section>
  )
}
