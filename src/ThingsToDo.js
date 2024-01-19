import { Component } from 'react';
import check from'./check.png';
export class ThingsToDo extends Component{
    state={
        userInput:"",
        thingsToDo:[]
    }
    onChangeEvent(event){
       this.setState({userInput: event});
       console.log(event);
    }
    addItem(input){
        if (input===''){
            alert("Please enter an item!")
        } else{
        let listArray=this.state.thingsToDo;
        listArray.push(input);
        this.setState({thingsToDo:listArray, userInput:''})
    }
}
    crossedWord(e){
        const li=e.target;
        li.classList.toggle('crossed');
    }
deleteItem(){
    let listArray=this.state.thingsToDo;
    listArray.length=0;
    this.setState({thingsToDo: listArray})
}
onFormSubmit(e){
    e.preventDefault();
}
    render (){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                    <input type="text" placeholder="What do you have to do?"
                onChange={ (event) => {this.onChangeEvent(event.target.value)}}
                value={this.state.userInput}/>
                </div>
                <div className="container">
                    <button onClick={()=> this.addItem(this.state.userInput)} className="add">ADD</button>
                </div>
                <div className="container">
                <ul className="list">
                    {this.state.thingsToDo.map((item,index)=>(
                        <li onClick={this.crossedWord} key={index}>
                            <img src={check} width="40px" alt="check"/>{item}</li>
                    ))}
                </ul>
                </div>
                <div className="container">
                    <button onClick={() => this.deleteItem()}  className="delete">DELETE</button>
                </div> 
                </form>
            </div>
        )
    }
}
