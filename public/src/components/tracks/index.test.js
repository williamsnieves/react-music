import React from 'react'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount } from 'enzyme'

import Tracks from './index'

describe('Tracks suite test', () => {
	it('should render a search component', () => {
  	const wrapper = shallow(<Tracks />);
    expect(wrapper.find('.Tracks').length).toBe(1)
  })

  it('should mount in a full DOM', () => {
    expect(mount(<Tracks />).find(Tracks).length).toBe(1)
  })
})