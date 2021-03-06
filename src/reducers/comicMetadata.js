import { COMIC_RETRIEVED } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case COMIC_RETRIEVED:
      return Object.assign({}, state, { [action.comicNum]: action.comicMetadata });
    default:
      return state;
  }
};
