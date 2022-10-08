import moment from 'moment';
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

const day =
  moment(moment().endOf('month')).diff(
    moment(moment().startOf('month')),
    'days'
  ) + 1;

export const MONTH = day;
