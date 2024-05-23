import { selectCourse, unSelectCourse } from "../src/actions/courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "../src/actions/courseActionTypes";

describe("selectCourse", () => {
    it("should return the correct action object", () => {
        const index = 1;
        const expectedAction = {
            type: SELECT_COURSE,
            index: 1
        };
        const action = selectCourse(index);
        expect(action).toEqual(expectedAction);
    });
});

describe("unSelectCourse", () => {
    it("should return the correct action object", () => {
        const index = 1;
        const expectedAction = {
            type: UNSELECT_COURSE,
            index: 1
        };
        const action = unSelectCourse(index);
        expect(action).toEqual(expectedAction);
    });
});