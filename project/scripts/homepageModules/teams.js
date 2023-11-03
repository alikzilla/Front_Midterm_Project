export const teams = [
    {
        name: "FC HUNTERS",
        tag: "HUN",
        logoID: 1,
        score: 20,
        position: 4
    },
    {
        name: "INTER FC",
        tag: "INT",
        logoID: 2,
        score: 1,
        position: 8
    },
    {
        name: "FC MAIQUDUQ",
        tag: "MIQ",
        logoID: 3,
        score: 23,
        position: 2
    },
    {
        name: "FC BUYGUYS",
        tag: "BGS",
        logoID: 4,
        score: 22,
        position: 3
    },
    {
        name: "ORDA",
        tag: "ORD",
        logoID: 5,
        score: 18,
        position: 5
    },
    {
        name: "HALAL JIGI",
        tag: "HJG",
        logoID: 6,
        score: 30,
        position: 1
    },
    {
        name: "SNOWKIDS",
        tag: "SNS",
        logoID: 7,
        score: 15,
        position: 6
    },
    {
        name: "SUNKAR",
        tag: "SKR",
        logoID: 8,
        score: 10,
        position: 7
    }
];

export function setMatchTable(matchList, nextMatchList) {
    let timeCount = 0;

    for (let i = 1; i < teams.length; i = i + 2) {
        const li = document.createElement("li");
        li.innerHTML = `
            <h1 class="list_item">${teams[i - 1].tag}</h1>
            <img class="list_item" style="width:35px" src="styles/Assets/homepage/team_logo.png" alt="team-logo">
            <h1 class="list_item">${20 + timeCount}:00</h1>
            <img class="list_item" style="width:35px" src="styles/Assets/homepage/team_logo.png" alt="team-logo">
            <h1 class="list_item">${teams[i].tag}</h1>
        `;
        timeCount++;
        matchList.appendChild(li);
    }

    timeCount = 0;

    for (let i = 1; i < teams.length / 2; i = i + 2) {
        const li = document.createElement("li");
        li.innerHTML = `
            <h1 class="list_item">${teams[i - 1].tag}</h1>
            <img class="list_item" style="width:35px" src="styles/Assets/homepage/team_logo.png" alt="team-logo">
            <h1 class "list_item">${20 + timeCount}:00</h1>
            <img class="list_item" style="width:35px" src="styles/Assets/homepage/team_logo.png" alt="team-logo">
            <h1 class="list_item">${teams[i].tag}</h1>
        `;
        timeCount++;
        nextMatchList.appendChild(li);
    }
}

export function setScoreboard(scoreTable) {
    const sortedTeams = [...teams];
    sortedTeams.sort((a, b) => a.position - b.position);

    for (let i = 0; i < sortedTeams.length; i++) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="score_1item">${sortedTeams[i].position}</td>
            <td class="score_2item"><img src="styles/Assets/homepage/team_logo.png" alt="" width="30px">${sortedTeams[i].name}</td>
            <td class="score_3item">${sortedTeams[i].score}</td>
        `;
        tr.classList.add("score_row");
        scoreTable.appendChild(tr);
    }
}