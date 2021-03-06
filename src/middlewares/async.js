export default function({ dispatch }) {
  return next => action => {
    // if the action doesn't have a payload
    // or the payload doesn't have a .then property
    // we don't care about it
    if(!action.payload || !action.payload.then) {
      return next(action)
    }

    // Make sure the action's promise resolves
    action.payload
      .then(function(response) {
        // create a new action with the old type
        // but replace the promse with the response data
        const newAction = { ...action, payload: response }
        dispatch(newAction)
      })
  }
}
