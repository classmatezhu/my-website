import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <main className={styles.main}>
        <div className={`${styles.container} ${styles.titles}`}>
          <div>
            <div className={styles.h3}>安徽大学</div>
            <div className={styles.h1}>飞跃手册</div>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              查看飞跃手册
            </Link>
          </div>
        </div>
        <div className={styles.ahulogo}></div>
      </main>
    </Layout>
  );
}
