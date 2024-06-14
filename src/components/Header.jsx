import React from "react";
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      userInput: "Enter Product Name to search...",
    };
  }

    // inputHandler(event) {
    //   this.setState({userInput:event.target.value?event.target.value:"Enter Product Name to search..."});
    // }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Enter Product Name to search..."
          onChange={(e) => {
            this.setState({
              userInput: e.target.value
                ? e.target.value
                : "Enter Product Name to search...",
            });
          }}
        />
        <center>{this.state.userInput}</center>
      </form>
    );
  }
}

export default Header;
