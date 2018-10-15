import React from "react";
import assign from "object-assign";

function spacerStyle(props) {
  let w, h;
  if (typeof props.ratio === "string") {
    [w, h] = props.ratio.split(":");
  } else if (typeof props.ratio === "number") {
    [w, h] = [props.ratio, 1];
  } else if (props.width && props.height) {
    [w, h] = [props.width, props.height];
  } else {
    throw new Error(
      'RatioPlaceholder requires either a ratio property of "w:h" or width and height properties'
    );
  }

  return assign(props.style || {}, {
    paddingBottom: (h / w) * 100 + "%",
    position: "relative"
  });
}

export default class RatioPlaceholder extends React.PureComponent {
  render() {
    const { children, ...props } = this.props;
    return (
      <div className="RatioPlaceholder" {...props} style={spacerStyle(props)}>
        {children == null ? null : (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
          >
            {children}
          </div>
        )}
      </div>
    );
  }
}
