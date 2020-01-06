import modalConstants from '../_constants/modal'

export function modal (store={isOpen:false}, action) {
  switch (action.type){
    case modalConstants.MODAL_OPEN:
      return {isOpen:true};
    case modalConstants.MODAL_CLOSE:
      return {isOpen:false}
    default: return {isOpen:false}
  }
}