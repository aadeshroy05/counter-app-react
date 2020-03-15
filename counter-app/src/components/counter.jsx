import React, { Component } from 'react';

class Counter extends Component {

    // state = {
    //     //   count:0,
    //       count: this.props.counter.value,
    //       tags : ['tag1','tag2','tag3' ]
    // };

    styles = {

        fontSize: 50,
        fontWeight: "bold"
    };

    // constructor(){               bind Event handler
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    renderTag(){

        if(this.state.tags.length === 0) return <p>There is no tag! </p>
        return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    // handleIncrement = () =>  {
    //         this.setState({count : this.state.count + 1})
    // }        --- on longer we have local state 

    // handleDecrement = () => {
    //         this.setState({count : this.state.count - 1})
    // }

    render() { 


        return(
            <div>
                {/* {this.props.children} */}
                <span  className={this.getBadgeClasses()} >{this.formatCounter()}</span>
                <button onClick={ () => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>

                <button onClick={ () => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-4">Decrement</button>

                <button onClick= {() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>

                {/* {this.state.tags.length === 0 && "Please create a new tag! "}
                {this.renderTag()} */}

            </div>    
        ); 
        
    }

    getBadgeClasses() {
        let classes = "badge m-4 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCounter(){
        const {value} = this.props.counter;
        return value === 0 ? "zero" :value  ;
    }

}
 
export default Counter;