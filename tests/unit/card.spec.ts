import { shallowMount } from '@vue/test-utils'

import Card from '@/shared/card/Card.vue';

describe('Card Component', () => {

  it('should create component', () => {
    expect(shallowMount(Card)).toBeTruthy();
  });

})
