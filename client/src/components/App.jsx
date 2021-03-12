import React, { Suspense, lazy } from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';
import messageOutlined from '@iconify-icons/ant-design/message-outlined';
import facebookIcon from '@iconify-icons/gg/facebook';
import twitterIcon from '@iconify-icons/gg/twitter';
import instagramIcon from '@iconify-icons/gg/instagram';
import pinterestFill from '@iconify-icons/akar-icons/pinterest-fill';
import Overview from './overview/Overview';
import style from '../styleComponents/App.module.css';

const QA = lazy(() => import('./qa/QA'));
const Reviews = lazy(() => import('./reviews/Reviews'));

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      overview: [],
      styles: [],
      related: [],
      reviewRating: 0,
      lightMode: true,
    };

    this.defaultProduct = this.defaultProduct.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.getRelated = this.getRelated.bind(this);
    this.handleReviewAverage = this.handleReviewAverage.bind(this);
    this.lightMode = this.lightMode.bind(this);
    this.darkMode = this.darkMode.bind(this);
  }

  componentDidMount() {
    this.defaultProduct(20104);
    this.getStyles(20104);
    this.getRelated(20104);
  }

  handleReviewAverage(average) {
    this.setState({ reviewRating: average });
  }

  getStyles(id) {
    axios.get(`/products/${id}/styles`)
      .then((results) => {
        this.setState({
          styles: results.data.results,
        });
      })
      .catch(console.log);
  }

  getRelated(id) {
    axios.get(`/products/${id}/related`)
      .then((results) => {
        this.setState({
          related: results.data,
        });
      })
      .catch(console.log);
  }

  defaultProduct(productId) {
    axios
      .get(`/products/${productId}`)
      .then((results) => {
        this.setState({
          id: results.data.id,
          name: results.data.name,
          overview: results.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  lightMode() {
    this.setState({
      lightMode: true,
    });
  }

  darkMode() {
    this.setState({
      lightMode: false,
    });
  }

  render() {
    const {
      id, overview, styles, name, related, reviewRating, lightMode,
    } = this.state;

    return (
      (id, overview, styles, name, related)
        ? (
          <>
            <div className={lightMode ? style.lightMode : style.darkMode}>
              <div className={style.headerSale}>
                <p className={style.onSale}>FREE SHIPPING ON ORDERS OVER $75</p>
              </div>
              <div className={style.header}>
                <h1 data-testid="logo" className={`${style.headerText} ${style.logo}`}>The Wallace Corporation</h1>
                <h5 className={`${style.headerText} ${style.shopAll}`}>SHOP ALL</h5>
                <h5 className={`${style.headerText} ${style.apparel}`}>APPAREL</h5>
                <h5 className={`${style.headerText} ${style.community}`}>COMMUNITY</h5>
                <h5 className={`${style.headerText} ${style.about}`}>ABOUT</h5>
              </div>
              <Overview
                overview={overview}
                productStyles={styles}
                relatedProducts={related}
                average={reviewRating}
              />
              <Suspense fallback={<div>LOADING</div>}>
                <QA
                  productId={id}
                  name={name}
                />
              </Suspense>
              <Suspense fallback={<div>LOADING</div>}>
                <Reviews
                  productId={id}
                  name={name}
                  handleReviewAverage={this.handleReviewAverage}
                  average={reviewRating}
                />
              </Suspense>
              <div className={style.footer}>
                <div className={style.emailSignUp}>
                  <h2 className={style.bottomEmailHeading}>Sign up for exclusive offers</h2>
                  <input type="text" className={style.bottomEmail} placeholder="Enter your email" />
                  <button type="submit" className={style.footerSubscribe}>SUBSCRIBE</button>
                </div>
                <div className={lightMode ? style.bottom : style.bottomDarkMode}>
                  <div className={style.social}>
                    <h4 className={style.bottomHeading}>SOCIAL</h4>
                    <Icon className={style.icon} icon={facebookIcon} />
                    <Icon className={style.icon} icon={twitterIcon} />
                    <Icon className={style.icon} icon={instagramIcon} />
                    <Icon className={`${style.icon} ${style.pinterest}`} icon={pinterestFill} />
                  </div>
                  <div className={style.bottomButtons}>
                    <button type="submit" className={`${style.bottomButton} ${style.bottomButtonLight}`} onClick={this.lightMode}>LIGHT</button>
                    <button type="submit" className={`${style.bottomButton} ${style.bottomButtonDark}`} onClick={this.darkMode}>DARK</button>
                  </div>
                  <div className={style.customerCare}>
                    <h4 className={style.bottomHeading}>CUSTOMER CARE</h4>
                    <h5 className={style.customerCareContent}>FAQ</h5>
                    <h5 className={style.customerCareContent}>Shipping + Returns</h5>
                    <h5 className={style.customerCareContent}>Shop Now, Pay Later</h5>
                    <h5 className={style.customerCareContent}>Size Guide</h5>
                    <h5 className={style.customerCareContent}>Privacy Policy</h5>
                    <h5 className={style.customerCareContent}>Contact Us</h5>
                  </div>
                  <div className={style.messageIconSection}>
                    <div className={style.messageIconWrapper}>
                      <Icon className={style.messageIcon} icon={messageOutlined} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
        : null
    );
  }
}

export default App;
