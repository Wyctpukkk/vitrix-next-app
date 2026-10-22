import Link from "next/link";
import { TELEGRAM_SUPPORT_BOT_URL } from "@/constants/site";
import type { LegalClause, LegalDocumentContent } from "@/types/legal";
import styles from "./LegalDocument.module.scss";

const SUPPORT_HANDLE = "@vitrix_vpn_support";

function ClauseText({ text }: { text: string }) {
  if (!text.includes(SUPPORT_HANDLE)) {
    return <>{text}</>;
  }

  const [before, after] = text.split(SUPPORT_HANDLE);

  return (
    <>
      {before}
      <a
        href={TELEGRAM_SUPPORT_BOT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.supportLink}
      >
        {SUPPORT_HANDLE}
      </a>
      {after}
    </>
  );
}

function LegalClauseBlock({ clause }: { clause: LegalClause }) {
  return (
    <div className={styles.clause}>
      <p>
        <span className={styles.clauseId}>{clause.id}.</span>{" "}
        <ClauseText text={clause.text} />
      </p>
      {clause.listItems && (
        <ul className={styles.list}>
          {clause.listItems.map((item) => (
            <li key={item}>
              <ClauseText text={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

type LegalDocumentProps = {
  document: LegalDocumentContent;
};

export function LegalDocument({ document }: LegalDocumentProps) {
  return (
    <main className="page-content">
      <div className="container">
        <article className={styles.article}>
          <Link href="/" className={styles.backLink}>
            ← На главную
          </Link>
          <header className={styles.header}>
            <h1 className={styles.title}>{document.title}</h1>
            <time className={styles.date} dateTime={document.effectiveDate}>
              {document.effectiveDate}
            </time>
          </header>
          <div className={styles.body}>
            {document.sections.map((section) => (
              <section key={section.title} className={styles.section}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                {section.clauses.map((clause) => (
                  <LegalClauseBlock key={clause.id} clause={clause} />
                ))}
              </section>
            ))}
            {document.closingNote && (
              <p className={styles.closingNote}>
                <ClauseText text={document.closingNote} />
              </p>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}
