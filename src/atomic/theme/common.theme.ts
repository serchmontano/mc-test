import {DefaultTheme} from 'styled-components/native';

enum BrandColors {
  Primary = '#E35205',
  Secondary = '#F98E20',
  Solid = '#333333',
  Disabled = '#D6D6D6',
  White = '#FFFFFF',
  Background = '#FFFFFF',
  Text = '#000000',
  Success = '#7A9A02',
  Label = '#666666',
  Description = '#5C5C5C',
}

export const CommonTheme: DefaultTheme = {
  spacing: {
    unit: (multiplier = 1) => 8 * multiplier,
  },
  color: {
    primary: BrandColors.Primary,
    secondary: BrandColors.Secondary,
    solid: BrandColors.Solid,
    disabled: BrandColors.Disabled,
    white: BrandColors.White,
    background: BrandColors.Background,
    text: BrandColors.Text,
    success: BrandColors.Success,
    label: BrandColors.Label,
    description: BrandColors.Description,
  },
};
