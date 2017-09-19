const DIRTY = 'DIRTY'

export function isDirty(){
    return {
        type: DIRTY,
        clicked: true
    }
}

export default function reducer(state = false, action){
    switch(action.type){
        case DIRTY:
          return action.clicked
        default:
          return state
    }
}