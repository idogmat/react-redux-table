import React from "react";
import MaskedInput from "react-text-mask";

class IDMaskedInput extends React.Component {
  render() {
    const { inputRef, ...other } = this.props;
    return (
      <div>
        <MaskedInput
          {...other}
          mask={['(', /[1-9]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
          placeholderChar={"\u2000"}
          placeholder="(999)999-9999"
          value={this.props.value}
          showMask={false}
          keepCharPositions={false}
        />
      </div>
    );
  }
}


export default IDMaskedInput;
