import { ComponentMeta, ComponentStory } from '@storybook/react';
import MessageBox, { IMessageBox } from './MessageBox';
import { mockMessageBoxProps } from './MessageBox.mocks';

export default {
  title: 'utils/MessageBox',
  component: MessageBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MessageBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MessageBox> = (args) => (
  <MessageBox {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMessageBoxProps.base,
} as IMessageBox;
