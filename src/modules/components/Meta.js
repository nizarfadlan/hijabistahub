function Meta({ title='Hijabistahub', excerpt='Hijabistahub adalah website penjualan hijab berkualitas premium', cover='/vercel.svg', slug='' }) {
  return (
    <>
      <title>{title}</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <meta name="description" content={excerpt} />
      <meta name="application-name" content="Hijabistahub" />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#FCBC5D" />
      <meta name="msapplication-TileImage" content="/favicon.ico"/>
      <meta name="msapplication-tap-highlight" content="no" />
      <link itemProp="thumbnailUrl" href={cover} />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#000" />
      <meta name="keywords" content={`Hijab, Hijab hits, Hijab abis, Store hijab, ${title}`} />
      <link rel="author" href="Hijababistahub" />
      <link rel="canonical" href={`https://hijabistahub.nizarfadlan.dev/${slug}`} />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="Hijabistahub" />
      <meta property="og:description" content={excerpt} />
      <meta property="og:url" content={`https://hijabistahub.nizarfadlan.dev/${slug}`} />
      <meta property="og:image" content={cover} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:descripton" content={excerpt} />
      <meta name="twitter:url" content={`https://hijabistahub.nizarfadlan.dev/${slug}`} />
      <meta name="twitter:image" content={cover} />
      <meta name="twitter:creator" content="@hijabistahub" />

      <link rel="apple-touch-icon" href="/images/icons/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-status-bar" content="#000" />
    </>
  )
}

export default Meta
