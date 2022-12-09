import React, { useState } from 'react';
import { listaProductos } from './data-producto';


const Buscar = () => {
    const [valoresFormulario, setValoresFormulario] = useState({});
    const { nombre = '' } = valoresFormulario;
    const [resultado, setResultado] = useState([]);


    const handleOnChange = (e) => {
        setValoresFormulario({ ...valoresFormulario, [e.target.name]: e.target.value });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(valoresFormulario);
        const filtro = listaProductos.filter(product => product.nombre.toUpperCase().includes(nombre.toUpperCase()));
        console.log(resultado);
        setResultado(filtro);
    }
    return (
        <div className="Container-fluid mt-3">
            <div className='row'>
                <div className='col'>
                <form onSubmit={(e) => handleOnSubmit(e)}>
                <div className="mb-3">
                    <label className="form-label">Nombre producto</label>
                    <input required type="text" name="nombre" value={nombre}
                        className="form-control" onChange={(e) => { handleOnChange(e) }} />
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
                </div>

            </div>
            <div className='row mt-5'>
                <div className='col'>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    resultado.map(producto => {
                        return (
                            <div className ="col" key= {producto.id}>
                                <div className="card">
                                    <img src={producto.imagen} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{producto.nombre}</h5>
                                        <p className="card-text">{producto.direccion} <br /> {producto.descripcion}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
                </div>

            </div>
            
        </div>
    )
}

export {
    Buscar
}
