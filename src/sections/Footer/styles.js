import styled from 'styled-components';

// Utilities
import themeGet from '../../utilities/themeGet';

export const FooterContainer = styled.footer`
  padding: ${themeGet('space.3')};
  background-color: ${themeGet('colors.grays.23')};
  color: ${themeGet('colors.grays.13')};
`;

export const FooterList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 1.25em;
`;

export const FooterListItem = styled.li`
  &:not(:last-child) {
    margin-right: ${themeGet('space.2')};
  }
`;

export const FooterLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLink = styled.a`
  display: block;
  color: ${themeGet('colors.grays.18')};

  &:hover {
    color: ${themeGet('colors.grays.14')};
  }

  svg {
    display: block;
  }
`;
