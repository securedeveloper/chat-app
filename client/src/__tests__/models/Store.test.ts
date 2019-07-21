import store from "../../models";
import {createStore} from "redux";

import reducer from "../../models/reducers/";

const localStore = createStore(reducer, {});

describe(">> Store", () => {
    it("should be a valid store", () => {
        expect((typeof store())).toBe(typeof localStore);
    });
});
