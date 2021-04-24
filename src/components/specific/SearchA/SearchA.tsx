import { OptionalSearchTypeA, Search } from 'components/general/Search'
import React from 'react'

import { SearchAProps } from '.'

export const SearchA = (props: SearchAProps) => <Search<OptionalSearchTypeA | undefined> {...props} />
