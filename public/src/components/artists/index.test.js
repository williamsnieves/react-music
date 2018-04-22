import React from 'react'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount } from 'enzyme'

import Artists from './index'

describe('Artist suite test', () => {
	it('should render a search component', () => {
  	const wrapper = shallow(<Artists />);
    expect(wrapper.find('.Artists').length).toBe(1)
  })

  it('should mount in a full DOM', () => {
    expect(mount(<Artists />).find(Artists).length).toBe(1)
  })
})