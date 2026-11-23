# gbruno-portfolio

Portfólio pessoal de **Giordano Bruno**, desenvolvedor full stack.
Site bilíngue (PT/EN), single page, feito com React 19, TypeScript, Tailwind CSS e Vite.

## Rodando

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/ com o HTML pré-renderizado
npm run preview  # serve o build
```

## Editando o conteúdo

Todo o conteúdo fica em [`src/data/content.ts`](src/data/content.ts): perfil, textos,
projetos, stack, experiência e reconhecimentos. Cada texto visível é `{ pt, en }`.
Itens marcados com `TODO` ainda precisam de informação real.

Arquivos esperados em `public/`:

| Arquivo | Uso |
| --- | --- |
| `profile.webp`, `profile-400.webp` | Foto da seção "Sobre" em 720px e 400px de largura (sem ela, aparecem as iniciais) |
| `cv-pt.pdf`, `cv-en.pdf` | Botão "Baixar currículo" (de acordo com o idioma) |
| `projects/*.webp` | Screenshots opcionais (`image` em cada projeto) |

## Estrutura

```
src/
  data/content.ts        conteúdo do site
  i18n/                  idioma (PT/EN), persistido no localStorage
  components/
    ui/                  Section, reveal on scroll, Tag, ícones de marca
    Navbar Hero About Projects Stack Experience Recognition Contact Footer
  entry-server.tsx       renderiza a página no build
scripts/prerender.mjs    injeta o HTML (PT e EN) em dist/index.html
public/fonts/            Inter e Montserrat, só latim e os pesos usados
```

## Performance

O build gera o HTML da página pronto, nos dois idiomas. Um script inline escolhe o
idioma antes da primeira pintura, e o JS do React carrega depois disso, só para
hidratar a página. Assim o conteúdo aparece sem esperar o JavaScript.

As fontes em `public/fonts/` são subsets: Inter 400 a 700 e Montserrat 700 a 900,
só com caracteres latinos. Se precisar de outro peso ou caractere, gere de novo com
`fonttools` (`varLib.instancer` e `subset`) a partir dos arquivos originais.
