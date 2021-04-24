import './styles.css'

import { SearchA } from 'components/specific/SearchA'
import { SearchB } from 'components/specific/SearchB'
import React, { useState } from 'react'

import {
  A_initSearchStateWithOptional,
  A_initSearchStateWithoutOptional,
  B_initSearchStateWithOptional,
  B_initSearchStateWithoutOptional,
} from '.'

export const App = () => {
  const [A_searchStateWithOptional, setA_searchStateWithOptional] = useState(A_initSearchStateWithOptional)
  const [A_searchStateWithoutOptional, setA_searchStateWithoutOptional] = useState(A_initSearchStateWithoutOptional)
  const [B_searchStateWithOptional, setB_searchStateWithOptional] = useState(B_initSearchStateWithOptional)
  const [B_searchStateWithoutOptional, setB_searchStateWithoutOptional] = useState(B_initSearchStateWithoutOptional)

  // typescript tells me that onChange has a type mismatch, but I know that it will return the type I expect
  return (
    <div className="App">
      <SearchA
        label="Search A with Optional"
        searchState={A_searchStateWithOptional}
        onChange={setA_searchStateWithOptional}
        hasOptionalSearch={true}
      />
      <SearchA
        label="Search A without Optional"
        searchState={A_searchStateWithoutOptional}
        onChange={setA_searchStateWithoutOptional}
        hasOptionalSearch={false}
      />
      <SearchB
        label="Search B with Optional"
        searchState={B_searchStateWithOptional}
        onChange={setB_searchStateWithOptional}
        hasOptionalSearch={true}
      />
      <SearchB
        label="Search B without Optional"
        searchState={B_searchStateWithoutOptional}
        onChange={setB_searchStateWithoutOptional}
        hasOptionalSearch={false}
      />
    </div>
  )
}
