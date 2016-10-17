import { Règle } from './regle';
import { RègleFizzBuzz } from './regleFizzBuzz';
import { RègleFizz } from './regleFizz';
import { RègleBuzz } from './regleBuzz';

export class FizzBuzz {

    private règlesDuJeu:Array<Règle> = [new RègleFizzBuzz(), new RègleFizz(), new RègleBuzz()];

    
    public calculer(): Array<string> {

        let résultat: Array<string> = [];

        for (let index = 0; index < 101; index++) {
            résultat.push(this.soumettreLIndexAuxRègles(index));
        }

        return résultat;
    }

    private soumettreLIndexAuxRègles( index: number): string {

         for (let règle of this.règlesDuJeu) {
            if (règle.estVérifié(index)) {
                return règle.valeurSiVérifié();
            }
        }
        return  String(index);
    }


}
