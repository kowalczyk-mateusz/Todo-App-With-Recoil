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