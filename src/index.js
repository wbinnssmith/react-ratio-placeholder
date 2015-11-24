import React from 'react';
import isEqual from 'lodash.isequal';
import assign from 'object-assign';

function spacerStyle(props) {
  let w, h;
  if (props.ratio) {
    [w, h] = props.ratio.split(':');
  } else if (props.width && props.height) {
    [w, h] = [props.width, props.height];
  } else {
    throw new Error('RatioPlaceholder requires either a ratio property of "w:h" or width and height properties');
  }

  return assign({
    backgroundColor: props.color || '#ccc',
    paddingBottom: (h / w * 100) + '%'
  }, props.style);
}

export default class RatioPlaceholder extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(newProps) {
    return !isEqual(newProps, this.props);
  }

  render() {
    return (
      <div className="RatioPlaceholder" style={spacerStyle(this.props)} />
    )
  }
}
