const postReq = async (x) => {
    const jsn = x;
    let req = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(jsn),
    };
    let p = await fetch("http://localhost:2000/question/addmultiplequestions", req);
    let response = await p.json();
    return response;
}

const print = async () => {
    let request = await postReq([{
        "questionTitle": "who is the hottest wifu ?",
        "option1": "Robin",
        "option2": "Nami",
        "option3": "Bonney",
        "option4": "Nezuko",
        "correctAnswer": "Robin",
        "difficultyLevel": "Hard",
        "category": "wifu"
    }]);
    console.log(request);
}

print();