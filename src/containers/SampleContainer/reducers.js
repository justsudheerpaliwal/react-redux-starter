import { SAMPLE_ACTION, ANOTHER_SAMPLE_ACTION } from './constants';

export default function (state = null, action) {
  switch (action.type) {
    case SAMPLE_ACTION:
      return action.payload;
    case ANOTHER_SAMPLE_ACTION:
      return action.payload;
    default: break;
  }
  return state;
}
