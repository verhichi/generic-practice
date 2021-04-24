import { OptionalSearchTypeA, SearchStateType } from 'components/general/Search'

export type SearchAProps = {
  label: string
  searchState: SearchStateType<OptionalSearchTypeA | undefined>
  onChange: (searchState: SearchStateType<OptionalSearchTypeA | undefined>) => void
  hasOptionalSearch: boolean
}
