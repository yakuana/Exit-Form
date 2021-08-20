const options = [
    "Advancement Opportunities / Career Development",
    "Collaboration & Teamwork",
    "Communications",
    "Immediate Manager",
    "Innovation & Change",
    "My Job Responsibilities / The Work I Do",
    "Pay, Benefits, Rewards",
    "Products and Customer Service",
    "Senior Leadership",
    "Company Strategy, Mission, Purpose and Direction",
    "Tools, Technology & Resources",
    "Work Environment and Employee Treatment",
    "Work Processes, Procedures and Decision Making",
    "Work-Life Balance and Flexibility",
    "Retiring / Will No Longer be Working for Gainful Employment",
    "Job Security / Company Future"
];

export const shuffledOptions = options.sort(() => Math.random() - 0.5);

const alphaCodes = Array.from(Array(shuffledOptions.length)).map(
    (e, i) => i + 97
);

const alphabet = alphaCodes.map((x) => String.fromCharCode(x));

export const shuffledObject = {}

for (let i = 0; i < shuffledOptions.length; i++) {
    shuffledObject[alphabet[i]] = shuffledOptions[i]
}

