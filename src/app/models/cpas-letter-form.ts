export interface CpasLetterForm {
  name: string;
  surname: string;
  nationality: string;
  commune: string;
  language: string;
  family: boolean;
  status:
    | 'temporary_protection'
    | 'asylum_seeker'
    | 'refugee'
    | 'without_status'
    | 'carte_a'
    | 'carte_b'
    | 'other';
  requestType:
    | 'housing'
    | 'financialAid'
    | 'foodAid'
    | 'healthSupport'
    | 'translationSupport'
    | 'psychologicalSupport'
    | 'other';
  needsTranslator: boolean;
}

export interface ActirisLetterForm {
  name: string;
  surname: string;
  nationality: string;
  commune: string;
  language: string;
  family: boolean;
  status:
    | 'temporary_protection'
    | 'asylum_seeker'
    | 'refugee'
    | 'without_status'
    | 'carte_a'
    | 'carte_b'
    | 'other';
  requestType:
    | 'registerJobseeker'
    | 'updateProfile'
    | 'findVacancies'
    | 'employerReferrals'
    | 'cvReview'
    | 'coverLetter'
    | 'interviewCoaching'
    | 'languageCourses'
    | 'languageAssessment'
    | 'trainingCourses'
    | 'trainingAllowances'
    | 'diplomaRecognition'
    | 'internships'
    | 'onTheJobTraining'
    | 'careerGuidance'
    | 'skillsValidation'
    | 'inclusiveSupport'
    | 'other';

  needsTranslator: boolean;
}
