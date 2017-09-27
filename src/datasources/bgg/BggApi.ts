// Local
import { IBggThing } from './IBggApi';

const ROOT_PATH = 'https://www.boardgamegeek.com/xmlapi2/';

export default class BggApi {
    private static instance: BggApi;
    private static parser: DOMParser;

    private constructor() {
    }

    public static getInstance(): BggApi {
        if (!BggApi.instance) {
            BggApi.instance = new BggApi();
        }
        if (!BggApi.parser) {
            BggApi.parser = new DOMParser();
        }

        return BggApi.instance;
    }

    public static hot(callBack: (response: IBggThing[]) => any) {
        function onReadyFunction() {
            if (this.readyState === XMLHttpRequest.DONE) {
                const xmlList = BggApi._parseResponse(this);
                callBack([].slice.call(xmlList.children[0].children).map(BggApi._mapItemXml));
            }
        }

        BggApi._request('hot', onReadyFunction);
    }

    private static _parseResponse(request: XMLHttpRequest): Document {
        const xmlDom = BggApi.parser.parseFromString(request.responseText, 'application/xml');
        return xmlDom;
    }

    private static _mapItemXml(itemXml: any): IBggThing {
        const ret = {
            id: itemXml.getAttribute('id'),
            rank: Number(itemXml.getAttribute('rank')),
            thumbnail: itemXml.getElementsByTagName('thumbnail')[0].getAttribute('value'),
            name: itemXml.getElementsByTagName('name')[0].getAttribute('value'),
            yearPublished: Number(itemXml.getElementsByTagName('yearpublished')[0].getAttribute('value')),
        };
        return ret;
    }

    private static _request(endPoint: string, onReadyFunction: (this: XMLHttpRequest, ev: Event) => any) {
        // Ensure instance exists
        BggApi.getInstance();

        console.log(endPoint);

        const request = new XMLHttpRequest();

        request.onreadystatechange = onReadyFunction;

        request.open('get', ROOT_PATH + endPoint);
        request.send();
    }
}
