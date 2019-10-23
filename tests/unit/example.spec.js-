import { shallowMount } from '@vue/test-utils'
import PropertyList from '@/components/PropertyList.vue'

describe('PropertyList.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(PropertyList, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
