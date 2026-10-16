import React, {useState} from 'react';

const ExperienceTerminal = () => {

    const [command, setCommand] = useState('');
    const [history, setHistory] = useState([]);

    
    const runCommand = (event) => {
    if (event.key !== 'Enter') return;

    const input = command.trim().toLowerCase();
    if (!input) return;

    if (input === 'clear') {
        setHistory([]);
        setCommand('');
        return;
    }

    let response = [];

    if (input === 'help') {
        response = [
        'Available commands:',
        '  help       - Show available commands',
        '  clear      - Clear the terminal',
        '  education  - View education',
        '  experience - View experience',
        '  skills     - View technical skills',
        '  awards     - View awards',
        '  leadership - View leadership positions',
        ];
    } else if (input === 'education') {
        response = [
        {
            date: '2024-2028',
            title: 'Bachelor of Science in Math and Computer Science at McGill University', 
            description: 'GPA - 3.7',},
        {
            date: '2020-2024',
            title: 'High School for Math Science and Engineering at City College of New York', 
            description: 'GPA - 100.19',},
        ];
    } else if (input === 'experience') {
        response = [
        {
        date: '2021-2024',
        title: 'Docent, National Museum of Mathematics',
        description: 
        'Explained exhibits and mathematical concepts to visitors of all ages in English and French. Operated and repaired exhibits, and onboarded new volunteers.',},
        {
        date: 'Present',
        title: 'Girls Who Code Facilitator',
        description: 'Taught Python at Sacred Hearts, an all-girls Catholic high school in Montreal. Helped give feedback on the curriculum and tailored my own projects and teaching to the class.',},
        {
        date: 'Present',
        title: 'McGill Rocket Team Avionics Ground Station Controls',
        description: 'Creation of new, data-driven UI elements using React.js. Implementing new data/signal processing algorithms. Creating new REST APIs to communicate between different parts of GS GUI. OOP design decisions, adding support for new communication protocols and devices.'},
        {
        date: 'Present',
        title: 'Private tutor',
        description:
        'Worked closely with a high school student with dyslexia and dyscalculia to complete an accelerated self-study college Statistics course in 1.5 months. Additional tutoring subjects include Precalculus, Geometry, and NY specialized high school entrance exam (SHSAT).',},
        ];
    } else if (input === 'skills') {
        response = [
            {
            title: 'Computer Skills:',
            description: 
            'Java, Python, React.js, Tailwind.css, Three.js, OpenGl, Unreal Engine, C++, C, Bash, Ocaml, NumPy, MATLAB, MIPS, Windows OS',},
            {
            title: 'Math Skills',
            description: 'Excel, Linear Algebra, Numerical Analysis, Statistics, Discrete Math, Graph Theory, Real Analysis, Calculus, ODEs',},
            {
            title: 'Language Skills',
            description:
            'Fluent: English, French Intermediate: Spanish, German',},
            ]
    } else if (input === 'awards') {
        response = [
            {
            date: '2026',
            title: 'Sponsored Student CAN-CWIC 2026 Conference at University of Waterloo',},
            {
            date: '2024, 2025',
            title: '10x Gold Medalist, 4x World Champion World Choir Games',
            description: 'Toured and competed in South Korea and New Zealand representing the United States. Sang and performed choreography in many genres including Folk, Contemporary, Gospel, Pop, and Spiritual.'},
            {
            date: '2023',
            title: 'Manhattan College Summer Program in Engineering and Science Invited Fellow',},
            {
            date: '2021',
            title: 'Most Informative Article - AI Fluency Adava University/Artificial Intelligence Institute',
            description:
            'Article : https://medium.com/aifluency/scotia-millar-3bbcbcfc9fdb',},
            ]
    } else if (input === 'leadership') {
        response = [
            {
            date: '2025-2026',
            title: 'McGill Savoy Society - Member at Large',
            description: 'Event coordinator and human resources for the cast, orchestra, and crew of opera production'},
            {
            date: '2022-2026',
            title: 'YPC National Condutor and Chorister Mentor, Audition Facilitator, Costumes',
            description: 'Worked with conductors from around the US at YPC National providing advice and feedback in conducting masterclasses. Mentored elementary school children in choral singing and dance summer camp. Facilitated YPC auditions, helped behind the scenes at concerts, organized tour uniforms, taught dances and led sectional rehearsals.',},
            {
            date: '2022-2024',
            title: 'HSMSE Acapella Co-President',},
            ]
    } else {
        response = [
        `Command not found: ${input}`,
        "Type 'help' to see available commands.",
        ];
    }

    setHistory((previous) => [
        ...previous,
        { command: command.trim(), response },
    ]);

    setCommand('');
    };



  return (

    <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950 font-mono text-sm shadow-2xl">

      <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>

        <span className="ml-3 text-zinc-400">
          scotia@portfolio: ~
        </span>
      </div>

      <div className="min-h-64 p-5 text-green-500">
        <p>Welcome to Scotia's portfolio terminal.</p>
        <p className="mt-2">
          Type <span className="text-white">help</span> to see available commands.
        </p>
        
        
        <div className="mt-4 whitespace-pre-wrap">
        {history.map((entry, index) => (
            <div key={index} className="mb-3">
            <p className="text-cyan-400">
                scotia@portfolio:~$ {entry.command}
            </p>

            
            {entry.response.map((line, lineIndex) => (
            typeof line === 'string' ? (
                <p key={lineIndex} className="text-green-500">
                {line}
                </p>
            ) : (
                <div
                key={lineIndex}
                className="mt-4 grid grid-cols-[90px_minmax(0,1fr)] gap-x-4"
                >
                <span className="text-zinc-400">
                    {line.date}
                </span>

                <div>
                    <p className="font-bold text-green-400">
                    {line.title}
                    </p>

                    <p className="mt-1 text-green-500">
                    {line.description}
                    </p>
                </div>
                </div>
            )
            ))}

            </div>
        ))}
        </div>


        <div className="mt-4 flex items-center gap-2">
        <span className="shrink-0 text-cyan-400">
            scotia@portfolio:~$
        </span>

        <input
        type="text"
        value={command}
        onChange={(event) => setCommand(event.target.value)}
        onKeyDown={runCommand}
        placeholder="type a command..."
        className="w-full bg-transparent text-green-400 outline-none placeholder:text-zinc-600"
        />

        </div>

      </div>

    </div>
  );
};

export default ExperienceTerminal;
