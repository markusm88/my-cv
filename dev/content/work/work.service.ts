import {Injectable} from "angular2/core";
import {WORK} from "./work-data";

@Injectable()
export class WorkService {
    getWork() {
        return Promise.resolve(WORK);
    }
}