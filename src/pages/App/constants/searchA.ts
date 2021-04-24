import { OptionalSearchTypeA, SearchStateType } from 'components/general/Search'

export const A_initSearchStateWithOptional: SearchStateType<OptionalSearchTypeA> = {
  search: '',
  optionalSearch: {
    keyA1: '',
    keyA2: '',
  },
}

export const A_initSearchStateWithoutOptional: SearchStateType = {
  search: '',
}
