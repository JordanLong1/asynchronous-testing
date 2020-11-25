import React from 'react';
// import App from './App';
import App from './App.js'
import {shallow} from 'enzyme';
import fetchMock from 'fetch-mock'
import moxios from 'moxios'

const nextTick = async () => {
  return new Promise(resolve => {
    setTimeout(resolve, 0)
  })
}

const dummyUser = {
  id: 1, 
  name: 'Jack Franklin', 
  website: 'https::javascriptplayground.com'
}

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
    moxios.install()

  })

  afterEach(() => {
    // wrapper.unmount();
    moxios.uninstall();
  })

  test('component renders without an error', () => {
    const component = wrapper.find('.app-container'); 
    expect(component.exists()).toBe(true);
  }); 

  test('has state user set to null', () => {
    const text = wrapper.find('.loading-paragraph');
    expect(text.text()).toEqual('Loading!') 
  })

  test('h4 contains users name from fetch', async () => {
  const usersName = dummyUser.name

  moxios.wait(() => {
    const request = moxios.requests.mostRecent(); 
    request.respondWith({
      status: 200, 
      response: usersName
    })
  })
  return wrapper.instance()
  .then(() => {
    const oldState = wrapper.state()
    expect(oldState.user).toBe(usersName)
  })
   
  })

})
