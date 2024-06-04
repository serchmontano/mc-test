import {DefaultTheme} from 'styled-components/native';

enum BrandColors {
  Primary = '#E35205',
  Secondary = '#F98E20',
  Grey = '#333333',
  Grey50 = '#F8F8F8',
  Grey100 = '#EBEBEB',
  Grey400 = '#ADADAD',
  Grey800 = '#5C5C5C',
  Disabled = '#D6D6D6',
  Background = '#FFFFFF',
  Text = '#000000',
  Success = '#7A9A02',
  Label = '#666666',
  Links = '#618DFF',
}

export const CommonTheme: DefaultTheme = {
  spacing: {
    unit: (multiplier = 1) => 8 * multiplier,
  },
  color: {
    primary: BrandColors.Primary,
    secondary: BrandColors.Secondary,
    grey: BrandColors.Grey,
    grey50: BrandColors.Grey50,
    grey100: BrandColors.Grey100,
    grey400: BrandColors.Grey400,
    grey800: BrandColors.Grey800,
    disabled: BrandColors.Disabled,
    background: BrandColors.Background,
    text: BrandColors.Text,
    success: BrandColors.Success,
    label: BrandColors.Label,
    link: BrandColors.Links,
  },
};
