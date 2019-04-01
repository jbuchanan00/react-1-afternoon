import React, {Component} from "react"

export default class Palindrome extends Component{
    constructor(){
        super()

        this.state = {
            userInput: "",
            palindrome: ""
        }

    }
    handleChange(val){
        this.setState({userInput: val})
    }

    isPalindrome(userInput){
        let userArr = userInput.split("")
        let secondArr = userArr.slice(0)
        let reversedUnjoinedArr = secondArr.reverse()
        let reversedArr = reversedUnjoinedArr.join("")
        let newUserArr = userArr.join("")
        if(reversedArr === newUserArr){
            this.setState({palindrome: "true"})
            
        }else{
            this.setState({palindrome: "false"})
        }
        
    }
    render(){
        return(
            <div className="puzzleBox palindromePB">
            <h4>Palindrome</h4>
            <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => this.isPalindrome(this.state.userInput)}>Check</button>
            <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}