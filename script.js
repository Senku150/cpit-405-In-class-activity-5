const nbaTeams = {
    won: {
        "Boston Celtics": [1957, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1968, 1969, 1974, 1976, 1981, 1984, 1986, 2008, 2024],
        "Los Angeles Lakers": [1949, 1950, 1952, 1953, 1954, 1972, 1980, 1982, 1985, 1987, 1988, 2000, 2001, 2002, 2009, 2010, 2020],
        "Golden State Warriors": [1947, 1956, 1975, 2015, 2017, 2018, 2022],
        "Chicago Bulls": [1991, 1992, 1993, 1996, 1997, 1998],
        "San Antonio Spurs": [1999, 2003, 2005, 2007, 2014],
        "Philadelphia 76ers": [1955, 1967, 1983],
        "Detroit Pistons": [1989, 1990, 2004],
        "Miami Heat": [2006, 2012, 2013],
        "Milwaukee Bucks": [1971, 2021],
        "Houston Rockets": [1994, 1995],
        "New York Knicks": [1970, 1973],
        "Toronto Raptors": [2019],
        "Cleveland Cavaliers": [2016],
        "Dallas Mavericks": [2011],
        "Portland Trail Blazers": [1977],
        "Washington Wizards": [1978],
        "Seattle SuperSonics": [1979],
        "Atlanta Hawks": [1958],
        "Sacramento Kings": [1951],
        "Denver Nuggets": [2023]
    },
    neverWon: { //or I can just use nbaTeams.neverWon.includes("")
        "Phoenix Suns":0,
        "Utah Jazz":0,
        "Brooklyn Nets":0,
        "Orlando Magic":0,
        "Indiana Pacers":0,
        "Charlotte Hornets":0,
        "Minnesota Timberwolves":0,
        "Memphis Grizzlies":0,
        "New Orleans Pelicans":0,
        "Los Angeles Clippers":0,
        "Oklahoma City Thunder":0
}
};

const choosenTeam = document.getElementById("teamInput");
const wonTable = document.getElementById("wonTableBody")
const neverWonTable = document.getElementById("neverWonTableBody")


let handleEnter = (key) => {
    if (key.key === 'Enter') {
        console.log("hit enter")
        let teamName = choosenTeam.value;
        console.log(teamName);
        addTeamRow(teamName);
    }
}
choosenTeam.addEventListener("keyup", handleEnter);


function addTeamRow(team) {
    if (nbaTeams.won.hasOwnProperty(team)) {
    const raw = wonTable?.insertRow() //the ? sign is for me declearing wonTable is defnitly not null  Note: this is not a very good approach but get the things done
    raw.insertCell(0).innerText =team;
    raw.insertCell(1).innerText =nbaTeams.won[team].join(", ");
    }
    else if (nbaTeams.neverWon.hasOwnProperty(team)){
        const raw = neverWonTable?.insertRow() //the ? sign is for me declearing wonTable is defnitly not null  Note: this is not a very good approach but get the things done
        raw.insertCell(0).innerText =team;
    }
    else{
        alert("no team with that name exist !!")
    }
}