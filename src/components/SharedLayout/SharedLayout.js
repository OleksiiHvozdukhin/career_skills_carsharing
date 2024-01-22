import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { Navigation } from 'components/TemporaryNavigation/TemporaryNavigation';
import { Loader } from 'components/Loader';
import { Wrapper } from './SharedLayout.styled';
import { StyledLink } from './SharedLayout.styled.js';

export const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <StyledLink to="/">
          {' '}
          <span></span>
          <span></span>
          <span></span>
          <span></span>Homepage
        </StyledLink>
        <StyledLink to="/catalog">
          {' '}
          <span></span>
          <span></span>
          <span></span>
          <span></span>Catalog
        </StyledLink>
        <StyledLink to="/favorites">
          {' '}
          <span></span>
          <span></span>
          <span></span>
          <span></span>Favorites
        </StyledLink>
      </nav>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Wrapper>
  );
};
