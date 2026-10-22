import type {
  ConnectionDescriptionPart,
  ConnectionStep,
} from "@/types/connection";
import styles from "./ConnectionStepCard.module.scss";

type ConnectionStepCardProps = {
  step: ConnectionStep;
  index: number;
};

function descriptionPartKey(part: ConnectionDescriptionPart): string {
  return part.kind === "link"
    ? `link:${part.href}:${part.text}`
    : `text:${part.value}`;
}

function StepDescription({
  parts,
}: {
  parts: readonly ConnectionDescriptionPart[];
}) {
  return (
    <p className={styles.description}>
      {parts.map((part) =>
        part.kind === "link" ? (
          <a
            key={descriptionPartKey(part)}
            href={part.href}
            className={styles.inlineLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {part.text}
          </a>
        ) : (
          <span key={descriptionPartKey(part)}>{part.value}</span>
        ),
      )}
    </p>
  );
}

export function ConnectionStepCard({ step, index }: ConnectionStepCardProps) {
  return (
    <article className={styles.card}>
      <span className={styles.stepNumber} aria-hidden="true">
        {index}
      </span>
      <h3 className={styles.title}>{step.title}</h3>
      <StepDescription parts={step.description} />
    </article>
  );
}
