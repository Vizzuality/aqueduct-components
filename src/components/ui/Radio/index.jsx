import React from 'react';

export default class Radio extends React.Component {

  constructor(props) {
    super(props);

    // BINDINGS
    this.onChange = this.onChange.bind(this);
  }

  /**
   * UI EVENTS
   * - onChange
  */
  onChange(e) {
    this.props.onChange(e.currentTarget.value);
  }

  render() {
    const { value, name, label, selected } = this.props;
    return (
      <div className="c-radio">
        <input
          type="radio"
          name={name}
          id={`radio-${name}-${value}`}
          value={value}
          checked={value === selected}
          onChange={this.onChange}
        />
        <label htmlFor={`radio-${name}-${value}`}>
          <span />
          {label}
        </label>
      </div>
    );
  }
}

Radio.propTypes = {
  name: React.PropTypes.string,
  value: React.PropTypes.string,
  label: React.PropTypes.string,
  selected: React.PropTypes.string,
  onChange: React.PropTypes.func
};
