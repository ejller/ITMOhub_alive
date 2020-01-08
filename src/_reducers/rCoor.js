export function rCoor (state={r:2}, action) {
  switch (action.type){
    case 'UPDATE_R':
      return {...state, r: action.data};
    default: return {...state}
  }
}