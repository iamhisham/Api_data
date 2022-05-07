import react, { Component } from "react";
// var words;
class Makes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textarea: "",

      realy: "",
      wierd: "",
    };
  }

  make = (e) => {
    const n = e.target.name;
    const v = e.target.value;

    this.setState({
      [n]: v
        .replace("realy", "really")
        .replace("wierd", "weird")
        .replace("closes", "closed"),
    });

    // this.setState = { textarea: words.join("  ") };
  };

  //   componentDidUpdate() {}

  render() {
    // words = this.state.textarea.split(" ");
    // let text = fruits.join("  ");

    return (
      <>
        <p>Type wrongly</p>

        <h1>I was realy wierd to the closes room</h1>
        <h3>auto Correct</h3>
        <h4>
          "\\\\\ realy \\\really" <br></br> "\\\\\ wierd \\\weird" <br></br>
          "\\\\\ closes \\\closed" <br></br>
        </h4>
        <textarea
          rows="4"
          cols="50"
          onChange={this.make}
          value={this.state.textarea}
          id="demo"
          name="textarea"
        ></textarea>
        <h1>{this.state.textarea}</h1>

        {/* {words.map((n) => (
          <>
            <h1>{n}</h1>
          </>
        ))} */}
        {}
      </>
    );
  }
}

export default Makes;
