// Our question tactics and options have a type field, which must be a member of this union
export type QuestionKeyType =
  | 'question-time'
  | 'question-counter'
  | 'question-multiple-choice'
  | 'question-slider';
