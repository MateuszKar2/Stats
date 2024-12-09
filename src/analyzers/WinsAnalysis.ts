import { MatchData } from "../MatchData";
import { Analyzer } from "../Summary";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
    constructor(public teamName: string) {

    }
    run(matches: MatchData[]): string {
        let wins = 0;

        for (let match of matches) {
            // Sprawdzamy, czy drużyna wygrała jako gospodarz
            if (match[1] === this.teamName && match[5] === 'H' && match[3] > match[4]) {
                wins++;
            }
            // Sprawdzamy, czy drużyna wygrała jako gość
            else if (match[2] === this.teamName && match[5] === 'A' && match[3] < match[4]) {
                wins++;
            }
        }
        //   return `Team ${this.team} won ${wins} games`
    }
}