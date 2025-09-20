import { Component } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actiris-mail-creation',
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './actiris-mail-creation.html',
  styleUrl: './actiris-mail-creation.scss',
})
export class ActirisMailCreation {
  actirisRequestTypes = [
    'registerJobseeker',
    'updateProfile',
    'findVacancies',
    'employerReferrals',
    'cvReview',
    'coverLetter',
    'interviewCoaching',
    'languageCourses',
    'languageAssessment',
    'trainingCourses',
    'trainingAllowances',
    'diplomaRecognition',
    'internships',
    'onTheJobTraining',
    'careerGuidance',
    'skillsValidation',
    'inclusiveSupport',
    'other',
  ];
  statuses = [
    'temporary_protection',
    'asylum_seeker',
    'refugee',
    'card_a',
    'card_b',
    'without_status',
    'other',
  ];

  nationalities = [
    'ukrainian',
    'afghan',
    'syrian',
    'turkish',
    'moroccan',
    'congolese',
    'other',
  ];
  languages = ['en', 'fr', 'uk'];

  translations: any = {
    fr: {
      NATIONALITIES: {
        ukrainian: 'ukrainienne',
        russian: 'russe',
        belarusian: 'biélorusse',
        afghan: 'afghane',
        syrian: 'syrienne',
        turkish: 'turque',
        moroccan: 'marocaine',
        congolese: 'congolaise',
        other: 'autre',
      },
      STATUSES: {
        temporary_protection: 'sous protection temporaire',
        asylum_seeker: "demandeur d'asile",
        refugee: 'réfugié',
        card_a: 'titulaire de la carte A',
        card_b: 'titulaire de la carte B',
        without_status: 'sans statut officiel',
        other: 'autre',
      },
      REQUESTS: {
        registerJobseeker: 'S’inscrire comme demandeur d’emploi',
        updateProfile: 'Mettre à jour le profil/les données',
        findVacancies: 'Trouver des offres d’emploi',
        employerReferrals: 'Mises en relation avec des employeurs',
        cvReview: 'Relecture et amélioration du CV',
        coverLetter: 'Aide à la lettre de motivation',
        interviewCoaching: 'Coaching d’entretien',
        languageCourses: 'Cours de langues (FR/NL/EN)',
        languageAssessment: 'Évaluation du niveau de langue',
        trainingCourses: 'Formations (IT/numérique/professionnel)',
        trainingAllowances: 'Allocations/subsides de formation',
        diplomaRecognition: 'Reconnaissance des diplômes (NARIC, etc.)',
        internships: 'Stages/immersions',
        onTheJobTraining: 'Formation en entreprise',
        careerGuidance: 'Orientation professionnelle',
        skillsValidation: 'Validation des compétences',
        inclusiveSupport:
          'Inclusion (handicap, jeunes, chômeurs de longue durée)',
        other: 'Autre (à préciser)',
      },
    },
  };
  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private rout: ActivatedRoute
  ) {}
}
