import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/todos";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    case DELETE_TODO: {
      const { id } = action.payload;
      delete state.byIds[id];
      return {
        ...state,
        allIds: state.allIds.filter(todoId=>todoId!==id),
        byIds: {
          ...state.byIds
        }

      };
    }
    case UPDATE_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            content: content
          }
        }
      };

    }
    default:
      return state;
  }
}
