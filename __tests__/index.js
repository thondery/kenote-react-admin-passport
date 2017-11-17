
import React from 'react'
import renderer from 'react-test-renderer'
import { Screen } from '../lib'

test('component => Screen', () => {
  const component = renderer.create(
    <Screen >
     React test
    </Screen>
  )
  expect(component).toMatchSnapshot()
})