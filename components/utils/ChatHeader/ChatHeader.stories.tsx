import { ComponentMeta, ComponentStory } from '@storybook/react';
import ChatHeader, { IChatHeader } from './ChatHeader';
import { mockChatHeaderProps } from './ChatHeader.mocks';

export default {
  title: 'utils/ChatHeader',
  component: ChatHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ChatHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChatHeader> = (args) => (
  <ChatHeader {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockChatHeaderProps.base,
} as IChatHeader;
