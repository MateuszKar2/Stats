import { CsvFileReader } from "./inheritance/CsvFileReader";
import { dateStringToDate} from "./utils";
import { MatchResult } from "./MatchResult";

type MatchData = [Date, string, string, number, number, string];//uporządkowana tablica typów które powinny byc zwracane w tej kolejności

export class MatchReader extends CsvFileReader<MatchData> {
    .mapRow(row: string[]): MatchData {
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
}