import React from 'react';
import vega from 'vega';
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';

export default class VegaChart extends React.Component {

  componentDidMount() {
    this.resizeEvent = () => {
      this.handleResize();
    };
    window.addEventListener('resize', debounce(this.resizeEvent, 100));

    this.renderChart();
  }

  shouldComponentUpdate(nextProps) {
    return !isEqual(nextProps.data, this.props.data);
  }

  componentDidUpdate() {
    // We should check if the data has changed
    this.renderChart();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeEvent);
  }

  setSize() {
    if (this.chart) {
      this.width = this.chart.offsetWidth;
      this.height = this.chart.offsetHeight;
    }
  }

  parseVega() {
    const defaultPadding = { left: 20, right: 20 };
    const padding = this.props.data.padding || defaultPadding;
    const size = {
      width: this.width - padding.left - padding.right,
      height: this.props.data.height || 260
    };
    const data = Object.assign({}, this.props.data, size);

    this.props.toggleLoading && this.props.toggleLoading(true);
    vega.parse.spec(data, this.props.theme, (err, chart) => {
      this.props.toggleLoading && this.props.toggleLoading(false);
      if (!err) {
        this.vis = chart({
          el: this.chart,
          renderer: 'canvas'
        });
        this.vis.update();
      }
    });
  }

  handleResize() {
    this.renderChart();
  }

  renderChart() {
    this.setSize();
    this.parseVega();
  }

  render() {
    return (
      <div className="c-chart">
        <div ref={(c) => { this.chart = c; }} className="chart" />
      </div>
    );
  }
}

VegaChart.propTypes = {
  // Define the chart data
  data: React.PropTypes.any.isRequired,
  toggleLoading: React.PropTypes.func,
  theme: React.PropTypes.object
};
