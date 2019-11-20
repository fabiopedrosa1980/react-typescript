import React from 'react';
import { Link } from 'react-router-dom';

export default class List extends React.Component<IListProps, IListState>{
    constructor(props: IListProps){
        super(props);
        this.state  = {
            names: ['Fabio','Maria','Guilherme']
        }    
    }
    render() {
        return <ul className="list-group">
            {this.state.names.map(name => {
            return <li className="list-group-name">
                <Link to={`/${name}`}>{name}</Link>
                </li>
            })}
        </ul>
    }
}

interface IListProps{

}

interface IListState{
   names: Array<string>;

}
