import { Règle } from './regle';
import { Multiple } from './multiple';

export class RègleFizz implements Règle {

    public estVérifié(valeurAVérifier: number): boolean {

        return Multiple.estUnMutlipleDe(valeurAVérifier, 3);
    }

    public valeurSiVérifié(): string {

        return "Fizz";
    }

}
