import { OptionalSearchTypeB, SearchStateType } from 'components/general/Search'

export const B_initSearchStateWithOptional: SearchStateType<OptionalSearchTypeB> = {
  search: '',
  optionalSearch: {
    keyB1: '',
  },
}

export const B_initSearchStateWithoutOptional: SearchStateType = {
  search: '',
}
