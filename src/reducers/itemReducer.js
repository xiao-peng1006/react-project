export default function reducer(state = {
  item: [],
  fetching: false,
  fetched:false,
  error: null,
}, action) {

  switch (action.type) {
    case "FETCH_ITEM": {
      return {...state, fetching: true}
    }
    case "FETCH_ITEM_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_ITEM_FULLFILLED": {
      return {...state, fetching: false, fetched: true, item: action.payload}
    }
    case "UPDATE_ITEM": {
      return {...state, item: action.payload}
    }
    default: {
      return state
    }
  }
}
