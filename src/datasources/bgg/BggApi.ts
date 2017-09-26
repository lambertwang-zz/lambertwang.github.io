
const rootPath = 'https://www.boardgamegeek.com/xmlapi2/';

export default class BggApi {
    private static instance: BggApi;

    private constructor() {
    }

    public static getInstance(): BggApi {
        if (!BggApi.instance) {
            BggApi.instance = new BggApi();
        }

        return BggApi.instance;
    }
}
