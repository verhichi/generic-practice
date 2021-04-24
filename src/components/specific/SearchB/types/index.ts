import { OptionalSearchTypeB, SearchStateType } from 'components/general/Search'

export type SearchBProps = {
  label: string
  searchState: SearchStateType<OptionalSearchTypeB | undefined>
  onChange: (searchState: SearchStateType<OptionalSearchTypeB | undefined>) => void
  hasOptionalSearch: boolean
}
