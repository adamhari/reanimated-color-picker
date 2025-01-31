'use strict';
(self.webpackChunkmy_docs = self.webpackChunkmy_docs || []).push([
  [817],
  {
    1310: (e, s, t) => {
      t.d(s, { Z: () => p });
      t(7294);
      var n = t(4334),
        i = t(5281),
        a = t(3438),
        r = t(8596),
        c = t(9960),
        l = t(5999),
        o = t(4996),
        d = t(5893);
      function m(e) {
        return (0, d.jsx)('svg', {
          viewBox: '0 0 24 24',
          ...e,
          children: (0, d.jsx)('path', {
            d: 'M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z',
            fill: 'currentColor',
          }),
        });
      }
      const u = { breadcrumbHomeIcon: 'breadcrumbHomeIcon_YNFT' };
      function h() {
        const e = (0, o.Z)('/');
        return (0, d.jsx)('li', {
          className: 'breadcrumbs__item',
          children: (0, d.jsx)(c.Z, {
            'aria-label': (0, l.I)({
              id: 'theme.docs.breadcrumbs.home',
              message: 'Home page',
              description: 'The ARIA label for the home page in the breadcrumbs',
            }),
            className: 'breadcrumbs__link',
            href: e,
            children: (0, d.jsx)(m, { className: u.breadcrumbHomeIcon }),
          }),
        });
      }
      const b = { breadcrumbsContainer: 'breadcrumbsContainer_Z_bl' };
      function x(e) {
        let { children: s, href: t, isLast: n } = e;
        const i = 'breadcrumbs__link';
        return n
          ? (0, d.jsx)('span', { className: i, itemProp: 'name', children: s })
          : t
          ? (0, d.jsx)(c.Z, {
              className: i,
              href: t,
              itemProp: 'item',
              children: (0, d.jsx)('span', { itemProp: 'name', children: s }),
            })
          : (0, d.jsx)('span', { className: i, children: s });
      }
      function v(e) {
        let { children: s, active: t, index: i, addMicrodata: a } = e;
        return (0, d.jsxs)('li', {
          ...(a && { itemScope: !0, itemProp: 'itemListElement', itemType: 'https://schema.org/ListItem' }),
          className: (0, n.Z)('breadcrumbs__item', { 'breadcrumbs__item--active': t }),
          children: [s, (0, d.jsx)('meta', { itemProp: 'position', content: String(i + 1) })],
        });
      }
      function p() {
        const e = (0, a.s1)(),
          s = (0, r.Ns)();
        return e
          ? (0, d.jsx)('nav', {
              className: (0, n.Z)(i.k.docs.docBreadcrumbs, b.breadcrumbsContainer),
              'aria-label': (0, l.I)({
                id: 'theme.docs.breadcrumbs.navAriaLabel',
                message: 'Breadcrumbs',
                description: 'The ARIA label for the breadcrumbs',
              }),
              children: (0, d.jsxs)('ul', {
                className: 'breadcrumbs',
                itemScope: !0,
                itemType: 'https://schema.org/BreadcrumbList',
                children: [
                  s && (0, d.jsx)(h, {}),
                  e.map((s, t) => {
                    const n = t === e.length - 1,
                      i = 'category' === s.type && s.linkUnlisted ? void 0 : s.href;
                    return (0, d.jsx)(
                      v,
                      {
                        active: n,
                        index: t,
                        addMicrodata: !!i,
                        children: (0, d.jsx)(x, { href: i, isLast: n, children: s.label }),
                      },
                      t
                    );
                  }),
                ],
              }),
            })
          : null;
      }
    },
    4228: (e, s, t) => {
      t.r(s), t.d(s, { default: () => y });
      t(7294);
      var n = t(1944),
        i = t(3438),
        a = t(4996),
        r = t(4334),
        c = t(9960),
        l = t(3919),
        o = t(5999),
        d = t(2503);
      const m = { cardContainer: 'cardContainer_fWXF', cardTitle: 'cardTitle_rnsV', cardDescription: 'cardDescription_PWke' };
      var u = t(5893);
      function h(e) {
        let { href: s, children: t } = e;
        return (0, u.jsx)(c.Z, { href: s, className: (0, r.Z)('card padding--lg', m.cardContainer), children: t });
      }
      function b(e) {
        let { href: s, icon: t, title: n, description: i } = e;
        return (0, u.jsxs)(h, {
          href: s,
          children: [
            (0, u.jsxs)(d.Z, { as: 'h2', className: (0, r.Z)('text--truncate', m.cardTitle), title: n, children: [t, ' ', n] }),
            i && (0, u.jsx)('p', { className: (0, r.Z)('text--truncate', m.cardDescription), title: i, children: i }),
          ],
        });
      }
      function x(e) {
        let { item: s } = e;
        const t = (0, i.LM)(s);
        return t
          ? (0, u.jsx)(b, {
              href: t,
              icon: '\ud83d\uddc3\ufe0f',
              title: s.label,
              description:
                s.description ??
                (0, o.I)(
                  {
                    message: '{count} items',
                    id: 'theme.docs.DocCard.categoryDescription',
                    description:
                      'The default description for a category card in the generated index about how many items this category includes',
                  },
                  { count: s.items.length }
                ),
            })
          : null;
      }
      function v(e) {
        let { item: s } = e;
        const t = (0, l.Z)(s.href) ? '\ud83d\udcc4\ufe0f' : '\ud83d\udd17',
          n = (0, i.xz)(s.docId ?? void 0);
        return (0, u.jsx)(b, { href: s.href, icon: t, title: s.label, description: s.description ?? n?.description });
      }
      function p(e) {
        let { item: s } = e;
        switch (s.type) {
          case 'link':
            return (0, u.jsx)(v, { item: s });
          case 'category':
            return (0, u.jsx)(x, { item: s });
          default:
            throw new Error(`unknown item type ${JSON.stringify(s)}`);
        }
      }
      function g(e) {
        let { className: s } = e;
        const t = (0, i.jA)();
        return (0, u.jsx)(j, { items: t.items, className: s });
      }
      function j(e) {
        const { items: s, className: t } = e;
        if (!s) return (0, u.jsx)(g, { ...e });
        const n = (0, i.MN)(s);
        return (0, u.jsx)('section', {
          className: (0, r.Z)('row', t),
          children: n.map((e, s) =>
            (0, u.jsx)('article', { className: 'col col--6 margin-bottom--lg', children: (0, u.jsx)(p, { item: e }) }, s)
          ),
        });
      }
      var f = t(4966),
        N = t(3120),
        Z = t(4364),
        _ = t(1310);
      const L = { generatedIndexPage: 'generatedIndexPage_vN6x', list: 'list_eTzJ', title: 'title_kItE' };
      function k(e) {
        let { categoryGeneratedIndex: s } = e;
        return (0, u.jsx)(n.d, { title: s.title, description: s.description, keywords: s.keywords, image: (0, a.Z)(s.image) });
      }
      function T(e) {
        let { categoryGeneratedIndex: s } = e;
        const t = (0, i.jA)();
        return (0, u.jsxs)('div', {
          className: L.generatedIndexPage,
          children: [
            (0, u.jsx)(N.Z, {}),
            (0, u.jsx)(_.Z, {}),
            (0, u.jsx)(Z.Z, {}),
            (0, u.jsxs)('header', {
              children: [
                (0, u.jsx)(d.Z, { as: 'h1', className: L.title, children: s.title }),
                s.description && (0, u.jsx)('p', { children: s.description }),
              ],
            }),
            (0, u.jsx)('article', {
              className: 'margin-top--lg',
              children: (0, u.jsx)(j, { items: t.items, className: L.list }),
            }),
            (0, u.jsx)('footer', {
              className: 'margin-top--lg',
              children: (0, u.jsx)(f.Z, { previous: s.navigation.previous, next: s.navigation.next }),
            }),
          ],
        });
      }
      function y(e) {
        return (0, u.jsxs)(u.Fragment, { children: [(0, u.jsx)(k, { ...e }), (0, u.jsx)(T, { ...e })] });
      }
    },
    4966: (e, s, t) => {
      t.d(s, { Z: () => l });
      t(7294);
      var n = t(5999),
        i = t(4334),
        a = t(9960),
        r = t(5893);
      function c(e) {
        const { permalink: s, title: t, subLabel: n, isNext: c } = e;
        return (0, r.jsxs)(a.Z, {
          className: (0, i.Z)('pagination-nav__link', c ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'),
          to: s,
          children: [
            n && (0, r.jsx)('div', { className: 'pagination-nav__sublabel', children: n }),
            (0, r.jsx)('div', { className: 'pagination-nav__label', children: t }),
          ],
        });
      }
      function l(e) {
        const { previous: s, next: t } = e;
        return (0, r.jsxs)('nav', {
          className: 'pagination-nav docusaurus-mt-lg',
          'aria-label': (0, n.I)({
            id: 'theme.docs.paginator.navAriaLabel',
            message: 'Docs pages',
            description: 'The ARIA label for the docs pagination',
          }),
          children: [
            s &&
              (0, r.jsx)(c, {
                ...s,
                subLabel: (0, r.jsx)(n.Z, {
                  id: 'theme.docs.paginator.previous',
                  description: 'The label used to navigate to the previous doc',
                  children: 'Previous',
                }),
              }),
            t &&
              (0, r.jsx)(c, {
                ...t,
                subLabel: (0, r.jsx)(n.Z, {
                  id: 'theme.docs.paginator.next',
                  description: 'The label used to navigate to the next doc',
                  children: 'Next',
                }),
                isNext: !0,
              }),
          ],
        });
      }
    },
    4364: (e, s, t) => {
      t.d(s, { Z: () => l });
      t(7294);
      var n = t(4334),
        i = t(5999),
        a = t(5281),
        r = t(4477),
        c = t(5893);
      function l(e) {
        let { className: s } = e;
        const t = (0, r.E)();
        return t.badge
          ? (0, c.jsx)('span', {
              className: (0, n.Z)(s, a.k.docs.docVersionBadge, 'badge badge--secondary'),
              children: (0, c.jsx)(i.Z, {
                id: 'theme.docs.versionBadge.label',
                values: { versionLabel: t.label },
                children: 'Version: {versionLabel}',
              }),
            })
          : null;
      }
    },
    3120: (e, s, t) => {
      t.d(s, { Z: () => v });
      t(7294);
      var n = t(4334),
        i = t(2263),
        a = t(9960),
        r = t(5999),
        c = t(143),
        l = t(5281),
        o = t(373),
        d = t(4477),
        m = t(5893);
      const u = {
        unreleased: function (e) {
          let { siteTitle: s, versionMetadata: t } = e;
          return (0, m.jsx)(r.Z, {
            id: 'theme.docs.versions.unreleasedVersionLabel',
            description: "The label used to tell the user that he's browsing an unreleased doc version",
            values: { siteTitle: s, versionLabel: (0, m.jsx)('b', { children: t.label }) },
            children: 'This is unreleased documentation for {siteTitle} {versionLabel} version.',
          });
        },
        unmaintained: function (e) {
          let { siteTitle: s, versionMetadata: t } = e;
          return (0, m.jsx)(r.Z, {
            id: 'theme.docs.versions.unmaintainedVersionLabel',
            description: "The label used to tell the user that he's browsing an unmaintained doc version",
            values: { siteTitle: s, versionLabel: (0, m.jsx)('b', { children: t.label }) },
            children: 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.',
          });
        },
      };
      function h(e) {
        const s = u[e.versionMetadata.banner];
        return (0, m.jsx)(s, { ...e });
      }
      function b(e) {
        let { versionLabel: s, to: t, onClick: n } = e;
        return (0, m.jsx)(r.Z, {
          id: 'theme.docs.versions.latestVersionSuggestionLabel',
          description: 'The label used to tell the user to check the latest version',
          values: {
            versionLabel: s,
            latestVersionLink: (0, m.jsx)('b', {
              children: (0, m.jsx)(a.Z, {
                to: t,
                onClick: n,
                children: (0, m.jsx)(r.Z, {
                  id: 'theme.docs.versions.latestVersionLinkLabel',
                  description: 'The label used for the latest version suggestion link label',
                  children: 'latest version',
                }),
              }),
            }),
          },
          children: 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).',
        });
      }
      function x(e) {
        let { className: s, versionMetadata: t } = e;
        const {
            siteConfig: { title: a },
          } = (0, i.Z)(),
          { pluginId: r } = (0, c.gA)({ failfast: !0 }),
          { savePreferredVersionName: d } = (0, o.J)(r),
          { latestDocSuggestion: u, latestVersionSuggestion: x } = (0, c.Jo)(r),
          v = u ?? (p = x).docs.find(e => e.id === p.mainDocId);
        var p;
        return (0, m.jsxs)('div', {
          className: (0, n.Z)(s, l.k.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'),
          role: 'alert',
          children: [
            (0, m.jsx)('div', { children: (0, m.jsx)(h, { siteTitle: a, versionMetadata: t }) }),
            (0, m.jsx)('div', {
              className: 'margin-top--md',
              children: (0, m.jsx)(b, { versionLabel: x.label, to: v.path, onClick: () => d(x.name) }),
            }),
          ],
        });
      }
      function v(e) {
        let { className: s } = e;
        const t = (0, d.E)();
        return t.banner ? (0, m.jsx)(x, { className: s, versionMetadata: t }) : null;
      }
    },
  },
]);
