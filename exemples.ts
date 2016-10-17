
interface Personne {
	nom: string;
	prenom: string;
	readonly dateDeNaissance: string;
	numeroTelephone?: string;

	estMajeur(dateNaissance: string, ...autres: string[]): boolean;
}

class Employe implements Personne {

    public numeroTelephone;

    constructor(public nom, public prenom, readonly dateDeNaissance) {}

    public estMajeur(dateNaissance: string, ...autres: string[]) {
        return true ;
    }
}


abstract class Department {
    constructor(public name: string) {
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }
    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

interface Dépôt<T> {
    créer(donnée: T): void;
    rechercherParId(id: string): T;
}

class DépôtDEmploye implements Dépôt<Employe> {
    créer(donnée: Employe) {}
    rechercherParId(id: string): Employe {
        return new Employe('', '', '');
    }
}


