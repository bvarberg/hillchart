import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/anchor.jsx');
}

configure(loadStories, module);
