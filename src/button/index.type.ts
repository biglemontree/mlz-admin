// <reference types="react" />
import React from 'react';
import { ButtonProps, ButtonType } from 'antd/lib/button';

export type ButtonGroupPropableValue = any;
export interface GroupType {
  key: string | number;
  text: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  value?: ButtonGroupPropableValue;
  leftIconType?: string;
  rightIconType?: string;
  type?: ButtonType;
}
export type MenuType = { iconType?: string } & Exclude<GroupType, 'leftIconType' | 'rightIconType' | 'type' | 'onClick'>;

export interface IButtonProps extends ButtonProps {
  group?: readonly GroupType[];
}
export type ButtonGroupTypes = {
  children: React.ReactNode;
};
