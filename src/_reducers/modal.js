import modalConstants from '../_constants/modal'

export function modal (state={isOpen:false}, action) {
  switch (action.type){
    case modalConstants.MODAL_OPEN:
      return {...state, isOpen:true};
    case modalConstants.MODAL_CLOSE:
      return {...state, isOpen:false}
    default: return {...state}
  }
}