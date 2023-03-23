import React from "react";
import StuNames from "./StuNames";

const list1 =["Mehul", "Ajay", "Ruchi", "Parth", "Jay"]
const list2 =["Jyot", "Raj", "Vibhuti", "Sneha", "Sambhu"]
const list3 =["Yudhishthira", "Arjuna", "Bhima", "Nakula", "Sahadeva"]

class StuContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {StuNames : list1};
    }

    changelist1(){
        this.setState({ StuNames : list2});
    }

    changelist2(){
        this.setState({ StuNames : list3});
    }
     
    changelist3(){
        this.setState({ StuNames : list1});
    }

    render() {
        return (<> <StuNames StuNames = {this.state.StuNames} />
        <button onClick={this.changelist1.bind(this)}>change to list 2</button><br />
        <button onClick={this.changelist2.bind(this)}>change to list 3</button><br />
        <button onClick={this.changelist3.bind(this)}>change to list 1</button>
        </>

    )};
}

export default StuContainer;