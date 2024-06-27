import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header.jsx';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/index.js';
import Equipo from './componentes/Equipo/index.js';
import Footer from './componentes/Footer/index.jsx';

function App() {
const [mostrarFormulario,actualizarMostrar] = useState(false)
const [colaboradorres, actualizarColaboradores]= useState([
{
  equipo: "Front End",
  foto: "https://github.com/harlandlohora.png",
  nombre: "Harland Lohora",
  puesto: "Instructor",
  id: uuidv4(),
  fav: true
},
{
  equipo: "Programación",
  foto: "https://github.com/genesysaluralatam.png",
  nombre: "Genesys Rondón",
  puesto: "Desarrolladora de software e instructora",
  id: uuidv4(),
  fav: false
},
{
  equipo: "UX y Diseño",
  foto: "https://github.com/JeanmarieAluraLatam.png",
  nombre: "Jeanmarie Quijada",
  puesto: "Instructora en Alura Latam",
  id: uuidv4(),
  fav: false
},
{
  equipo: "Programación",
  foto: "https://github.com/christianpva.png",
  nombre: "Christian Velasco",
  puesto: "Head de Alura e Instructor",
  id: uuidv4(),
  fav: false
},
{
  equipo: "Innovación y Gestión",
  foto: "https://github.com/JoseDarioGonzalezCha.png",
  nombre: "Jose Gonzalez",
  puesto: "Dev FullStack",
  id: uuidv4(),
  fav: false
}
])
const [equipos, actualizarEquipos] = useState([
  {
    titulo: "Programación",
    colorPrimario: "#57C278",
    colorSecundario: "#D9F7E9",
    id: uuidv4() 
  },
  {
    titulo: "Front End",
    colorPrimario: "#82CFFA",
    colorSecundario: "#E8F8FF",
    id: uuidv4()  
  },
  {
    titulo: "Data Science",
    colorPrimario: "#A6D157",
    colorSecundario: "#F0F8E2",
    id: uuidv4()  
  },
  {
    titulo: "Devops",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8",
    id: uuidv4()  
  },
  {
    titulo: "UX y Diseño",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5",
    id: uuidv4()  
  },
  {
    titulo: "Móvil",
    colorPrimario: "#FFBA05",
    colorSecundario: "#FFF5D9",
    id: uuidv4()  
  },
  {
    titulo: "Innovación y  Gestión",
    colorPrimario: "#FF8A29",
    colorSecundario: "#FFEEDF",
    id: uuidv4()  
  }
])

//Ternario --> condicion ? se muestra : noSeMuestra
// condicion && seMuestra

const cambiarMostrar = () =>{
  actualizarMostrar(!mostrarFormulario)
}

//----------------Registrar Colaborador
const registrarColaborador = (colaborador) =>{
  console.log("Nuevo Colaborador",colaborador);
  //Spread operator
  actualizarColaboradores([...colaboradorres, colaborador])
}

//----------------Actualizar Color de equipo
const actualizarColor = (color, id) =>{
  console.log("Actualizar: ", color, id);
  const equiposActualizados = equipos.map((equipo) =>{
    if (equipo.id === id) {
      equipo.colorPrimario = color
    }
    return equipo
  })

  actualizarEquipos((equiposActualizados))
}

//----------------Eliminar Colaborador
const eliminarColaborador = (id) =>{
  console.log("Eliminar Colaborador",id);
  const nuevosColaboradores = colaboradorres.filter((colaborador) => colaborador.id !== id)
  actualizarColaboradores(nuevosColaboradores) 

} 

//------------Crear Equipo
const crearEquipo = (nuevoEquipo) =>{
  console.log(nuevoEquipo);
  actualizarEquipos([...equipos, {...nuevoEquipo, id: uuidv4() }])
}

const like = (id) =>{
  console.log("like", id);
  const colaboradorresActualizados = colaboradorres.map((colaborador) =>{
    if(colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })
  actualizarColaboradores(colaboradorresActualizados)
}

  return (
    <div>
      <Header/>
      {/* { mostrarFormulario === true ? <Formulario/> : <></>} */}
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)} 
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) =><Equipo 
        datos={equipo} 
        key={equipo.titulo} 
        colaboradorres={colaboradorres.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        
        />)
      }

      <Footer/>
    </div>
  );
}

export default App;
