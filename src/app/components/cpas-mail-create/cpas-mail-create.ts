import { Component, inject, model, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatCard, MatCardContent, MatCardModule } from '@angular/material/card';
import {
  ActirisLetterForm,
  CpasLetterForm,
} from '../../models/cpas-letter-form';
import { MatDialog } from '@angular/material/dialog';
import { ShowMailDialog } from '../show-mail-dialog/show-mail-dialog';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, take, tap } from 'rxjs';
import { Cpas } from '../../services/cpas';
import { CpasCenter } from '../../models/cpas-center';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDivider } from '@angular/material/divider';
import { ChoosenCity, CITIES_BE } from '../../services/choosen-city';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-cpas-mail-create',
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
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCard,
    MatCardModule,
    MatDivider,
  ],
  templateUrl: './cpas-mail-create.html',
  styleUrl: './cpas-mail-create.scss',
})
export class CpasMailCreate implements OnInit {
  cityService = inject(ChoosenCity);
  personalForm!: FormGroup;
  statusForm!: FormGroup;
  requestForm!: FormGroup;
  locationForm!: FormGroup;
  private cpasService = inject(Cpas);
  loadContent:boolean=false;
  private CITIES_BE=CITIES_BE;
  mailHref: string = '';
  subject: string = 'Demande d’aide';
  isCepas: boolean = true;
  currentText = '';
  readonly mail = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);
  currentCpas: CpasCenter | undefined;
  statuses = [
    'temporary_protection',
    'asylum_seeker',
    'refugee',
    'card_a',
    'card_b',
    'without_status',
    'other',
  ];
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
  requestTypes = [
    'housing',
    'financialAid',
    'foodAid',
    'healthSupport',
    'translationSupport',
    'psychologicalSupport',
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
        housing: 'logement',
        financialAid: 'aide financière',
        foodAid: 'aide alimentaire',
        healthSupport: 'soins médicaux',
        translationSupport: 'aide à la traduction',
        psychologicalSupport: 'soutien psychologique',
        other: 'autre',
      },
      REQUESTS_ACTIRIS: {
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
    nl: {
      NATIONALITIES: {
        ukrainian: 'Oekraïens',
        russian: 'Russisch',
        belarusian: 'Wit-Russisch',
        afghan: 'Afghaans',
        syrian: 'Syrisch',
        turkish: 'Turks',
        moroccan: 'Marokkaans',
        congolese: 'Congolees',
        other: 'ander',
      },
      STATUSES: {
        temporary_protection: 'onder tijdelijke bescherming',
        asylum_seeker: 'asielzoeker',
        refugee: 'vluchteling',
        card_a: 'houder van kaart A',
        card_b: 'houder van kaart B',
        without_status: 'zonder officiële status',
        other: 'ander',
      },
      REQUESTS: {
        housing: 'huisvesting',
        financialAid: 'financiële steun',
        foodAid: 'voedselhulp',
        healthSupport: 'medische zorg',
        translationSupport: 'tolkhulp',
        psychologicalSupport: 'psychologische ondersteuning',
        other: 'ander',
      },
      REQUESTS_ACTIRIS: {
        registerJobseeker: 'Inschrijven als werkzoekende',
        updateProfile: 'Profiel/gegevens bijwerken',
        findVacancies: 'Vacatures vinden',
        employerReferrals: 'Doorverwijzingen naar werkgevers',
        cvReview: 'CV-nakijk en verbetering',
        coverLetter: 'Hulp bij motivatiebrief',
        interviewCoaching: 'Sollicitatiecoaching',
        languageCourses: 'Taalcursussen (FR/NL/EN)',
        languageAssessment: 'Taalniveau-inschatting',
        trainingCourses: 'Opleidingen (IT/digitaal/professioneel)',
        trainingAllowances: 'Opleidingsvergoedingen/subsidies',
        diplomaRecognition: 'Diploma-erkenning (NARIC, enz.)',
        internships: 'Stages/werkervaring',
        onTheJobTraining: 'Opleiding op de werkvloer',
        careerGuidance: 'Loopbaanbegeleiding',
        skillsValidation: 'Competentieverificatie',
        inclusiveSupport: 'Inclusie (handicap, jongeren, langdurig werklozen)',
        other: 'Ander (te specificeren)',
      },
    },
  };

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private rout: ActivatedRoute
  ) {}

  ngOnInit(): void {
    forkJoin([
      this.cpasService.getCenters(this.cityService.value),
      this.rout.queryParamMap.pipe(take(1)),
    ])
      .pipe(tap(()=>this.loadContent=true))
      .subscribe(([res, res2]) => {
        this.currentCpas = res.find((x) => x.id == res2.get('cpas-name'));
        this.isCepas = res2.get('isActiris') ? false : true;
      });
    this.personalForm = this.fb.group({
      name: ['', Validators.required],
      surName: ['', Validators.required],
      nationality: ['', Validators.required],
      family: [false],
    });

    this.statusForm = this.fb.group({
      status: ['', Validators.required],
    });

    this.requestForm = this.fb.group({
      requestType: ['', Validators.required],
      needsTranslator: [false],
    });

    this.locationForm = this.fb.group({
      commune: ['', Validators.required],
    });
  }

  generateLetter() {
    const rawData = {
      ...this.personalForm.value,
      ...this.statusForm.value,
      ...this.requestForm.value,
      ...this.locationForm.value,
    };

    const data: any = {
      name: rawData.name,
      surname: rawData.surName,
      nationality: rawData.nationality,
      commune: rawData.commune,
      language: rawData.language,
      family: rawData.family,
      status: rawData.status,
      requestType: rawData.requestType,
      needsTranslator: rawData.needsTranslator,
    };

    const currentLang = this.translate.currentLang || 'fr';
    const translations = this.translations['fr'];

    const letterText = this.genererLettre(data, translations);

    const normalized = letterText.replace(/\r?\n/g, '\r\n');
    const subject = 'Demande d’aide';
    const subj = encodeURIComponent(subject);
    const bod = encodeURIComponent(normalized);

    this.mailHref = `mailto:${this.currentCpas?.email}?subject=${subj}&body=${bod}`;
    this.currentText = letterText;
    this.mail.set(letterText);
    this.openDialog();
  }

  genererLettre(data: ActirisLetterForm, t: any): string {
    const currentCityLang=this.CITIES_BE.find(x=>x.id===this.currentCpas?.city.toLocaleLowerCase())
    const lignes: string[] = [];
    if (currentCityLang?.languages[0]=='nl') {
      lignes.push('');
      lignes.push(`Aan wie het aangaat,`);
      lignes.push('');

      lignes.push(
        `Mijn naam is ${data.name} ${data.surname}, ik ben van ${
          t.NATIONALITIES[data.nationality]
        } afkomst.`
      );
      lignes.push(`Ik woon momenteel in de gemeente ${data.commune}.`);

      lignes.push(
        `Ik heb de status van ${
          t.STATUSES[data.status]
        } en ik vraag hulp met betrekking tot: ${t.REQUESTS[data.requestType]}.`
      );

      if (data.family) {
        lignes.push(
          `Deze aanvraag geldt ook voor mijn familie en ik zou graag een afspraak voor ons allen willen maken.`
        );
      }

      if (data.needsTranslator) {
        lignes.push(
          `Daarnaast wens ik gebruik te maken van een tolk om de communicatie te vergemakkelijken.`
        );
      }

      lignes.push('');
      lignes.push(`Dank u voor uw aandacht en steun.`);
      lignes.push('');
      lignes.push(`Met vriendelijke groet,`);
      lignes.push(`${data.name} ${data.surname}`);
    } else {
      lignes.push('');
      lignes.push(`À qui de droit,`);
      lignes.push('');

      lignes.push(
        `Je m'appelle ${data.name} ${data.surname}, je suis ressortissant(e) ${
          t.NATIONALITIES[data.nationality]
        }.`
      );
      lignes.push(`J'habite actuellement dans la commune de ${data.commune}.`);

      lignes.push(
        `J'ai le statut de ${
          t.STATUSES[data.status]
        } et je sollicite de l’aide concernant : ${
          t.REQUESTS[data.requestType]
        }.`
      );

      if (data.family) {
        lignes.push(
          `Cette demande concerne également ma famille et je souhaite obtenir un rendez-vous pour nous tous.`
        );
      }

      if (data.needsTranslator) {
        lignes.push(
          `De plus, je souhaite bénéficier de l’aide d’un traducteur pour faciliter la communication.`
        );
      }

      lignes.push('');
      lignes.push(`Merci pour votre attention et votre soutien.`);
      lignes.push('');
      lignes.push(`Cordialement,`);
      lignes.push(`${data.name} ${data.surname}`);
    }

    return lignes.join('\n');
  }
  genererLettreActiris(data: CpasLetterForm, t: any): string {
    const lignes: string[] = [];

    lignes.push('');
    lignes.push(`À qui de droit,`);
    lignes.push('');

    lignes.push(
      `Je m'appelle ${data.name} ${data.surname}, je suis ressortissant(e) ${
        t.NATIONALITIES[data.nationality]
      }.`
    );
    lignes.push(`J'habite actuellement dans la commune de ${data.commune}.`);

    if (data.status) {
      lignes.push(`J'ai le statut de ${t.STATUSES[data.status]}.`);
    }

    lignes.push(
      `Je souhaite m'adresser à Actiris concernant : ${
        t.REQUESTS_ACTIRIS[data.requestType]
      }.`
    );

    if (data.family) {
      lignes.push(
        `Cette demande concerne également ma famille et je souhaite obtenir un rendez-vous pour nous tous.`
      );
    }

    if (data.needsTranslator) {
      lignes.push(
        `De plus, je souhaite bénéficier de l’aide d’un traducteur pour faciliter la communication.`
      );
    }

    lignes.push('');
    lignes.push(`Merci pour votre attention et votre soutien.`);
    lignes.push('');
    lignes.push(`Cordialement,`);
    lignes.push(`${data.name} ${data.surname}`);

    return lignes.join('\n');
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ShowMailDialog, {
      data: {
        mail:this.mail(),
        email:this.currentCpas?.email
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.mail.set(result);
      }
    });
  }

  mailtoHref(email: string, subject: string, body: string) {
    // URLSearchParams сам корректно кодирует символы, переносы строк и т.д.
    const params = new URLSearchParams({ subject, body });
    return `mailto:${email}?${params.toString()}`;
  }
}
