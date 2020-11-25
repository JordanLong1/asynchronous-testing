import React from 'react';
// import App from './App';
import App from './App.js'
import {shallow} from 'enzyme';
import {handleFetch} from './App'

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

 const runAllPromises = () => new Promise(setImmediate)


describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)

  })

  afterEach(() => {
    // wrapper.unmount();
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
   
    const mockCall = jest.fn(); 
    console.log(mockCall)
    const component = wrapper.find('[data-testid="user-name"]'); 



    expect(mockCall).toHaveBeenCalled(); 

    await runAllPromises() 

    wrapper.update(); 
    expect(component).toHaveLength(1)
  })

})

