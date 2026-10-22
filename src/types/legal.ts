export type LegalClause = {
  id: string;
  text: string;
  listItems?: string[];
};

export type LegalSection = {
  title: string;
  clauses: LegalClause[];
};

export type LegalDocumentContent = {
  title: string;
  effectiveDate: string;
  sections: LegalSection[];
  closingNote?: string;
};
