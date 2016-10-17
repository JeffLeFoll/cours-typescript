import { Règle } from './regle';
import { Multiple } from './multiple';

export class RègleFizzBuzz implements Règle {

    public estVérifié(valeurAVérifier: number): boolean {

        return Multiple.estUnMutlipleDe(valeurAVérifier, 15);
    }

    public valeurSiVérifié(): string {

        return "FizzBuzz";
    }

}
