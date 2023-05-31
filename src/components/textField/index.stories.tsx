import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '.';
import '../../index.css';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Email: Story = {
    args: {
        infoText: 'Some Info here',
        size: 'full',
        placeholderText: 'Enter Your Email',
        type: 'email',
        required: true,
        label: 'User Email'
    }
};

export const SmallEmail: Story = {
    args: {
        size: 'small',
        placeholderText: 'Enter Your Email',
        type: 'email',
        required: true,
        label: 'User Email'
    }
};

export const MediumEmail: Story = {
    args: {
        size: 'medium',
        placeholderText: 'Enter Your Email',
        type: 'email',
        required: true,
        label: 'User Email'
    }
};

export const LargeEmail: Story = {
    args: {
        size: 'large',
        placeholderText: 'Enter Your Email',
        type: 'email',
        required: true,
        label: 'User Email'
    }
};

export const TypePassword: Story = {
    args: {
        size: 'medium',
        placeholderText: 'Enter Your Password',
        type: 'password',
        required: true,
        label: 'User Password'
    }
};