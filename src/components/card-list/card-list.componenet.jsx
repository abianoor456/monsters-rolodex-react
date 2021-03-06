import { Component } from "react";
import './card-list.styles.css'
import CardContainer from '../card-container/card-container.component'

class CardList extends Component {
    render() {
        console.log('render')
        console.log(this.props)
        const { monsters } = this.props;
        return (
            <div className='card-list'>
                {monsters.map((monster) => {
                    const { name, email, id } = monster
                    return (
                        <CardContainer name={name} email={email} id={id}></CardContainer>
                    )
                })}
            </div>
        );
    }
}

export default CardList;