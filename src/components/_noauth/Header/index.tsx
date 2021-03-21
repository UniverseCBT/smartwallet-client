import React, { useState, useEffect } from 'react';

import { Container } from './styles';

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => {
  const [page, setPage] = useState<string>('');

  useEffect(() => {
    const [, , pageName] = window.location.pathname.split('/');

    setPage(pageName);
  }, [setPage]);

  return <Container page={page}>{children}</Container>;
};

export default Header;
