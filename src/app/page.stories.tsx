import type { Meta, StoryObj } from '@storybook/react';

import { ThisIsTheBox } from './page';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ThisIsTheBox> = {
  component: ThisIsTheBox,
};

export default meta;
type Story = StoryObj<typeof ThisIsTheBox>;

export const FirstStory: Story = {

};