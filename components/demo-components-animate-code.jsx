'use client';

import {
  Code,
  CodeBlock,
  CodeHeader,
} from '@/components/animate-ui/components/animate/code';
import { Code2 } from "lucide-react";



export const CodeDemo = ({
  duration,
  delay,
  writing,
  cursor,
}) => {
  return (
    <Code
      key={`${duration}-${delay}-${writing}-${cursor}`}
      className="sm:w-111 h-100 border-none"
      code={`'use client';

import * as React from 'react';

type HeroSectionProps = React.ComponentProps<'section'>;

function HeroSection(props: HeroSectionProps) {
  return (
    <section {...props}>
      <h1>Turn Interviews into Offers</h1>
    </section>
  );
}

export { HeroSection, type HeroSectionProps };`}
    >
      <CodeHeader icon={Code2} copyButton>
        HeroSection.jsx
      </CodeHeader>

      <CodeBlock
        cursor={cursor}
        lang="jsx"
        writing={writing}
        duration={duration}
        delay={delay}
      />
    </Code>
  );
};