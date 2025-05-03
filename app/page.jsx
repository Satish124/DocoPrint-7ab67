import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { RandomQuote } from 'components/random-quote';
import { getNetlifyContext } from 'utils';

const contextExplainer = `
lorem ipsum
`;

const preDynamicContentExplainer = `
lorem ipsum
`;

const postDynamicContentExplainer = `
lorem ipsum
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
          
        </div>
    );
}

function RuntimeContextCard() {
    const title = `Docoprint Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return (
            <Card title={title}>
                <p></p>
            </Card>
        );
    } else {
        return (
            <Card title={title}>
                <p>Docoprint 2025</p>
            </Card>
        );
    }
}
