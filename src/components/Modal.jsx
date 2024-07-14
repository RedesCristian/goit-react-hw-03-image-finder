import { Component } from 'react';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

class Modal extends Component {
  componentDidMount() {
    this.instance = basicLightbox.create(`
      <img src="${this.props.image}" alt="" />
    `);
    this.instance.show();
  }

  componentWillUnmount() {
    if (this.instance.visible()) {
      this.instance.close();
    }
  }

  render() {
    return null;
  }
}

export default Modal;
