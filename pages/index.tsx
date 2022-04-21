import type { NextPage } from 'next';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Flex } from '@/components/flex';
import { H1, H2, H3 } from '@/components/heading';
import { P } from '@/components/paragraph';
import { Section } from '@/components/section';
import { TextLink } from '@/components/text-link';
// import { CrazyThing } from '@/smf-child-1/components/crazy-thing';

const HomePage: NextPage = () => {
  return (
    <>
      <Section color="primary" noBorder>
        <H1>Hello!</H1>

        <P>
          This is some paragraph text. Here is a{' '}
          <Link href="/smf-child-1/crazy" passHref>
            <TextLink>link</TextLink>
          </Link>{' '}
          to a submodule example.
        </P>

        <P>
          THere is a different{' '}
          <Link href="/smf-child-2/cool" passHref>
            <TextLink>link</TextLink>
          </Link>{' '}
          to a submodule example.
        </P>

        <Flex stack="mobile">
          <Button
            size="large"
            onClick={() => {
              alert('Hello 1');
            }}
          >
            Click Me
          </Button>
          <Button
            color="secondary"
            onClick={() => {
              alert('Hello 2');
            }}
          >
            Click Me
          </Button>
          <Button
            color="secondary"
            size="small"
            onClick={() => {
              alert('Hello 3');
            }}
          >
            Click Me
          </Button>
        </Flex>
      </Section>

      <Section>
        <H2>A Submodule Component</H2>
        {/* <CrazyThing title="Hello There!"></CrazyThing> */}
      </Section>

      <Section>
        <H3>Another Section</H3>
        <P>This is some other paragraph text.</P>
      </Section>
    </>
  );
};

export default HomePage;
