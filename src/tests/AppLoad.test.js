import { render, screen, fireEvent, act, cleanup } from '@testing-library/react';
import App from '../App';
import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import recipes from './mocks/MockData-recipes'


const mock = new MockAdapter(axios);
mock.onGet('http://localhost:3000/recipes').reply(200, recipes)


describe('on App load', () => {

  let promise;
  let axiosSpy;

  beforeEach(() => {
    promise = Promise.resolve()
    axiosSpy = jest.spyOn(axios, 'get')
  })

  afterEach(cleanup);



  test('initial data exists', async () => {
    render(<App />);

    await act(() => promise)
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/recipes');
  })
})