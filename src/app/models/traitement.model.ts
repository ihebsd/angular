import { UserInfo } from './user-info.model';
import { TraitementStep } from './traitement-step.model';

export class Traitement {
    commentaires: string;
    dateCreation: string;
    dateNaissancePatient: string;
    etape: TraitementStep;
    flgBeance: string;
    flgClasse: string;
    flgEspace: string;
    flgExtraction: string;
    flgOccIa: string;
    flgOccIp: string;
    flgSupracc: string;
    flgSurplomb: string;
    idTraitement: number;
    listTraitementDocument: any;
    listTraitementTypeDent: any;
    login: string;
    nomPatient: string;
    prenomPatient: string;
    sexePatient: string;
    typeTraitement: string;
    userCre?: UserInfo;
}
