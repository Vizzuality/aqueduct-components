import React from 'react';
import Icon from '../Icon';

export default class Checkbox extends React.Component {

  constructor(props) {
    super(props);

    // BINDINGS
    this.onChange = this.onChange.bind(this);
  }

  /**
   * UI EVENTS
   * - onChange
  */
  onChange(evt) {
    this.props.onChange && this.props.onChange({ value: this.props.value, checked: evt.currentTarget.checked });
  }

  render() {
    const { value, name, label, checked } = this.props;
    return (
      <div className="c-checkbox">
        <input
          type="checkbox"
          name={name}
          id={`checkbox-${name}-${value}`}
          value={value}
          checked={checked}
          onChange={this.onChange}
        />
        <label htmlFor={`checkbox-${name}-${value}`}>
          <span>
            <Icon name="icon-checkbox" />
          </span>
          {label}
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  name: React.PropTypes.string,
  value: React.PropTypes.string,
  label: React.PropTypes.string,
  checked: React.PropTypes.bool,
  onChange: React.PropTypes.func
};
