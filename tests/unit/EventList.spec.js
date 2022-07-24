import { mount } from '@vue/test-utils'
import EventList from '@/views/EventList'
import { createStore } from '@/store'
import router from '@/router'
import { events as mockEvents } from '../../db.json'

function mountEventList(config = {}) {
  config.mountOptions = config.mountOptions || {}
  config.plugins = config.plugins || {}
  return mount(EventList, {
    global: {
      plugins: [createStore(config.plugins.store), router],
    },
    ...config.mountOptions,
  })
}

let wrapper

describe('EventList', () => {
  beforeEach(() => {
    wrapper = mountEventList()
  })

  it('should render the events', () => {
    // const wrapper = mount(EventList, {
    //   global: {
    //     plugins: [store, router],
    //   },
    // })
    // const wrapper = mountEventList()
    expect(wrapper.exists()).toBeTruthy()
  })

  describe('page title', () => {
    it('is rendered the correct text', () => {
      // const wrapper = mountEventList()
      const title = wrapper.find('[data-testid=event-list-title]')
      expect(title.exists).toBeTruthy()
      expect(title.text()).toContain('Events for Good')
    })
  })

  /**
   * In this specific repo, we're not using the store, so this test should fail.
   */
  describe('events', () => {
    it('are rendered in a list with necessary information', () => {
      // Retrieved from to db.json
      // const mockEvents = [{ description: 'An event', title: 'A title', id: 0 }]
      // Setup
      wrapper = mountEventList({
        plugins: {
          store: {
            state: () => ({
              events: mockEvents,
            }),
          },
        },
      })

      // Find
      const events = wrapper.findAll('[data-testid=event]')

      // Assert
      // expect(events.length).toBe(mockEvents.length)
      // Or use this, to get better error message:
      expect(events).toHaveLength(mockEvents.length)

      // You could use each's Jest function (https://jestjs.io/docs/api#testeachtablename-fn-timeout)
      // This is useful if you're looking for detailed failure messages for what specifically broke
      events.forEach((event, i) => {
        const eventText = event.text()
        expect(eventText).toContain(mockEvents[i].title)
        expect(eventText).toContain(mockEvents[i].date)
      })
    })
  })
})
