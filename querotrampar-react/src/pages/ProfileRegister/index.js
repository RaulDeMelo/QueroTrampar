import React, {Component} from 'react';
import { usuarioAutenticado } from '../../services/auth';
import api from '../../services/api';

const Styles = {
    
}

class ProfileRegister extends Component{
    constructor(){
        super();
        this.state = {
            "name" : "",
            "password" : "",
            "birthday" : "",
            "cpf": "",
            "email": ""
        }
    }

stateName = (event) =>{this.setState({name: event.target.value})} 
statePassword = (event) =>{this.setState({password: event.target.value})}
stateBirthday = (event) =>{this.setState({birthday: event.target.value})}
StateCpf = (event) =>{this.setState({cpf: event.target.value})}
StateEmail =  (event) =>{this.setState({email: event.target.value})}

Register = (event) =>{
    api.post("", {
       name: this.state.name,
       password: this.state.password,
       birthday: this.state.birthday,
       email: this.state.email,
       cpf: this.state.cpf 
    }) .then ( data =>{
        console.log(response.data.token);
        localStorage.setItem(user-querotrampar, reponse.data.token);
        usuarioAutenticado;
        this.props.history.push();
    })
    
}

render(){ 
    return (
        <div style={}>
            <form onSubmit={this.Register}>
                <fieldset>
                    <legend>Cadastro de Perfil</legend>
                    <label for="name">Nome</label>
                    <input
                    autoComplete="off"
                    type="text"
                    onInput={this.stateName}
                    name="Nome"
                    />
                    <label for="email">Email</label>
                    <input
                    type="text"
                    onInput={this.stateEmail}
                    name="Email"
                    />
                    <label for="password">Senha</label>
                    <input
                    type="password"
                    autoComplete="off"
                    onInput={this.statePassword}
                    name="senha"
                    />
                    <label for="dataDeNascimento">Data de Nascimento</label>
                    <input
                    type="date"
                    onInput={this.stateBirthday}
                    name="dataDeNascimento"
                    />
                    <label for="cpf">CPF</label>
                    <input
                    type="text"
                    className="form-control"
                    autoComplete="off"
                    data-mask="000.000.000-00"
                    onInput={this.stateCpf}
                    name="CPF"
                    />
                    <button>
                        Cadastrar Perfil
                    </button>
                </fieldset>
            </form>
          </div> 
        )
    }
}
export default ProfileRegister;