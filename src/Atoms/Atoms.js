import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';


  export const FetchTodos = atom({
      key: 'fetchTodos',
      default: [],
  })

  export const allTodos = atom({
      key: 'allTodos',
      default: 'Show All'
  })

  export const searchTodos = atom({
      key: 'searchTodos',
      default: [],
  })

  export const filteredTodos = selector({
      key: 'filteredTodos',
      get: ({get})=> {
          const filter = get(allTodos)
          const todos = get(FetchTodos)

          switch(filter){
                case 'Show Completed':
                    return todos.filter((item) => item.completed)
                case 'Show Uncompleted':
                    return todos.filter((item) => !item.completed)
                default:
                    return todos
            
            }
      }
  })

  export const todoCounter = selector({
      key: 'todoCounter',
      get: ({get}) => {
          const todosList = get(FetchTodos)
          const todosLength = todosList.length
          const completedLength = todosList.filter((item) => item.completed).length
          const uncompletedLength = todosLength - completedLength
        
            return{
                todosLength,
                completedLength,
                uncompletedLength
            }
        }
  })

