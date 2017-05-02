const initialState = {
    questionsList: [
        {
            questionTitle: "Your Religion?",
            inputsName: "religionSelect",
            answers: ["Christianity", "Muslim", "Buddism", "Deism"]
        }
    ]
};

export default function questions(state = initialState) {
    return state;
}