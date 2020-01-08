
export function sendPoint (state={lastPoint:{id:'0'}}, action) {
  switch (action.type){
    case 'SEND_POINT_SUCCESS':
      return {...state, sendPoint:true, lastPoint: action.data.point};
    case 'SEND_POINT_FAILED':
      return {...state, sendPoint:false};
    default: return {...state}
  }
}