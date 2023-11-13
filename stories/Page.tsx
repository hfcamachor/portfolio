import React from 'react';

import { Header } from './organisms/Header/Header';
import './page.css';

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      Hello
    </article>
  );
};
