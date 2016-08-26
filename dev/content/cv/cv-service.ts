import {Injectable} from "angular2/core";
import {CV} from "./cv-data";


@Injectable()

export class CvService {
    getCVInfo() {
        return Promise.resolve(CV);
    }
}