import styled from 'styled-components';

const pixelToRem = (size) => `${size / 16}rem`;

const fontSize = {
  Gtitle: pixelToRem(20),
  Stitle: pixelToRem(18),
  title: pixelToRem(16),
};

const color = {
  greenfont: '#28883B',
  black: '#262626',
  violet: '#7B41F5',
  blue6: '#4174F5',
  blue1: '#ECF1FE',
  blue7: '#3763D0',
  blue9: '#25428C',
  gray90: '#4a4a4a',
  gray85: '#5c5c5c',
  gray80: '#898989',
  gray70: '#b1b1b1',
  gray60: '#d1d1d1',
  gray40: '#d4d4d4',
  gray30: '#e6e6e6',
  gray20: '#f6f6f6',
  gray12: '#34363B',
  gray10: '#f1f1f1',
  gray9: '#5E6064',
  gray8: '#6F7175',
  gray7: '#9C9D9F',
  grayWhite: '#FCFCFF',
  white: '#fff',
  navy: '#17194a',
  lightNavy: '#494c98',
  darkNavy: '#191926',
  brightNavy: '#f5f6ff',
  TbrightNavy: '#f0f1ff',
  orange: '#ff5100',
  lightOrange: '#ff844b',
  darkOrange: '#ce4607',
  brightOrange: '#fff5f0',
  TbrightOrange: '#ffede4',
};

const common = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
};

const theme = {
  fontSize,
  color,
  common,
};

export default theme;
