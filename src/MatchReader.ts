import { dateStringToDate } from './utils';


type MatchData = [Date, string, string, number, number, string];//uporządkowana tablica typów które powinny byc zwracane w tej kolejności

interface DataReader {
    read(): void;
    data: string[][];
}

export class MatchReader {
    constructor(public reader: DataReader) {}

    load(): void {
        this.reader.read();
        this.reader.data.map(
            (row: string[]): MatchData => {
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,//asorcja typów
            row[6]
        ];
      }
      )
    }
}