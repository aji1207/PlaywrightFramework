import fs from 'fs';

export class JsonUtil {

    static readJson(path: string) {
        return JSON.parse(
            fs.readFileSync(path, 'utf-8')
        );
    }

}