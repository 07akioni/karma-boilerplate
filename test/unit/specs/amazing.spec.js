import Amazing from 'main/amazing'
import { createTest, createVue, destroyVM } from '../util'

describe('amazing', function () {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('should amazing', function () {
    vm = createTest(Amazing, {
      title: 'amazing1'
    }, true)
    expect(vm.$el.textContent).to.equal('amazing1')
  })
})