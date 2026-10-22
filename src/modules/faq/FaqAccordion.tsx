"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/constants/faq";
import { FaqAccordionItem } from "./FaqAccordionItem";
import styles from "./FaqSection.module.scss";

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={styles.accordion}>
      {FAQ_ITEMS.map((item) => (
        <FaqAccordionItem
          key={item.id}
          id={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openId === item.id}
          onToggle={() =>
            setOpenId((current) => (current === item.id ? null : item.id))
          }
        />
      ))}
    </div>
  );
}
