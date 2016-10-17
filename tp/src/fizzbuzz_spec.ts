import 'mocha';
import { expect } from 'chai';

import { FizzBuzz } from './fizzbuzz';

describe('Fizzbuzz', () => {
    var résultat;

    beforeEach(() => {
        var fizzbuzz = new FizzBuzz();
        
        this.résultat = fizzbuzz.calculer();
    })

    it('doit initialiser un tableau', () => {

        expect(this.résultat.length).to.equal(101);
    });

    it('doit remplacer les multiples de 3 par fizz', () => {

        expect(this.résultat[3]).to.equal('Fizz');
        expect(this.résultat[6]).to.equal('Fizz');
    });

    it('doit remplacer les multiples de 5 par buzz', () => {

        expect(this.résultat[5]).to.equal('Buzz');
    });

    it('doit remplacer les multiples de 3 et 5 par fizzbuzz', () => {

        expect(this.résultat[15]).to.equal('FizzBuzz');
        expect(this.résultat[45]).to.equal('FizzBuzz');
    });
});
