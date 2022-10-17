import { PureComponent } from 'react';
import './Progressbar.styles.css';

class Progressbar extends PureComponent {
  handleBarSteps() {
    const Obj = {};
    Object.keys(this.props.stepMap).forEach((s, i) => (Obj[s] = i + 1));
    return Obj;
  }

  handleStyles = (i) => {
    const currentStep = this.handleBarSteps()[this.props.checkoutStep];
    return currentStep >= i + 1 ? 'step active container' : 'step container';
  };
  handleProress = () => {
    const stepsKeys = Object.keys(this.handleBarSteps());
    const currentStep = this.handleBarSteps()[this.props.checkoutStep];
    return (currentStep / stepsKeys.length) * 100;
  };

  renderProgressbar(stepKeys, checkoutStep, stepMap) {
    return (
      <div id="progress">
        <div
          style={{ width: `${this.handleProress()}%` }}
          id="progress-bar"
        ></div>
        <div id="progress-num">
          {stepKeys.slice(0, -1).map((s, i) => {
            return (
              <div className="container">
                <span key={s} className={this.handleStyles(i)}>
                  {this.handleBarSteps()[checkoutStep] <= i + 1 ? i + 1 : '✓'}
                </span>
                <div className="step__name">{stepMap[s].title.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    const { stepMap, checkoutStep } = this.props;
    const stepKeys = Object.keys(stepMap);

    return <>{this.renderProgressbar(stepKeys, checkoutStep, stepMap)}</>;
  }
}

export default Progressbar;
