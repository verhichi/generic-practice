export type OptionalSearchTypeA = {
  keyA1: string
  keyA2: string
}

export type OptionalSearchTypeB = {
  keyB1: string
}

export type OptionalSearchType = OptionalSearchTypeA | OptionalSearchTypeB | undefined

export type SearchStateType<T extends OptionalSearchType = undefined> = {
  search: string
  optionalSearch?: T
}

export type SearchProps<T extends OptionalSearchType = undefined> = {
  label: string
  searchState: SearchStateType<T>
  onChange: (searchState: SearchStateType<T>) => void
  hasOptionalSearch: boolean
}
