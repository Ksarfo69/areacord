import { ComponentMeta, ComponentStory } from '@storybook/react';
import ChatInput, { IChatInput } from './ChatInput';
import { mockChatInputProps } from './ChatInput.mocks';

export default {
  title: 'utils/ChatInput',
  component: ChatInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ChatInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChatInput> = (args) => (
  <ChatInput {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockChatInputProps.base,
} as IChatInput;
