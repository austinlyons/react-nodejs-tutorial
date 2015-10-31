import React, { Component } from 'react';

export default class ReactApp extends Component {
  constructor(props) {
    super(props);

    const placeholder = {
      try: 'removing some whitespace!',
      or: 'add valid JSON',
      then: ['then', 'click', 'format'],
      hi: 'mom!!!'
    };

    this.state = {
      value: JSON.stringify(placeholder, null, 4),
      txtClass: styles.textArea
    };
  }

  _validate() {
    try {
      let orig = JSON.parse(this.state.value);
      let v = JSON.stringify(orig, null, 4);
      this.setState({
        value: v,
        error: null,
        txtClass: styles.textArea
      });
    }
    catch (e) {
      this.setState({
        error: `Invalid JSON: ${e.name} - ${e.message}`,
        txtClass: styles.textAreaError
      });
    }
  }

  _saveText(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div id="app" style={styles.container}>
        <h1 style={styles.header}>Format & Validate JSON</h1>
        <p style={styles.error}>{this.state.error}</p>
        <textarea
          rows="30"
          cols="80"
          value={this.state.value}
          style={this.state.txtClass}
          onChange={this._saveText.bind(this)}
        >
        </textarea>
        <button style={styles.button} onClick={this._validate.bind(this)}>VALIDATE</button>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  header: {
    flex: '0 1 auto'
  },
  error: {
    color: 'red',
  },
  textArea: {
    flex: '0 1 auto',
    fontFamily: 'monospace'
  },
  textAreaError: {
    flex: '0 1 auto',
    fontFamily: 'monospace',
    border: '1px solid red'
  },
  button: {
    cursor: 'pointer',
    flex: '0 1 auto',
    marginTop: 20,
    padding: 10,
    fontSize: 14
  }
};
