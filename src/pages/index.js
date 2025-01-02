import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { Redirect } from '@docusaurus/router';
import Top from './top'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import TextFloat from '@site/src/components/TextFloat';
import Block from '@site/src/components/Block';


// import "nes.css/css/nes.min.css";
import styles from './index.module.css';
const ClickMe = () => {
  return <Redirect to="/docs/test" />;
};
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (

    <header className={clsx('hero ', styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        {/* <button onClick={ClickMe} class="button button--outline button--secondary button--lg">

          Click Me

        </button> */}
        <TextFloat text="Welcome to My Site" />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/user">
            查阅➡
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        {/* <Block /> */}

        <TextFloat text="Welcome to My Site" height='500px' />
        <TextFloat text="Welcome to My Site" height='500px' />

      </main>
    </Layout>
  );
}
