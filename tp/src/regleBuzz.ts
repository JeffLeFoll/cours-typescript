import { Règle } from './regle';
import { Multiple } from './multiple';

export class RègleBuzz implements Règle {

    public estVérifié(valeurAVérifier: number): boolean {

        return Multiple.estUnMutlipleDe(valeurAVérifier, 5);
    }

    public valeurSiVérifié(): string {

        return "Buzz";
    }

}
