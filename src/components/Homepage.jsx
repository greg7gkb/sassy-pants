import React from "react";

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null
    };
    this.loadData();
  }

  async delay(seconds) {
    console.log("waiting, to simulate slow data connection...");
    const p = new Promise(resolve => {
      setTimeout(() => resolve(), seconds * 1000);
    });
    await p;
    console.log("finished artificial delay");
  }

  async loadData() {
    await this.delay(2);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    console.log(JSON.stringify(json).substr(0, 100));
    const newState = {
      isLoading: false,
      data: json
    };
    this.setState(newState);
  }

  renderUser(user) {
    const url = "https://" + user.website;
    return (
      <p>
        {user.name}, <a href={url}>{user.website}</a>
      </p>
    );
  }

  renderData() {
    const data = this.state.data;
    return <div>{data.map(user => this.renderUser(user))}</div>;
  }

  render() {
    return (
      <div className="App">
        <h1>SasSyPants Project</h1>
        {this.state.isLoading ? <p>Loading...</p> : this.renderData()}
      </div>
    );
  }
}
