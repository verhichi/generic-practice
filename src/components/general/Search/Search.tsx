import React, { ChangeEvent } from 'react'

import { OptionalSearchType, SearchProps } from '.'

export const Search = <T extends OptionalSearchType = undefined>({
  label,
  searchState,
  onChange,
  hasOptionalSearch,
}: SearchProps<T>) => {
  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => onChange({ ...searchState, search: e.target.value })

  return (
    <label id={label}>
      <div>{label}</div>
      <input id={label} value={searchState.search} onChange={handleChangeSearch} />
      {/* hasOptionalSearch && (generate optional input field based on searchState.optionalSearch) */}
    </label>
  )
}
