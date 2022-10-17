import Progressbar from '../Progressbar/Progressbar.component';
import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import ContentWrapper from 'SourceComponent/ContentWrapper';
import './Checkout.styles.extension.css';

class Checkout extends SourceCheckout {
  render() {
    return (
      <main block="Checkout">
        <Progressbar
          stepMap={this.stepMap}
          checkoutStep={this.props.checkoutStep}
        />
        <ContentWrapper
          wrapperMix={{ block: 'Checkout', elem: 'Wrapper' }}
          label={__('Checkout page')}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}

export default Checkout;
