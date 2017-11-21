import { SAMPLE_ACTION, ANOTHER_SAMPLE_ACTION } from './constants';

export function sampleAction(payload) {
  return {
    type: SAMPLE_ACTION,
    payload,
  };
}

export function anotherSampleAction(payload) {
  return {
    type: ANOTHER_SAMPLE_ACTION,
    payload,
  };
}
