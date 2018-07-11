import * as Actions from '../actions/test.action'
interface TestInterface {
  name: string
}
export interface TestState {
  name: Array < TestInterface > ,
    loaded: boolean,
    loading: boolean
}

export let testState: TestState = {
  name: [{
    name: "sukum"
  }],
  loaded: false,
  loading: false
}
export function reducer(
  state: TestState = testState,
  action: Actions.ActionTestFirst
): TestState {
  switch (action.type) {
    case Actions.GET:
      {
        return {
          ...state,
          loading: true,
          loaded: true
        }

      }
    case Actions.TESTADD:
      {
        return {
          ...state,
          loaded: true,
          loading: true,
          name: [
            ...state.name,
            {
              name : action.payloads
            }
          ]
        }
      }
    default:
      return {
        ...state
      }
  }
}
