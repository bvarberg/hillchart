import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, color } from '@storybook/addon-knobs';

import Anchor from '../components/Anchor';

const stories = storiesOf('Anchor', module);
stories.addDecorator(withKnobs);
stories.addDecorator(storyFn => (
  <svg
    width='100'
    height='100'
    viewBox='0 0 100 100'
  >
    {storyFn()}
  </svg>
));

stories.add('with the default color', () => (
    <Anchor />
  ));

stories.add('with a specific color', () => {
  const fill = color('Fill', '#16a085');

  return (
    <Anchor fill={fill} />
  );
});
