import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import '../../../styles/tailwind.css'
import NoDataView from './index.js'

export default {
   component: NoDataView,
   title: 'Common/NoDataView'
}

export const defaultView = () => <NoDataView />

export const knobs = () => (
   <NoDataView
      errorMessage={text('errorMessage', 'No data found!')}
   />
)

knobs.story = {
   decorators: [withKnobs]
}
