import React from 'react';
import classnames from 'classnames';

export default class RadioGroup extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: props.defaultValue
    };

    // BINDINGS
    this.onChange = this.onChange.bind(this);
  }

  /**
   * UI EVENTS
   * - onChange
  */
  onChange(e) {
    // Set the current selected object
    const selectedObj = this.props.items.find(item => item.value.toString() === e.currentTarget.value);

    // Set state
    this.setState({
      selected: selectedObj.value.toString()
    });

    // Trigger change selected if it's needed
    this.props.onChange && this.props.onChange(selectedObj);
  }

  render() {
    const { name, items } = this.props;
    const { selected } = this.state;

    const className = classnames({
      [this.props.className]: !!this.props.className
    });

    return (
      <div className={`c-radio-box ${className}`}>
        {items.map((item, i) => (
          <div key={i} className={`c-radio ${className}`}>
            <input
              type="radio"
              name={name}
              id={`radio-${name}-${item.value}`}
              value={item.value}
              checked={item.value.toString() === selected}
              onChange={this.onChange}
            />
            <label htmlFor={`radio-${name}-${item.value}`}>
              <span />
              {item.label}
            </label>
          </div>
        ))}
      </div>
    );
  }
}

RadioGroup.propTypes = {
  items: React.PropTypes.array.isRequired,
  name: React.PropTypes.string.isRequired,
  defaultValue: React.PropTypes.string,
  className: React.PropTypes.string,
  onChange: React.PropTypes.func
};
