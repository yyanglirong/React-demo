import React from 'react'
import Title from '../sytled-components/Wrapper'
class Item extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<div onClick={this.handleClick.bind(this,this.props.items.id)}>
            <Title>
                <img src={this.props.items.coverImgUrl}></img>
                <p>{this.props.items.name}</p>
            </Title>
        </div>)
    }
    handleClick=(id)=>{
        this.props.deleteItem(id)
    }
}
export default Item