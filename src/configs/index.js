import images from './images';
import icons from './icons';

export const IMAGES = images;
export const ICONS = icons;

export const getRandomValues = () => {
  let array = [];
  for (let i = 0; i < 7; i++) {
    let data = Math.floor(Math.random() * 7);
    array.push(data);
  }
  return array;
};
