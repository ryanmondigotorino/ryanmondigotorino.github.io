import React, { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import { SEO } from 'interfaces';

const isProdMode = process.env.NODE_ENV === 'production';

type Props = { seo: SEO };

const NextSeoBundle = ({ seo }: Props) => {
  const [mainseo, setMainSeo] = useState<SEO['mainseo']>(seo?.mainseo);
  const [dynaseo, setDynaSeo] = useState<SEO['seo']>(seo?.seo || []);

  useEffect(() => {
    if (seo?.mainseo) {
      setMainSeo(seo?.mainseo);
    }

    if (seo?.seo) {
      setDynaSeo(seo?.seo);
    }

    return () => {
      setMainSeo({});
      setDynaSeo([]);
    };
  }, [seo]);

  return (
    <>
      <NextSeo
        description={
          mainseo?.description || process.env.APP_TITLE || 'Thors Portfolio'
        }
        nofollow={!isProdMode}
        noindex={!isProdMode}
        title={mainseo?.title || process.env.APP_TITLE || 'Thors Portfolio'}
      />
      {dynaseo && dynaseo?.length > 0
        ? dynaseo
            ?.filter((meta) => !!meta)
            .map((meta, i) =>
              meta?.name === 'title' ? (
                <NextSeo
                  key={i}
                  nofollow={!isProdMode}
                  noindex={!isProdMode}
                  title={meta?.content}
                />
              ) : meta?.name === 'canonical' ? (
                <NextSeo
                  key={i}
                  canonical={meta?.content}
                  nofollow={!isProdMode}
                  noindex={!isProdMode}
                />
              ) : (
                <NextSeo
                  key={i}
                  additionalMetaTags={[
                    {
                      property: meta?.name,
                      content: meta?.content,
                    },
                    {
                      property: meta?.name,
                      content: meta?.content,
                    },
                  ]}
                  nofollow={!isProdMode}
                  noindex={!isProdMode}
                />
              )
            )
        : ''}
    </>
  );
};

export default NextSeoBundle;
