import React from 'react';

class TestLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentDidMount() {
    console.log('didmount');
  }

  componentDidUpdate() {
    console.log('didupdate');
  }

  componentWillUnmount() {
    console.log('willunmount');
  }

  render() {
    console.log('render');
    return <p>Test LifeCycle</p>;
  }
}
export default TestLifeCycle;
