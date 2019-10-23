import { shallowMount } from '@vue/test-utils'
import PropertyList from '@/components/PropertyList.vue'

describe('PropertyList', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(PropertyList)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})