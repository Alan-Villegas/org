import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';


const Equipo = (props) => {
    //Destructiracion
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradorres, eliminarColaborador, actualizarColor, like } = props
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.35)
    }

    const estiloTitulo = { borderColor: colorPrimario }

    return <>
        {
            colaboradorres.length > 0 &&
            <section className="equipo" style={obj}>
                <input 
                    className="input-color"
                    type="color"
                    value={colorPrimario}
                    onChange={(event) =>{
                        actualizarColor(event.target.value, id);
                    }}
                />
                <h3 style={estiloTitulo}> {titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradorres.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />)

                    }
                </div>
            </section>
        }
    </>
}

export default Equipo