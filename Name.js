import {Component}  from "react";
class Name extends Component {
  constructor(props){
      super(props);
      this.state = {
          count:0
      };
  }
  
  onCountClickIncreament =() =>{
    this.setState(state =>({
        count: state.count + 1
    }));
  }
  onCountClickDecreament =() =>{
    if (this.state.count>0){
      (this.setState(state=>({
        count:state.count - 1
      })));
    }
    
  
}
  onCountClickZero =()=>{
    this.setState(state =>({
      count:0
    }));
  }
  render() { 
      return (
          <div>
              <h1>{this.state.count}</h1>

              <button onClick= {this.onCountClickIncreament}>Count +</button>
              <button onClick= {this.onCountClickDecreament}>Count -</button>
              <button onClick= {this.onCountClickZero}>count 0</button>
          </div>
      );
  }
 
}

export default Name