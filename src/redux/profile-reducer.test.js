import profileReducer, {addPostCreator} from "./profile-reducer";
import React from "react";
import expect from "expect";
const initialState = {
    posts: [
        {
            id:0,
            name: "Richard",
            message: "Тимоха, ты вообще охуел!",
            date: new Date().toLocaleString(),
            comments: 2,
            likes: 50,
            shares: 39
        },
    ],
};

it('new post should be added', function () {
    // Test Data
    const action = addPostCreator("Erlich", 'Hey guys');

    // Action
    const newState = profileReducer(initialState, action);

    // Expectation
    expect(newState.posts.length).toBe(2);
});

