import React from 'react'
import randStr from 'randomstring'

const formRegister = (props) => (
    <form id="form-register" action="" onSubmit={props.handleAddPokemon} className="row">
        <input type="hidden" name="pkmn_id" value={randStr.generate(4)}/>
        <div className="form-group col-12">
            <label htmlFor="pkmn_name">Nombre del Pokemon</label>
            <input type="text" className="form-control" name="pkmn_name"/>
        </div>
        <div className="form-group col-12">
            <label htmlFor="pkmn_move">Ataque del Pokemon</label>
            <input type="text" className="form-control" name="pkmn_move"/>
        </div>
        <div className="form-group col-12 text-right">
            <input type="submit" className="btn"  value="Agregar"/>
            <button type="button" className="btn" onClick={props.resetForm}>Limpiar</button>
        </div>
    </form>
)

export default formRegister