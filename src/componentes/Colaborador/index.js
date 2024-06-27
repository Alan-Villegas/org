import "./Colaborador.css"
import { FaWindowClose } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";


const Colaborador = (props) =>{
    const {nombre,puesto,foto,equipo,id,fav}= props.datos
    const {colorPrimario, eliminarColaborador, like}= props
    
    //condicon ? veradadero: false
    
    return <div className="colaborador">
        <FaWindowClose className="eliminar" onClick={ () => eliminarColaborador(id)}>/</FaWindowClose>
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src= {foto} alt= {nombre}></img>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? <MdFavorite color="red" onClick={() => like(id)}/> : <MdFavoriteBorder color="blue" onClick={() => like(id)} />}
            
            

        </div>
    </div>
}

export default Colaborador