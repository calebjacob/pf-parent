import Link from 'next/link';

import * as S from './styles';

export const TheHeader = () => {
  return (
    <S.Header>
      <Link href="/" passHref>
        <S.Logo>My App</S.Logo>
      </Link>
    </S.Header>
  );
};
