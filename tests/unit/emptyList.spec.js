import { shallowMount } from '@vue/test-utils'
import PropertyList from '@/components/PropertyList.vue'

describe('PropertyList.vue', () => {
  it('check for empty list', () => {
    const msg = 'List not loaded'
    const wrapper = shallowMount(PropertyList, {
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
