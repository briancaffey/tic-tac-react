import React from 'react';

export class Square extends React.Component {
  render(){
    const w = this.props.dims[0];
    const h = this.props.dims[1];
    const cursor = this.props.contents == " " ? 'crosshair':'not-allowed';
    console.log(h, w);
    const style = {
      width: w,
      height:h,
      backgroundColor:'darkorange',
      color:'white',
      border:"2px solid black",
      tableLayout:'fixed',
      cursor: cursor
    }

    return (
      <td
        style={style}
        onClick={this.props.onClick}
        >{this.props.contents}
      </td>
    )
  }
}
