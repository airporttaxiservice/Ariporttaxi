import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';

export default function BlankBaseLayout(props) {
    const { page, site } = props;
    const { enableAnnotations = true } = site;
    const pageMeta = page?.__metadata || {};
    return (
        <div className={classNames('sb-page', pageMeta.pageCssClasses)} {...(enableAnnotations && { 'data-sb-object-id': pageMeta.id })}>
            <Head>
                <title>{page.title}</title>
                <meta name="description" content="Components Library" />
                {site.favicon && <link rel="icon" href={site.favicon} />}
                <meta name="google-site-verification" content="wxrnR6bwYBvPKG0U7CD24jmJ_6JKBuW14x7R6dJTNyk" />
            </Head>
            {props.children}
        </div>
    );
}
