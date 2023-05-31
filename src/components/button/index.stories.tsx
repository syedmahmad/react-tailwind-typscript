import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';
import '../../index.css';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        buttonText: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        buttonText: 'Button',
    },
};

export const ExtraSmall: Story = {
    args: {
      size: 'x-small',
      buttonText: 'Button',
    },
};

export const Small: Story = {
    args: {
      size: 'small',
      buttonText: 'Button',
    },
};

export const Medium: Story = {
    args: {
      size: 'medium',
      buttonText: 'Button',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        buttonText: 'Button',
    },
};

export const ExtraLarge: Story = {
    args: {
        size: 'x-large',
        buttonText: 'Button',
    },
};
