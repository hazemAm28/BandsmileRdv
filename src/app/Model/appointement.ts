export class Appointement {
    
    public id_rdv!:number;
    public id_personne!:any;
    public perIdPersonne!:number;
    public id_acte!:number;
    public id_fauteuil!:number;
    public  rdvDate!:Date;
    public  rdvDuree!:number;
    public rdvStatut!:number;
    public rdvArrivee!:Date;
    public  rdvComm!:string;
    public  rdvQuand!:Date;
    public  lastModif!:Date;
    public  heureFauteuil!:Date;
    public  heureSalleAttente!:Date;
    public  heureSecretariat!:Date;
    public  heureSorti!:Date;
    public  isExported!:string;
    public  fautUtilise!:number;
    public  localisation!:number;
    public  idNextActe!:number;
    public  idCommClinique!:number;
    public  aAvancer!:string;
    public  idMateriel!:number;
    public  statutWeb!:number;
    public  fromWeb!:number;
    public  moyenCommunication!:number;


}
