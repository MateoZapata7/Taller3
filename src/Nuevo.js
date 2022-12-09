import React, { useState } from 'react';

const Nuevo = () => {
    const [ valoresFormulario, setValoresFormulario] = useState({});
    const { nombre = '', descripcion='', direccion='', url='' } = valoresFormulario;


    const handleOnChange = (e) => {
        setValoresFormulario({ ...valoresFormulario, [e.target.name]: e.target.value });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(valoresFormulario);
    }
    return (
        <div className="Container-fluid mt-3">
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <div className="mb-3">
                    <label className="form-label">Nombre Restaurante</label>
                    <input required type="text" name="nombre" value={nombre}
                        className="form-control" onChange={(e) => { handleOnChange(e) }} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Descripcion</label>
                    <input required type="text" name="descripcion" value={descripcion}
                        className="form-control" onChange={(e) => { handleOnChange(e) }} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Direccion</label>
                    <input required type="text" name="direccion" value={direccion}
                        className="form-control" onChange={(e) => { handleOnChange(e) }} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Imagen Url</label>
                    <input required type="text" name="url" value={url}
                        className="form-control" onChange={(e) => { handleOnChange(e) }} />
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
    )
}
export {
    Nuevo
}