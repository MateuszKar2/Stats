import { MatchResult } from './MatchResult';
import { dateStringToDate } from './utils';
import { MatchData } from './MatchData';

interface DataReader {
    read(): void;
    data: string[][];
}

export class MatchReader {
    matches: MatchData[] = [];

    constructor(public reader: DataReader) {}

    load(): MatchData[] { // Zmieniamy metodę na zwracającą tablicę MatchData
        this.reader.read(); // Wywołanie metody odczytu danych

        // Używamy map do przetwarzania danych
        return this.reader.data.map((row: string[]): MatchData => {
            return [
                dateStringToDate(row[0]),   
                row[1],                      
                row[2],                      
                parseInt(row[3]),            
                parseInt(row[4]),            
                row[5] as MatchResult,      
                row[6]                       
            ];
      });
    }
}