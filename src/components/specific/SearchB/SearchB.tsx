import { OptionalSearchTypeB, Search } from 'components/general/Search'
import React from 'react'

import { SearchBProps } from '.'

export const SearchB = (props: SearchBProps) => <Search<OptionalSearchTypeB | undefined> {...props} />
