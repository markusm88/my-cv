import {Injectable} from "angular2/core";
import {CV} from "./cv-data";

@Injectable()
// Injectable tell other compontens can inject this service
export class CvService {
    getCVInfo() {
        return Promise.resolve(CV);
    }
}