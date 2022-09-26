import React from 'react';
import './styles/Reloj.css';

export default class Reloj extends React.Component{

    constructor(props){
        super(props)
        this.state = { date: new Date() };
    }

    componentDidMount(){
        this.id = setInterval(()=>{
            this.setState({date: new Date()});
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.id);
    }

    render() {
        return(
            <div>
                <span>Estado: {this.state.date.toLocaleTimeString()}</span>
            </div>
        )
    }
}