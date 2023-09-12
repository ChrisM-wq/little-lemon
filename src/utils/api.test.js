import { fetchAPI, submitAPI } from "./api";

describe('fetchAPI', () => {
  it('should return an array of time slots', () => {
    const date = new Date('2023-09-12');
    const result = fetchAPI(date);
    expect(Array.isArray(result)).toBe(true);
  });
});

describe('submitAPI', () => {
  it('should return true when submitted', () => {
    const formData = {
        date: '2023-09-12',
        time: '18:00',
        guests: '4',
        occasion: 'Birthday',
    };
    const result = submitAPI(formData);
    expect(result).toBe(true);
  });
});