import React from 'react';
import styles from './ImageGallery.module.css';

const ImageGalleryItem = ({ image, onClick }) => (
  <li
    className={styles.ImageGalleryItem}
    onClick={() => onClick(image.largeImageURL)}
  >
    <img
      className={styles.ImageGalleryItemImage}
      src={image.webformatURL}
      alt={image.tags}
    />
  </li>
);

export default ImageGalleryItem;
