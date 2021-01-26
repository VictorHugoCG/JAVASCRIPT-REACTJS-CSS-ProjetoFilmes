import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './home.css'

class Home extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            filme:[]
        };

        this.loadFilmes = this.loadFilmes.bind(this);
    };

    componentDidMount()
    {
        this.loadFilmes()
    }

    //link api: http://sujeitoprogramador.com/r-api/?api=filmes/
    loadFilmes()
    {
        let url = 'http://sujeitoprogramador.com/r-api/?api=filmes/';

        //armazenando na variável o método para a requisição http
        let ft = fetch(url);

        //método para receber a resposta da url como parametro em uma função anônima e converter em json
        let convertJSON = ft.then((r)=> r.json());

        //depois de convertido chama-se o método then() outra vez para receber o json como parametro na função anônima
        convertJSON.then((json)=>{
            let st = this.state;
            st.filme = json;
            this.setState(st);
            console.log(json)
        });
    }
    
    render()
    {
        return(
            <div className='container'>
                <div className='listaFilmes'>
                    {this.state.filme.map((filme)=>{
                        return(
                            <article key={filme.id} className='filmes'>
                                <strong>{filme.nome}</strong>
                                <img src={filme.foto} alt='capa'/>
                                <Link to='/'>Acessar</Link>
                            </article>
                        );
                    })}
                </div>
            </div>
        );
    };
};

export default Home;