// QnA
export const ADD_QUESTION = 'ADD_QUESTION';

export function addQuestion(title, content){
    return {
        type: ADD_QUESTION,
        title,
        content
    }
}