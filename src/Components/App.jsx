import React, {Component} from 'react'
import NavBar from './cNavbar/cNavbar'
import FormRegister from './cFormRegister/cFormRegister'
import PropTypes from 'prop-types'
import randStr from 'randomstring'
import Lists from './cLists/cLists'
import {pokemons} from './../Data/dummies.json'

class App extends Component {
    constructor(...props) {
        super(...props)

        this.state = {
            title: {
                name: 'React List'
            },
            emptyMsg: 'Obteniendo datos, un momento...',
            img: {
                url: 'https://vignette.wikia.nocookie.net/pokemontowerdefensetwo/images/4/4c/Pokeball.png/revision/latest?cb=20131006042433'
            },
            pokemons: []
        }
        this.handleAddPokemon = this.handleAddPokemon.bind(this)
        this.resetForm = this.resetForm.bind(this)
        this.renderList = this.renderList.bind(this)
        this.removeElementList = this.removeElementList.bind(this)
        this.editElementList = this.editElementList.bind(this)
        this.cloneElementList = this.cloneElementList.bind(this)
    }
    handleAddPokemon(e) {
        e.preventDefault()
        let form = e.target,
        pokemon = {
            id:(form.pkmn_id.value)? form.pkmn_id.value: App.defaultProps.id,
            name: (form.pkmn_name.value) ? form.pkmn_name.value: App.defaultProps.name,
            move:(form.pkmn_move.value)? form.pkmn_move.value: App.defaultProps.move,
        }
        let pokeArr = this.state.pokemons
        let idx = pokeArr.findIndex(item => String(item.id) === String(pokemon.id))
        if(idx !== -1){
            pokeArr[idx] = pokemon
            this.setState({
                pokemons: pokeArr
            })     
        } else {
            this.setState({
                pokemons: this.state.pokemons.concat([pokemon])
            })
        }
        form.reset()
    }
    resetForm() {
        document.getElementById('form-register').reset()
    }
    fetchData() {
        this.setState({pokemons: pokemons})
    }
    componentDidMount() {
        setTimeout(() => {
            this.fetchData()
            this.setState({emptyMsg: 'Sin datos que mostrar'})
        },2000)
    }
    editElementList(id){
        let pokeArr = this.state.pokemons
        let pokeFind = pokeArr.find((item)=>(item.id === id))
        let form = document.getElementById('form-register')
        form.pkmn_id.value = pokeFind.id
        form.pkmn_name.value = pokeFind.name
        form.pkmn_move.value = pokeFind.move
    }
    removeElementList(id) {
        let pokeArr = this.state.pokemons
        let newArr = pokeArr.filter(slot => slot.id !== id)
        this.setState({pokemons: newArr})
    }
    cloneElementList(id) {
        let pokeArr = this.state.pokemons,
            pokeFind = pokeArr.find((item)=>(item.id === id)),
            pokemon = {
                id: randStr.generate(4),
                name: pokeFind.name + '- Clone',
                move: pokeFind.move
            }
        this.setState({
            pokemons: this.state.pokemons.concat([pokemon])
        })
    }
    renderList() {
        if(!this.state.pokemons.length) {
            return(
                <div className="text-center">{this.state.emptyMsg}</div>
            )
        } else {
            return(
                <Lists 
                    dataList={this.state.pokemons}
                    dataImg={this.state.img}
                    clonePkmn={this.cloneElementList}
                    editPkmn={this.editElementList}
                    deletePkmn={this.removeElementList}/>
            )
        }
    }
    render() {
        return (
            <div>
                <NavBar 
                    title={this.state.title}/>
                <div className="container p-3">
                    <div className="info-example d-flex align-items-center mb-2">
                        <img src="https://www.serebii.net/quest/pokemon/094.png" alt=""/>
                        <span className="text-white ml-2">CRUD example using React</span>
                    </div>
                    <div className="card p-3 mb-2">
                        <h3 className="c-title text-center"><strong>NUEVO POKEMON</strong></h3>
                        <div className="mt-2">
                            <FormRegister 
                                resetForm={this.resetForm}
                                handleAddPokemon={this.handleAddPokemon}/>
                        </div>
                    </div>
                    <div className="card p-3">
                        {this.renderList()}
                    </div>
                </div>
            </div>
        )
    }
}
App.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    move: PropTypes.string
}
App.defaultProps = {
    id: randStr.generate(4) ,
    name: 'Unown',
    move: 'Esfuerzo'
}

export default App