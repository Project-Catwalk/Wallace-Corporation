import React from 'react';
import axios from 'axios';
import QA from './qa/QA';
import Reviews from './reviews/Reviews';
import Overview from './overview/Overview';
import StarRating from './StarRating';
import style from '../styleComponents/App.module.css';
// import logo from '../../../public/img/wallacecorp.png';
import { Icon, InlineIcon } from '@iconify/react';
import messageOutlined from '@iconify-icons/ant-design/message-outlined';
import facebookIcon from '@iconify-icons/gg/facebook';
import twitterIcon from '@iconify-icons/gg/twitter';
import instagramIcon from '@iconify-icons/gg/instagram';
import pinterestFill from '@iconify-icons/akar-icons/pinterest-fill';



// const titleBarStyle = {
//   backgroundColor: '#6D8C8C',
// };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      overview: [],
      styles: [],
      related: [],
    };

    this.defaultProduct = this.defaultProduct.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.getRelated = this.getRelated.bind(this);
  }

  componentDidMount() {
    this.defaultProduct(20103);
    this.getStyles(20103);
    this.getRelated(20103);
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
        console.log("Error: ", err);
      });
  }

  render() {
    const {
      questions, id, overview, styles, name, related,
    } = this.state;
    return (
      (questions, id, overview, styles, name, related)
        ? (
        <div>
          <div className={style.headerSale}>
            <p className={style.onSale}>FREE SHIPPING ON ORDERS OVER $75</p>
          </div>
          <div className={style.header}>
              <h1 data-testid="logo" className={`${style.headerText} ${style.logo}`} >The Wallace Corporation</h1>
              {/* <img src={'../../../public/img/wallacecorp.png'}/> */}
              <h5 className={`${style.headerText} ${style.shopAll}`} >SHOP ALL</h5>
              <h5 className={`${style.headerText} ${style.apparel}`} >APPAREL</h5>
              <h5 className={`${style.headerText} ${style.community}`}>COMMUNITY</h5>
              <h5 className={`${style.headerText} ${style.about}`}>ABOUT</h5>
          </div>
          <Overview overview={overview} productStyles={styles} relatedProducts={related} />
          <QA productId={id} getQuestions={this.getQuestions} questions={questions} />
          <Reviews
            productId={id}
            name={name}
          />
          <div className={style.footer}>
            <div className={style.emailSignUp}>
              <h2 className={style.bottomEmailHeading}>Sign up for exclusive offers</h2>
              <input type="text" className={style.bottomEmail} placeholder="Enter your email"/>
              <button className={style.footerSubscribe}>SUBSCRIBE</button>
            </div>
            <div className={style.bottom}>
              <div className={style.social}>
                <h4 className={style.bottomHeading}>SOCIAL</h4>
                <Icon className={style.icon} icon={facebookIcon} />
                <Icon className={style.icon} icon={twitterIcon} />
                <Icon className={style.icon} icon={instagramIcon} />
                <Icon className={`${style.icon} ${style.pinterest}`} icon={pinterestFill} />
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
       )
       : null
    );
  }
}

export default App;
