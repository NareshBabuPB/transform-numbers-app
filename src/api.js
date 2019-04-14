
export const convertNumber = (inputValue) => {
    let urlPath = `https://j6x960lxyb.execute-api.us-east-2.amazonaws.com/live/convert/number-to-words?inputNumber=${inputValue}`;
    return fetch(urlPath).then(res => res.json());
}