import React, { useState, useEffect } from 'react';

import { Container } from './styles';

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => {
  const [page, setPage] = useState<string>('');

  useEffect(() => {
    const [, urlName] = window.location.pathname.split('/');

    setPage(urlName);
  }, [setPage]);

  return <Container page={page}>{children}</Container>;
};

export default Header;
