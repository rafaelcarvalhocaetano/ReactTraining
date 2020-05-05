import { shallowMount } from '@vue/test-utils'

import DragAndDrop from '@/shared/drag-and-drop/dnd-card/DNDCard.vue';

describe('DragAndDrop Component', () => {

  it('should create component', () => {
    expect(shallowMount(DragAndDrop)).toBeTruthy();
  });

})
