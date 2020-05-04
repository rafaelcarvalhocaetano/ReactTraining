import { shallowMount } from '@vue/test-utils'

import Actions from '@/shared/actions/Actions.vue';

describe('Component Actions', () => {

  it('should create component', () => {
    expect(shallowMount(Actions)).toBeTruthy();
  });
  
  it('rshould return One Element in Array List', () => {
    const list = [
      {
        actions: '1'
      }
    ];
    const wrapper = shallowMount(Actions, {
      propsData: { list }
    })
    expect(wrapper.props.length).toEqual(1);
  })
})
