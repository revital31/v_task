import React, { Component } from 'react';
import './MainAdmin.css';
//import '../AddVacationComponent/AddVacation';

export class MainAdmin extends Component {

    go() {
        this.props.history.push("/AddVacation");
      }


      constructor() {
        super();
        this.state = {
          vacations: [],
        };
      }
    
      componentDidMount() {
        fetch("http://localhost:8000/vacations")
          .then((res) => res.json())
          .then((vacations) =>
            this.setState({ vacations }, () =>
              console.log("vactions info fetched..", vacations)
              
              
            )
          );


          {this.state.vacations.map((vacation) => (
            
            <h5>{vacation.price}</h5>
            ))}
      }

      
    render() {
        return (
            <div>
                <h1>Admin page</h1>
                <div id="cards">
                <div id="card1">
                <div class="card text-white bg-success mb-3 " style={{width: "20rem",margin:"30px"}} >
                <button onClick={this.go.bind(this)} style={{color:'red',fontSize:'20px'}}>add vacation</button>
                <div class="card-header" style={{color:'red'}}>Description <i style={{padding:'10px'}} class="fa fa-times" aria-hidden="true"></i><i  style={{padding:'10px'}} class="fa fa-pencil" aria-hidden="true"></i><i style={{padding:'10px'}} class="fa fa-facebook"></i></div>
                <div class="card-body">
                <h5 class="card-title">Price:</h5>
                <h4>Picture:</h4>
                <p class="card-text">Dates:</p>
                </div>
                </div>
                </div>
                </div>


                <div id="card2">
                <div class="card text-white bg-success mb-3 " style={{width: "20rem",margin:"30px"}} >
                <button onClick={this.go.bind(this)} style={{color:'red',fontSize:'20px'}}>add vacation</button>
                <div class="card-header" style={{color:'red'}}>Description <i style={{padding:'10px'}} class="fa fa-times" aria-hidden="true"></i><i  style={{padding:'10px'}} class="fa fa-pencil" aria-hidden="true"></i><i style={{padding:'10px'}} class="fa fa-facebook"></i></div>
                <div class="card-body">
                <h5 class="card-title">Price:</h5>
                <h4>Picture:</h4>
                <p class="card-text">Dates:</p>
                </div>
                </div>
                </div>
                



                <div id="card3">
                <div class="card text-white bg-success mb-3 " style={{width: "20rem",margin:"30px"}} >
                <button onClick={this.go.bind(this)} style={{color:'red',fontSize:'20px'}}>add vacation</button>
                <div class="card-header" style={{color:'red'}}>Description <i style={{padding:'10px'}} class="fa fa-times" aria-hidden="true"></i><i  style={{padding:'10px'}} class="fa fa-pencil" aria-hidden="true"></i><i style={{padding:'10px'}} class="fa fa-facebook"></i></div>
                <div class="card-body">
                <h5 class="card-title">Price:</h5>
                <h4>Picture:</h4>
                <p class="card-text">Dates:</p>
                </div>
                </div>
                </div>
                


                <div id="card4">
                <div class="card text-white bg-success mb-3 " style={{width: "20rem",margin:"30px"}} >
                <button onClick={this.go.bind(this)} style={{color:'red',fontSize:'20px'}}>add vacation</button>
                <div class="card-header" style={{color:'red'}}>Description <i style={{padding:'10px'}} class="fa fa-times" aria-hidden="true"></i><i  style={{padding:'10px'}} class="fa fa-pencil" aria-hidden="true"></i><i style={{padding:'10px'}} class="fa fa-facebook"></i></div>
                <div class="card-body">
                <h5 class="card-title">Price:</h5>
                <h4>Picture:</h4>
                <p class="card-text">Dates:</p>
                </div>
                </div>
                </div>
                



                <div id="card5">
                <div class="card text-white bg-success mb-3 " style={{width: "20rem",margin:"30px"}} >
                <button onClick={this.go.bind(this)} style={{color:'red',fontSize:'20px'}}>add vacation</button>
                <div class="card-header" style={{color:'red'}}>Description <i style={{padding:'10px'}} class="fa fa-times" aria-hidden="true"></i><i  style={{padding:'10px'}} class="fa fa-pencil" aria-hidden="true"></i><i style={{padding:'10px'}} class="fa fa-facebook"></i></div>
                <div class="card-body">
                <h5 class="card-title">Price:</h5>
                <h4>Picture:</h4>
                <p class="card-text">Dates:</p>
                </div>
                </div>
                </div>
                


                <div id="card6">
                <div class="card text-white bg-success mb-3 " style={{width: "20rem",margin:"30px"}} >
                <button onClick={this.go.bind(this)} style={{color:'red',fontSize:'20px'}}>add vacation</button>
                <div class="card-header" style={{color:'red'}}>Description <i style={{padding:'10px'}} class="fa fa-times" aria-hidden="true"></i><i  style={{padding:'10px'}} class="fa fa-pencil" aria-hidden="true"></i><i style={{padding:'10px'}} class="fa fa-facebook"></i></div>
                <div class="card-body">
                <h5 class="card-title">Price:</h5>
                <h4>Picture:</h4>
                <p class="card-text">Dates:</p>
                </div>
                </div>
                </div>
                




                <div id="card7">
                <div class="card text-white bg-success mb-3 " style={{width: "20rem",margin:"30px"}} >
                <button onClick={this.go.bind(this)} style={{color:'red',fontSize:'20px'}}>add vacation</button>
                <div class="card-header" style={{color:'red'}}>Description <i style={{padding:'10px'}} class="fa fa-times" aria-hidden="true"></i><i  style={{padding:'10px'}} class="fa fa-pencil" aria-hidden="true"></i><i style={{padding:'10px'}} class="fa fa-facebook"></i></div>
                <div class="card-body">
                <h5 class="card-title">Price:</h5>
                <h4>Picture:</h4>
                <p class="card-text">Dates:</p>
                </div>
                </div>
                </div>
                </div>
 
                
        )
    }
}

export default MainAdmin;
