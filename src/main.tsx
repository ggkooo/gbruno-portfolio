import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { LangProvider, detectInitialLang } from './i18n';

const container = document.getElementById('root')!;
const app = (
    <StrictMode>
        <LangProvider initial={detectInitialLang()}>
            <App />
        </LangProvider>
    </StrictMode>
);

// In production the HTML is prerendered in both languages and an inline script in
// index.html has already swapped in the visitor's one, so React only hydrates it.
if (container.hasChildNodes()) {
    hydrateRoot(container, app);
    document.getElementById('prerender-en')?.remove();
} else {
    createRoot(container).render(app);
}
