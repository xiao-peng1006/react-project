export default function reducer(state = {
  all: [],
  fetching: false,
  fetched:false,
  error: null,
}, action) {

  switch (action.type) {
    case "FETCH_ITEMS": {
      return {...state, fetching: true}
    }
    case "FETCH_ITEMS_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_ITEMS_FULLFILLED": {
      return {...state, fetching: false, fetched: true, all: action.payload}
    }
    default: {
      return state
    }
  }
}
