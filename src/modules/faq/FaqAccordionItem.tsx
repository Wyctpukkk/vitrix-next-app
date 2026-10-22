import styles from "./FaqAccordionItem.module.scss";

type FaqAccordionItemProps = {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

export function FaqAccordionItem({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}: FaqAccordionItemProps) {
  const answerId = `${id}-answer`;

  return (
    <div className={styles.item}>
      <button
        type="button"
        id={id}
        className={styles.question}
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
      >
        <span>{question}</span>
        <span
          className={isOpen ? `${styles.icon} ${styles.iconOpen}` : styles.icon}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        id={answerId}
        className={isOpen ? `${styles.answer} ${styles.answerOpen}` : styles.answer}
        role="region"
        aria-labelledby={id}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}
