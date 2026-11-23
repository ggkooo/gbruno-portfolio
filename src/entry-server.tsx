import { renderToString } from 'react-dom/server';
import App from './App';
import { LangProvider } from './i18n';
import type { Lang } from './i18n';

/** Renders the page to HTML at build time (see scripts/prerender.mjs). */
export function render(lang: Lang) {
    return renderToString(
        <LangProvider initial={lang}>
            <App />
        </LangProvider>,
    );
}
