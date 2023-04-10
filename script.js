const questionText = document.getElementById("question-text");
const optionButtons = document.querySelectorAll(".option-btn");
const fiftyFiftyButton = document.getElementById("fifty-fifty");
const phoneButton = document.getElementById("phone");
const audienceButton = document.getElementById("audience");
const winningsCounter = document.getElementById("winnings-counter");
const winningAmounts = [
    100, 200, 300, 500, 1000, // Easy questions
    2000, 4000, 8000, 16000, 32000, // Moderate questions
    64000, 128000, 256000, 500000, 1000000, // Difficult questions
  ];

function formatWinnings(winnings) {
  if (winnings < 1000000000) {
    return `$${winnings.toLocaleString()}`;
  } else {
    const billion = Math.floor(winnings / 1000000000);
    const remainder = winnings % 1000000000;
    return `${billion} billion, $${remainder.toLocaleString()}`;
  }
}

let winnings = 0;

// Define your question arrays here
const easyQuestions = [
    {
        question: "What is the capital of Australia?",
        options: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
        answer: 0,
        },
        {
        question: "What is the name of the world's largest ocean?",
        options: ["Pacific", "Atlantic", "Indian", "Arctic"],
        answer: 0,
        },
        {
        question: "Who is the lead actor in the movie 'The Lion King'?",
        options: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones", "Nathan Lane"],
        answer: 2,
        },
        {
        question: "What is the name of the world's largest continent?",
        options: ["Asia", "Europe", "North America", "Africa"],
        answer: 0,
        },
        {
        question: "Who is the lead actor in the movie 'Forrest Gump'?",
        options: ["Tom Hanks", "Brad Pitt", "Robert De Niro", "Matt Damon"],
        answer: 0,
        },
        {
        question: "What is the name of the currency used in Japan?",
        options: ["Euro", "Dollar", "Pound", "Yen"],
        answer: 3,
        },
        {
        question: "Who was the first president of the United States?",
        options: ["Thomas Jefferson", "George Washington", "John Adams", "Abraham Lincoln"],
        answer: 1,
        },
        {
        question: "What is the name of the world's largest desert by area?",
        options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
        answer: 3,
        },
        {
        question: "Who is the lead actor in the movie 'Indiana Jones and the Raiders of the Lost Ark'?",
        options: ["Harrison Ford", "Sean Connery", "Paul Freeman", "John Rhys-Davies"],
        answer: 0,
        },
        {
        question: "What is the name of the chemical element with the symbol 'O'?",
        options: ["Oxygen", "Carbon", "Gold", "Silver"],
        answer: 0,
        },
        {
        question: "Who is the lead actress in the movie 'Pretty Woman'?",
        options: ["Julia Roberts", "Sandra Bullock", "Meg Ryan", "Demi Moore"],
        answer: 0,
        },
        {
        question: "What is the name of the world's largest waterfall by volume?",
        options: ["Niagara Falls", "Angel Falls", "Victoria Falls", "Iguazu Falls"],
        answer: 2,
        },
        {
        question: "Who is the lead actor in the movie 'The Terminator'?",
        options: ["Arnold Schwarzenegger", "Michael Biehn", "Linda Hamilton", "Paul Winfield"],
        answer: 0,
        },
        {
        question: "What is the name of the world's highest mountain?",
        options: ["Everest", "K2", "Kilimanjaro", "Denali"],
        answer: 0,
        },
        {
        question: "What is the name of the world's largest waterfall by width?",
        options: ["Niagara Falls", "Angel Falls", "Victoria Falls", "Iguazu Falls"],
        answer: 3,
        },

    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        answer: 1,
        },
        {
        question: "Who is the main character in 'The Catcher in the Rye'?",
        options: ["Holden Caulfield", "Tom Sawyer", "Huckleberry Finn", "Atticus Finch"],
        answer: 0,
        },
        {
        question: "What is the smallest country in the world?",
        options: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
        answer: 0,
        },
        {
        question: "Who is the creator of the TV show 'The Office'?",
        options: ["Ricky Gervais", "Steve Carell", "Larry David", "Seth MacFarlane"],
        answer: 0,
        },
        {
        question: "What is the chemical symbol for oxygen?",
        options: ["O", "C", "N", "H"],
        answer: 0,
        },
        {
        question: "Who wrote the novel 'The Great Gatsby'?",
        options: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "William Faulkner"],
        answer: 0,
        },
        {
        question: "What is the largest city in Canada?",
        options: ["Toronto", "Montreal", "Vancouver", "Calgary"],
        answer: 0,
        },
        {
        question: "What is the capital of South Africa?",
        options: ["Pretoria", "Johannesburg", "Cape Town", "Bloemfontein"],
        answer: 0,
        },
        {
        question: "Who is the lead actor in the movie 'Forrest Gump'?",
        options: ["Tom Hanks", "Brad Pitt", "Leonardo DiCaprio", "Johnny Depp"],
        answer: 0,
        },
        {
        question: "What is the name of the tallest waterfall in the world?",
        options: ["Niagara Falls", "Angel Falls", "Victoria Falls", "Iguazu Falls"],
        answer: 1,
        },
        {
        question: "Who painted the ceiling of the Sistine Chapel?",
        options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
        answer: 0,
        },
        {
        question: "What is the largest country by land area?",
        options: ["Russia", "Canada", "China", "United States"],
        answer: 0,
        },
        {
        question: "Who is the current CEO of Tesla?",
        options: ["Elon Musk", "Mark Zuckerberg", "Jeff Bezos", "Bill Gates"],
        answer: 0,
        },
        {
question: "Who invented the telephone?",
options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Benjamin Franklin"],
answer: 0,
},
{
question: "What is the largest planet in our solar system?",
options: ["Mars", "Jupiter", "Venus", "Saturn"],
answer: 1,
},
{
question: "Who painted the Mona Lisa?",
options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Pablo Picasso"],
answer: 0,
},
{
question: "Which country is home to the Great Pyramid of Giza?",
options: ["Egypt", "Sudan", "Libya", "Algeria"],
answer: 0,
},
{
question: "What is the smallest ocean in the world?",
options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
answer: 3,
},
{
question: "Who wrote the book 'To Kill a Mockingbird'?",
options: ["Harper Lee", "J.K. Rowling", "Stephen King", "John Steinbeck"],
answer: 0,
},
{
question: "In what year did World War II end?",
options: ["1945", "1939", "1941", "1943"],
answer: 0,
},
{
question: "Which continent is the most populated?",
options: ["Asia", "Africa", "Europe", "North America"],
answer: 0,
},
{
question: "Who is the founder of Microsoft?",
options: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Larry Page"],
answer: 0,
},
{
question: "What is the capital of Australia?",
options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
answer: 3,
},
{
question: "Who is the lead singer of the band Rolling Stones?",
options: ["Mick Jagger", "Paul McCartney", "Freddie Mercury", "David Bowie"],
answer: 0,
},
{
question: "What is the largest bone in the human body?",
options: ["Femur", "Humerus", "Tibia", "Radius"],
answer: 0,
},
{
question: "Who is the author of the Harry Potter series?",
options: ["J.K. Rowling", "Stephenie Meyer", "Suzanne Collins", "George R.R. Martin"],
answer: 0,
},
{
question: "Which US state is the Grand Canyon located in?",
options: ["California", "Arizona", "Nevada", "Utah"],
answer: 1,
},
{
question: "What is the largest desert in the world?",
options: ["Sahara", "Arabian", "Gobi", "Mojave"],
answer: 0,
},
{
question: "Who is the first person to step on the moon?",
options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
answer: 0,
},
{
    question: "Who invented the telephone?",
    options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Benjamin Franklin"],
    answer: 0,
    },
    {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    answer: 1,
    },
    {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Pablo Picasso"],
    answer: 0,
    },
    {
    question: "Which country is home to the Great Pyramid of Giza?",
    options: ["Egypt", "Sudan", "Libya", "Algeria"],
    answer: 0,
    },
    {
    question: "What is the smallest ocean in the world?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    answer: 3,
    },
    {
    question: "Who wrote the book 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "Stephen King", "John Steinbeck"],
    answer: 0,
    },
    {
    question: "In what year did World War II end?",
    options: ["1945", "1939", "1941", "1943"],
    answer: 0,
    },
    {
    question: "Which continent is the most populated?",
    options: ["Asia", "Africa", "Europe", "North America"],
    answer: 0,
    },
    {
    question: "Who is the founder of Microsoft?",
    options: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Larry Page"],
    answer: 0,
    },
    {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
    answer: 3,
    },
    {
    question: "Who is the lead singer of the band Rolling Stones?",
    options: ["Mick Jagger", "Paul McCartney", "Freddie Mercury", "David Bowie"],
    answer: 0,
    },
    {
    question: "What is the largest bone in the human body?",
    options: ["Femur", "Humerus", "Tibia", "Radius"],
    answer: 0,
    },
    {
    question: "Who is the author of the Harry Potter series?",
    options: ["J.K. Rowling", "Stephenie Meyer", "Suzanne Collins", "George R.R. Martin"],
    answer: 0,
    },
    {
    question: "Which US state is the Grand Canyon located in?",
    options: ["California", "Arizona", "Nevada", "Utah"],
    answer: 1,
    },
    {
    question: "What is the largest desert in the world?",
    options: ["Sahara", "Arabian", "Gobi", "Mojave"],
    answer: 0,
    },
    {
    question: "Who is the first person to step on the moon?",
    options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
    answer: 0,
    },
    {
    question: "What is the capital of Canada?",
        options: ["Toronto", "Ottawa", "Montreal", "Vancouver"],
        answer: 1,
        },
        {
        question: "What is the smallest planet in our solar system?",
        options: ["Venus", "Mercury", "Mars", "Jupiter"],
        answer: 1,
        },
        {
        question: "What is the name of the world's largest continent?",
        options: ["Asia", "Europe", "North America", "Africa"],
        answer: 0,
        },
        {
        question: "Who is the lead actor in the movie 'Forrest Gump'?",
        options: ["Tom Hanks", "Brad Pitt", "Robert De Niro", "Matt Damon"],
        answer: 0,
        },
        {
        question: "What is the currency of Australia?",
        options: ["Euro", "Dollar", "Pound", "Yen"],
        answer: 1,
        },
        {
        question: "Who was the first person to walk on the moon?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins", "Yuri Gagarin"],
        answer: 0,
        },
        {
        question: "What is the name of the world's largest ocean?",
        options: ["Pacific", "Atlantic", "Indian", "Arctic"],
        answer: 0,
        },
        {
        question: "Who wrote the novel 'Pride and Prejudice'?",
        options: ["Jane Austen", "Charlotte Bronte", "Emily Bronte", "Virginia Woolf"],
        answer: 0,
        },
        {
        question: "What is the name of the world's largest country by area?",
        options: ["China", "India", "Russia", "United States"],
        answer: 2,
        },
        {
        question: "What is the name of the world's largest waterfall by volume?",
        options: ["Niagara Falls", "Angel Falls", "Victoria Falls", "Iguazu Falls"],
        answer: 2,
        },
        {
        question: "Who is the lead actor in the movie 'The Dark Knight'?",
        options: ["Christian Bale", "Heath Ledger", "Tom Hardy", "Gary Oldman"],
        answer: 1,
        },
        {
        question: "What is the name of the world's largest island?",
        options: ["Madagascar", "Greenland", "New Guinea", "Borneo"],
        answer: 1,
        },
        {
        question: "Who painted the famous painting 'The Mona Lisa'?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Salvador Dalí", "Claude Monet"],
        answer: 0,
        },
        {
        question: "What is the name of the currency used in the United Kingdom?",
        options: ["Euro", "Dollar", "Pound", "Yen"],
        answer: 2,
        },
        {
        question: "Who is the lead actor in the movie 'The Titanic'?",
        options: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane", "Kathy Bates"],
        answer: 0,
        },



        {
          question: "What is the name of the economic theory that emphasizes the importance of free markets, private property, and minimal government intervention in the economy?",
          options: ["Classical economics", "Keynesian economics", "Austrian economics", "Chicago school of economics"],
          answer: 3,
          },
          {
          question: "What is the name of the measure of the level of joblessness in an economy?",
          options: ["Gross domestic product", "Consumer price index", "Unemployment rate", "Inflation rate"],
          answer: 2,
          },
          {
          question: "What is the name of the economic system in which the means of production are owned and controlled by private individuals or entities?",
          options: ["Socialism", "Capitalism", "Communism", "Fascism"],
          answer: 1,
          },
          {
          question: "What is the term for a situation in which there is a sustained decline in the general price level of goods and services in an economy?",
          options: ["Recession", "Deflation", "Stagflation", "Hyperinflation"],
          answer: 1,
          },
  
          {
              question: "What is the name of the scientist who first proposed the theory of continental drift?",
              options: ["Charles Darwin", "Alfred Wegener", "James Hutton", "Johannes Kepler"],
              answer: 1,
              },
              {
              question: "What is the name of the phenomenon in which an electron moves through a superconductor with zero electrical resistance?",
              options: ["Superfluidity", "Superposition", "Superconductivity", "Supersymmetry"],
              answer: 2,
              },
              {
              question: "What is the name of the historical era that began with the end of the Paleolithic era and the beginning of agriculture?",
              options: ["Neolithic", "Bronze Age", "Iron Age", "Renaissance"],
              answer: 0,
              },
              {
              question: "What is the name of the economic theory that argues that government deficits are necessary to stimulate economic growth during a recession?",
              options: ["Supply-side economics", "Monetarism", "New Keynesianism", "Modern Monetary Theory"],
              answer: 3,
              },
              {
              question: "What is the name of the Japanese art of paper folding?",
              options: ["Kirigami", "Origami", "Tatting", "Quilling"],
              answer: 1,
              },
              {
              question: "What is the name of the largest moon of Neptune?",
              options: ["Triton", "Nereid", "Proteus", "Larissa"],
              answer: 0,
              },
              {
              question: "What is the name of the famous theorem in mathematics that states that any continuous, closed curve in a plane can be drawn without lifting the pencil from the paper?",
              options: ["Pythagorean theorem", "Fermat's last theorem", "Poincaré conjecture", "Jordan curve theorem"],
              answer: 3,
              },
              {
              question: "What is the name of the scientist who first proposed the law of universal gravitation?",
              options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
              answer: 0,
              },
              {
              question: "What is the name of the technology that enables computers to understand and interpret human language?",
              options: ["Machine learning", "Artificial intelligence", "Natural language processing", "Speech recognition"],
              answer: 2,
              },
              {
              question: "What is the name of the ancient city in present-day Iraq that was the center of the Babylonian Empire?",
              options: ["Persepolis", "Nineveh", "Uruk", "Babylon"],
              answer: 3,
              },
              {
              question: "What is the name of the process by which a solid changes directly to a gas without passing through the liquid state?",
              options: ["Melting", "Freezing", "Sublimation", "Condensation"],
              answer: 2,
              },
              {
              question: "What is the name of the particle in physics that is responsible for the force of gravity?",
              options: ["Photon", "Graviton", "W boson", "Z boson"],
              answer: 1,
              },
              {
              question: "What is the name of the disease that caused the Black Death in Europe in the 14th century?",
              options: ["Smallpox", "Measles", "Plague", "Typhus"],
              answer: 2,
              },
  

              {
                question: "Who is the author of the novel 'The Grapes of Wrath'?",
                options: ["John Steinbeck", "Ernest Hemingway", "F. Scott Fitzgerald", "Virginia Woolf"],
                answer: 0,
                },
                {
                question: "What is the name of the world's largest delta?",
                options: ["Okavango Delta", "Ganges-Brahmaputra Delta", "Mekong Delta", "Niger Delta"],
                answer: 1,
                },
                {
                question: "Who is the lead actor in the movie 'The Shawshank Redemption'?",
                options: ["Tim Robbins", "Morgan Freeman", "Tom Hanks", "Brad Pitt"],
                answer: 0,
                },
                {
                question: "What is the name of the chemical element with the symbol 'Na'?",
                options: ["Sodium", "Chlorine", "Nitrogen", "Carbon"],
                answer: 0,
                },
                {
                question: "Who is the lead actor in the movie 'Pulp Fiction'?",
                options: ["John Travolta", "Samuel L. Jackson", "Uma Thurman", "Harvey Keitel"],
                answer: 0,
                },
                {
                question: "What is the name of the world's largest bay?",
                options: ["Bay of Bengal", "Hudson Bay", "Gulf of Mexico", "Bay of Fundy"],
                answer: 0,
                },
                {
                question: "Who is the author of the novel '1984'?",
                options: ["George Orwell", "Aldous Huxley", "J.D. Salinger", "Ernest Hemingway"],
                answer: 0,
                },
                {
                question: "What is the name of the chemical element with the symbol 'Ca'?",
                options: ["Calcium", "Chlorine", "Carbon", "Copper"],
                answer: 0,
                },
                {
                question: "Who is the lead actor in the movie 'Saving Private Ryan'?",
                options: ["Tom Hanks", "Matt Damon", "Edward Burns", "Tom Sizemore"],
                answer: 0,
                },
                {
                question: "What is the name of the world's largest hot desert?",
                options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
                answer: 0,
                },
                {
                question: "What is the name of the world's tallest tree species?",
                options: ["Redwood", "Oak", "Birch", "Pine"],
                answer: 0,
                },
                {
                question: "Who is the lead actor in the movie 'The Departed'?",
                options: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson", "Mark Wahlberg"],
                answer: 0,
                },
                {
                question: "What is the name of the world's largest bay by area?",
                options: ["Bay of Bengal", "Hudson Bay", "Gulf of Mexico", "Bay of Fundy"],
                answer: 1,
                },
                {
                question: "What is the name of the world's largest waterfall by width?",
                options: ["Niagara Falls", "Angel Falls", "Victoria Falls", "Iguazu Falls"],
                answer: 3,
                },
                {
                    question: "What is the name of the largest moon of Saturn?",
                    options: ["Titan", "Europa", "Ganymede", "Callisto"],
                    answer: 0,
                    },
                    {
                    question: "Which country is the world's largest producer of coffee?",
                    options: ["Brazil", "Colombia", "Vietnam", "Ethiopia"],
                    answer: 0,
                    },
                    {
                    question: "What is the name of the nuclear disaster that occurred in Ukraine in 1986?",
                    options: ["Chernobyl", "Three Mile Island", "Fukushima", "Hiroshima"],
                    answer: 0,
                    },
                    {
                    question: "Who is the current President of France?",
                    options: ["Emmanuel Macron", "François Hollande", "Nicolas Sarkozy", "Jacques Chirac"],
                    answer: 0,
                    },
                    {
                    question: "What is the name of the largest planet in our solar system?",
                    options: ["Jupiter", "Saturn", "Mars", "Venus"],
                    answer: 0,
                    },
                    {
                    question: "Who is the current Prime Minister of Canada?",
                    options: ["Justin Trudeau", "Stephen Harper", "Jean Chrétien", "Brian Mulroney"],
                    answer: 0,
                    },
                    {
                    question: "What is the name of the world's largest oil producing country?",
                    options: ["United States", "Saudi Arabia", "Russia", "Iran"],
                    answer: 1,
                    },
                    {
                    question: "What is the name of the largest continent by area?",
                    options: ["Asia", "Africa", "North America", "Europe"],
                    answer: 0,
                    },
                    {
                    question: "What is the name of the current Chancellor of Germany?",
                    options: ["Angela Merkel", "Gerhard Schröder", "Helmut Kohl", "Willy Brandt"],
                    answer: 0,
                    },
                    {
                    question: "What is the name of the largest organ in the human body?",
                    options: ["Liver", "Brain", "Heart", "Skin"],
                    answer: 3,
                    },
                    {
                    question: "Who is the current Prime Minister of India?",
                    options: ["Narendra Modi", "Rahul Gandhi", "Manmohan Singh", "Indira Gandhi"],
                    answer: 0,
                    },
                    {
                    question: "What is the name of the largest animal on Earth?",
                    options: ["Blue whale", "African elephant", "Giraffe", "Hippopotamus"],
                    answer: 0,
                    },
                    {
                    question: "Who is the current Prime Minister of the United Kingdom?",
                    options: ["Boris Johnson", "Theresa May", "David Cameron", "Tony Blair"],
                    answer: 0,
                    },
                    {
                    question: "What is the name of the largest bird in the world?",
                    options: ["Ostrich", "Condor", "Eagle", "Swan"],
                    answer: 0,
                    },
                    {
                    question: "Who is the current President of the United States?",
                    options: ["Joe Biden", "Donald Trump", "Barack Obama", "George W. Bush"],
                    answer: 0,
                    },
                    {
                    question: "What is the name of the largest ocean by area?",
                    options: ["Pacific", "Atlantic", "Indian", "Southern"],
                    answer: 0,
                    },
                    {
                        question: "What is the capital of Switzerland?",
                        options: ["Geneva", "Zurich", "Bern", "Basel"],
                        answer: 2,
                        },
                        {
                        question: "What is the name of the world's largest coral reef system?",
                        options: ["Great Barrier Reef", "Hawaiian Reef", "Belize Barrier Reef", "Andros Barrier Reef"],
                        answer: 0,
                        },
                        {
                        question: "Who is the founder of SpaceX?",
                        options: ["Elon Musk", "Jeff Bezos", "Mark Zuckerberg", "Steve Jobs"],
                        answer: 0,
                        },
                        {
                        question: "What is the name of the world's largest river by discharge?",
                        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                        answer: 0,
                        },
                        {
                        question: "What is the name of the messaging app developed by Google?",
                        options: ["WhatsApp", "Facebook Messenger", "Snapchat", "Google Hangouts"],
                        answer: 3,
                        },
                        {
                        question: "What is the name of the world's largest lake by volume?",
                        options: ["Superior", "Huron", "Victoria", "Caspian Sea"],
                        answer: 3,
                        },
                        {
                        question: "What is the name of the social networking site that allows users to 'pin' images and videos?",
                        options: ["Facebook", "Twitter", "Instagram", "Pinterest"],
                        answer: 3,
                        },
                        {
                        question: "What is the name of the world's largest island?",
                        options: ["Greenland", "Madagascar", "Borneo", "Sumatra"],
                        answer: 0,
                        },
                        {
                        question: "What is the name of the software company that produces Photoshop, Acrobat, and InDesign?",
                        options: ["Microsoft", "Apple", "Adobe", "Oracle"],
                        answer: 2,
                        },
                        {
                        question: "What is the name of the world's largest country by area?",
                        options: ["Russia", "China", "United States", "Brazil"],
                        answer: 0,
                        },
                        {
                        question: "What is the name of the online payment system owned by eBay?",
                        options: ["PayPal", "Stripe", "Square", "Venmo"],
                        answer: 0,
                        },
                        {
                        question: "What is the name of the world's largest bay?",
                        options: ["Bay of Bengal", "Hudson Bay", "Gulf of Mexico", "Bay of Fundy"],
                        answer: 0,
                        },
                        {
                        question: "What is the name of the company that produces the Android operating system?",
                        options: ["Apple", "Samsung", "Microsoft", "Google"],
                        answer: 3,
                        },
                        {
                        question: "What is the name of the world's largest river by length?",
                        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                        answer: 1,
                        },
                        {
                        question: "What is the name of the company that produces the iPhone?",
                        options: ["Apple", "Samsung", "Microsoft", "Google"],
                        answer: 0,
                        },
                      
                        {
                            question: "What is the largest stock exchange in the world by market capitalization?",
                            options: ["New York Stock Exchange", "Shanghai Stock Exchange", "Nasdaq", "Tokyo Stock Exchange"],
                            answer: 2,
                            },
                            {
                            question: "What is the term for the price at which an investor can sell an asset in a financial market?",
                            options: ["Ask price", "Bid price", "Strike price", "Spot price"],
                            answer: 0,
                            },
                            {
                            question: "What is the name of the investment strategy that seeks to track the performance of a specific stock market index?",
                            options: ["Active management", "Passive management", "Index fund", "Hedge fund"],
                            answer: 2,
                            },
                            {
                            question: "What is the name of the largest hedge fund in the world?",
                            options: ["Bridgewater Associates", "Renaissance Technologies", "AQR Capital Management", "Two Sigma Investments"],
                            answer: 0,
                            },
                            {
                            question: "What is the name of the financial index that measures the performance of the 30 largest companies listed on the Frankfurt Stock Exchange?",
                            options: ["Dow Jones Industrial Average", "S&P 500", "Nikkei 225", "DAX"],
                            answer: 3,
                            },
                            {
                            question: "What is the name of the investment vehicle that pools money from multiple investors to buy a diversified portfolio of stocks, bonds, and other securities?",
                            options: ["Mutual fund", "Exchange-traded fund", "Hedge fund", "Private equity fund"],
                            answer: 0,
                            },
                            {
                            question: "What is the name of the financial index that measures the performance of the 100 largest companies listed on the London Stock Exchange?",
                            options: ["FTSE 100", "CAC 40", "Hang Seng Index", "Sensex"],
                            answer: 0,
                            },
                            {
                            question: "What is the name of the financial index that measures the performance of the 225 largest companies listed on the Tokyo Stock Exchange?",
                            options: ["Nasdaq", "S&P/ASX 200", "Nikkei 225", "Hang Seng Index"],
                            answer: 2,
                            },
                            {
                            question: "What is the name of the financial index that measures the performance of the 500 largest publicly traded companies in the United States?",
                            options: ["Dow Jones Industrial Average", "S&P 500", "Nasdaq Composite", "Russell 2000"],
                            answer: 1,
                            },
                            {
                            question: "What is the name of the largest investment bank in the world by revenue?",
                            options: ["Goldman Sachs", "JPMorgan Chase", "Morgan Stanley", "Citigroup"],
                            answer: 1,
                            },
                            {
                            question: "What is the name of the financial index that measures the performance of the 40 largest companies listed on the Paris Stock Exchange?",
                            options: ["DAX", "IBEX 35", "CAC 40", "FTSE MIB"],
                            answer: 2,
                            },
                            {
                            question: "What is the term for a financial instrument that represents ownership in a corporation?",
                            options: ["Bond", "Stock", "Derivative", "Commodity"],
                            answer: 1,
                            },

     
      {
          question: "Who is the author of the novel 'The Grapes of Wrath'?",
          options: ["John Steinbeck", "Ernest Hemingway", "F. Scott Fitzgerald", "Virginia Woolf"],
          answer: 0,
          },
          {
          question: "What is the name of the world's largest delta?",
          options: ["Okavango Delta", "Ganges-Brahmaputra Delta", "Mekong Delta", "Niger Delta"],
          answer: 1,
          },
          {
          question: "Who is the lead actor in the movie 'The Shawshank Redemption'?",
          options: ["Tim Robbins", "Morgan Freeman", "Tom Hanks", "Brad Pitt"],
          answer: 0,
          },
          {
          question: "What is the name of the chemical element with the symbol 'Na'?",
          options: ["Sodium", "Chlorine", "Nitrogen", "Carbon"],
          answer: 0,
          },
          {
          question: "Who is the lead actor in the movie 'Pulp Fiction'?",
          options: ["John Travolta", "Samuel L. Jackson", "Uma Thurman", "Harvey Keitel"],
          answer: 0,
          },
          {
          question: "What is the name of the world's largest bay?",
          options: ["Bay of Bengal", "Hudson Bay", "Gulf of Mexico", "Bay of Fundy"],
          answer: 0,
          },
          {
          question: "Who is the author of the novel '1984'?",
          options: ["George Orwell", "Aldous Huxley", "J.D. Salinger", "Ernest Hemingway"],
          answer: 0,
          },
          {
          question: "What is the name of the chemical element with the symbol 'Ca'?",
          options: ["Calcium", "Chlorine", "Carbon", "Copper"],
          answer: 0,
          },
          {
          question: "Who is the lead actor in the movie 'Saving Private Ryan'?",
          options: ["Tom Hanks", "Matt Damon", "Edward Burns", "Tom Sizemore"],
          answer: 0,
          },
          {
          question: "What is the name of the world's largest hot desert?",
          options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
          answer: 0,
          },
          {
          question: "What is the name of the world's tallest tree species?",
          options: ["Redwood", "Oak", "Birch", "Pine"],
          answer: 0,
          },
          {
          question: "Who is the lead actor in the movie 'The Departed'?",
          options: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson", "Mark Wahlberg"],
          answer: 0,
          },
          {
          question: "What is the name of the world's largest bay by area?",
          options: ["Bay of Bengal", "Hudson Bay", "Gulf of Mexico", "Bay of Fundy"],
          answer: 1,
          },
          {
          question: "What is the name of the world's largest waterfall by width?",
          options: ["Niagara Falls", "Angel Falls", "Victoria Falls", "Iguazu Falls"],
          answer: 3,
          },
          {
              question: "What is the name of the law in physics that states that the entropy of a closed system always increases over time?",
              options: ["Newton's laws of motion", "Law of conservation of energy", "Second law of thermodynamics", "Hooke's law"],
              answer: 2,
              },
              {
              question: "What is the name of the smallest unit of a chemical element that retains the chemical properties of that element?",
              options: ["Proton", "Electron", "Neutron", "Atom"],
              answer: 3,
              },
              {
              question: "What is the name of the ancient civilization that built the city of Machu Picchu in present-day Peru?",
              options: ["Aztec", "Inca", "Maya", "Toltec"],
              answer: 1,
              },
              {
              question: "What is the name of the process by which plants use energy from sunlight to convert carbon dioxide and water into glucose?",
              options: ["Photosynthesis", "Respiration", "Fermentation", "Glycolysis"],
              answer: 0,
              },
              {
              question: "What is the name of the largest artery in the human body?",
              options: ["Femoral artery", "Carotid artery", "Aorta", "Brachial artery"],
              answer: 2,
              },
              {
              question: "What is the name of the concept in physics that states that particles can exist in multiple states or locations at the same time?",
              options: ["Quantum entanglement", "Quantum superposition", "Quantum tunneling", "Quantum decoherence"],
              answer: 1,
              },
              {
              question: "What is the name of the historical period in Japan that began in 1185 and ended in 1333?",
              options: ["Edo period", "Heian period", "Kamakura period", "Muromachi period"],
              answer: 2,
              },
              {
              question: "What is the name of the process by which an organism evolves to become better suited to its environment?",
              options: ["Natural selection", "Genetic mutation", "Gene flow", "Genetic drift"],
              answer: 0,
              },
              {
              question: "What is the name of the element with the atomic number 92 and the symbol U?",
              options: ["Uranium", "Plutonium", "Neptunium", "Americium"],
              answer: 0,
              },
              {
              question: "What is the name of the Russian monk who famously contributed to the development of the periodic table?",
              options: ["Dmitri Mendeleev", "Ivan Pavlov", "Lev Landau", "Andrei Sakharov"],
              answer: 0,
              },
              {
                  question: "What is the name of the German philosopher who wrote 'Beyond Good and Evil' and 'Thus Spoke Zarathustra'?",
                  options: ["Immanuel Kant", "Friedrich Nietzsche", "Jean-Paul Sartre", "Martin Heidegger"],
                  answer: 1,
                  },
                  {
                  question: "What is the name of the particle in physics that carries the weak force?",
                  options: ["Photon", "W boson", "Graviton", "Z boson"],
                  answer: 1,
                  },
                  {
                  question: "What is the name of the ancient civilization that built the city of Petra in present-day Jordan?",
                  options: ["Hittites", "Assyrians", "Babylonians", "Nabataeans"],
                  answer: 3,
                  },
                  {
                  question: "What is the name of the phenomenon in physics that states that particles can be connected in such a way that the state of one particle affects the state of another, regardless of the distance between them?",
                  options: ["Quantum entanglement", "Quantum superposition", "Quantum tunneling", "Quantum decoherence"],
                  answer: 0,
                  },
                  {
                  question: "What is the name of the famous equation in physics that relates mass and energy?",
                  options: ["Newton's second law", "Einstein's equation", "Planck's law", "Heisenberg's uncertainty principle"],
                  answer: 1,
                  },
                  {
                  question: "What is the name of the largest vein in the human body?",
                  options: ["Jugular vein", "Femoral vein", "Hepatic vein", "Vena cava"],
                  answer: 3,
                  },
                  {
                  question: "What is the name of the ancient Greek mathematician who discovered the Pythagorean theorem?",
                  options: ["Euclid", "Pythagoras", "Archimedes", "Thales"],
                  answer: 1,
                  },
                  {
                  question: "What is the name of the process by which a cell divides into two identical daughter cells?",
                  options: ["Meiosis", "Mitosis", "Replication", "Transcription"],
                  answer: 1,
                  },
                  {
                  question: "What is the name of the phenomenon in physics that causes the deflection of moving objects when they are viewed from a rotating frame of reference?",
                  options: ["Lorentz transformation", "Foucault pendulum", "Coriolis effect", "Einstein's equivalence principle"],
                  answer: 2,
                  },
                  {
                  question: "What is the name of the American mathematician who was portrayed by Russell Crowe in the movie 'A Beautiful Mind'?",
                  options: ["John Nash", "Paul Erdős", "Andrew Wiles", "Terence Tao"],
                  answer: 0,
                  },
                  {
                      question: "What was the name of the battle fought on June 18, 1815, in which the French army under Napoleon Bonaparte was defeated by the British and Prussian armies?",
                      options: ["Battle of Waterloo", "Battle of Austerlitz", "Battle of Borodino", "Battle of Leipzig"],
                      answer: 0,
                      },
                      {
                      question: "What was the name of the battle fought on June 6, 1944, in which Allied forces landed on the beaches of Normandy, France, and began the liberation of Western Europe from Nazi Germany?",
                      options: ["Battle of Stalingrad", "Battle of the Bulge", "Battle of Midway", "D-Day"],
                      answer: 3,
                      },
                      {
                      question: "What was the name of the naval battle fought on October 25, 1944, in which the United States Navy defeated the Imperial Japanese Navy and effectively ended Japan's ability to conduct large-scale naval operations?",
                      options: ["Battle of the Coral Sea", "Battle of Guadalcanal", "Battle of Leyte Gulf", "Battle of Iwo Jima"],
                      answer: 2,
                      },
                      {
                      question: "What was the name of the battle fought on September 17, 1862, in which Confederate forces under General Robert E. Lee clashed with Union forces under General George B. McClellan in the American Civil War?",
                      options: ["Battle of Gettysburg", "Battle of Antietam", "Battle of Chancellorsville", "Battle of Bull Run"],
                      answer: 1,
                      },
                      {
                      question: "What was the name of the battle fought on October 14, 1066, in which William the Conqueror of Normandy defeated King Harold of England and established Norman rule in England?",
                      options: ["Battle of Hastings", "Battle of Stamford Bridge", "Battle of Agincourt", "Battle of Bosworth Field"],
                      answer: 0,
                      },
                      {
                      question: "What was the name of the battle fought on June 4-7, 1942, in which United States naval and air forces defeated a Japanese fleet near Midway Island and turned the tide of the Pacific War?",
                      options: ["Battle of the Coral Sea", "Battle of Guadalcanal", "Battle of Leyte Gulf", "Battle of Midway"],
                      answer: 3,
                      },
                      {
                      question: "What was the name of the battle fought on July 1-3, 1863, in which Confederate forces under General Robert E. Lee were defeated by Union forces under General George G. Meade in the American Civil War?",
                      options: ["Battle of Gettysburg", "Battle of Antietam", "Battle of Chancellorsville", "Battle of Bull Run"],
                      answer: 0,
                      },
                      {
                      question: "What was the name of the battle fought on November 30, 1874, in which British forces under General Frederick Roberts defeated Afghan forces led by Akbar Khan in the Second Anglo-Afghan War?",
                      options: ["Battle of Isandlwana", "Battle of Maiwand", "Battle of Kabul", "Battle of Kandahar"],
                      answer: 3,
                      },

    // Add your easy questions here
];

const moderateQuestions = [
    {
    question: "What is the only mammal that can fly?",
    options: ["Bat", "Squirrel", "Mongoose", "Gorilla"],
    answer: 0,
    },
    {
    question: "Which planet is often called the 'Red Planet'?",
    options: ["Venus", "Mars", "Jupiter", "Uranus"],
    answer: 1,
    },
    {
    question: "Who directed the movie 'Pulp Fiction'?",
    options: ["Quentin Tarantino", "Martin Scorsese", "Steven Spielberg", "Christopher Nolan"],
    answer: 0,
    },
   



    // Add your moderate questions here
];

const difficultQuestions = [

    {
        question: "What is the name of the economic theory that emphasizes the importance of government intervention in the economy?",
        options: ["Classical economics", "Keynesian economics", "Austrian economics", "Chicago school of economics"],
        answer: 1,
        },
        {
        question: "What is the term for a tax that is levied on goods and services at the point of sale?",
        options: ["Income tax", "Corporate tax", "Sales tax", "Property tax"],
        answer: 2,
        },
        {
        question: "What is the name of the economic theory that proposes that government should only intervene in the economy to maintain the rule of law, protect property rights, and maintain the stability of the currency?",
        options: ["Classical economics", "Keynesian economics", "Austrian economics", "Chicago school of economics"],
        answer: 0,
        },
        {
        question: "What is the name of the measure of the total value of goods and services produced in a country over a given period of time?",
        options: ["Gross domestic product", "Consumer price index", "Unemployment rate", "Inflation rate"],
        answer: 0,
        },
        {
        question: "What is the name of the economic system in which the means of production are owned and controlled by the state?",
        options: ["Socialism", "Capitalism", "Communism", "Fascism"],
        answer: 2,
        },
        {
        question: "What is the name of the measure of the price level of a basket of goods and services consumed by households?",
        options: ["Gross domestic product", "Consumer price index", "Unemployment rate", "Inflation rate"],
        answer: 1,
        },


    // Add your difficult questions here
];

let questions;

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

let currentQuestion;
let usedFiftyFifty = false;
let usedPhone = false;
let usedAudience = false;

function startGame() {
  // Shuffle each difficulty level array
  const shuffledEasyQuestions = shuffleArray(easyQuestions);
  const shuffledModerateQuestions = shuffleArray(moderateQuestions);
  const shuffledDifficultQuestions = shuffleArray(difficultQuestions);

  // Combine the shuffled arrays to form the questions array
  questions = [
    ...shuffledEasyQuestions,
    ...shuffledModerateQuestions,
    ...shuffledDifficultQuestions,
  ];

  // Reset lifelines
  usedFiftyFifty = false;
  fiftyFiftyButton.classList.remove("used");
  usedPhone = false;
  phoneButton.classList.remove("used");
  usedAudience = false;
  audienceButton.classList.remove("used");

  // Reset winnings
  winnings = 0;
  winningsCounter.textContent = "$0";

  // Start the game
  currentQuestion = 0;
  showQuestion();
}

function showQuestion() {
  resetOptionButtons();
  const question = questions[currentQuestion];
  questionText.textContent = question.question;
  question.options.forEach((option, index) => {
    optionButtons[index].textContent = option;
  });
}

function resetOptionButtons() {
  optionButtons.forEach((button) => {
    button.disabled = false;
    button.style.fontWeight = "";
  });
}

function checkAnswer(answerIndex) {
    if (answerIndex === questions[currentQuestion].answer) {
      winnings = winningAmounts[currentQuestion];
      winningsCounter.textContent = `${formatWinnings(winnings)}`;
  
      currentQuestion++;
  
      if (currentQuestion < questions.length) {
        if (currentQuestion === 15) {
          alert("Congratulations! You've won!");
          startGame();
        } else {
          showQuestion();
        }
      } else {
        startGame();
      }
    } else {
      alert("Incorrect! Game over.");
      startGame();
    }
  }
    
    function useFiftyFifty() {
    if (usedFiftyFifty) return;
    usedFiftyFifty = true;
    fiftyFiftyButton.classList.add("used");
    
    const correctAnswer = questions[currentQuestion].answer;
    let removedAnswers = 0;
    while (removedAnswers < 2) {
    const randomIndex = Math.floor(Math.random() * 4);
    if (randomIndex !== correctAnswer && !optionButtons[randomIndex].disabled) {
    optionButtons[randomIndex].disabled = true;
    removedAnswers++;
    }
    }
    }
    
    function usePhone() {
    if (usedPhone) return;
    usedPhone = true;
    phoneButton.classList.add("used");
    
    const correctAnswer = questions[currentQuestion].answer;
    const numOfBoldOptions = Math.floor(Math.random() * 4) + 1;
    let boldedOptions = 0;
    
    // Ensure the correct answer is always bolded
    optionButtons[correctAnswer].style.fontWeight = "bold";
    boldedOptions++;
    
    while (boldedOptions < numOfBoldOptions) {
    const randomIndex = Math.floor(Math.random() * 4);
    const optionButton = optionButtons[randomIndex];
    if (!optionButton.style.fontWeight) {
    optionButton.style.fontWeight = "bold";
    boldedOptions++;
    }
    }
    }
    
    function useAudience() {
    if (usedAudience) return;
    usedAudience = true;
    audienceButton.classList.add("used");
    
    const correctAnswer = questions[currentQuestion].answer;
    const numOfBoldOptions = Math.floor(Math.random() * 3) + 1;
    let boldedOptions = 0;
    
    // Ensure the correct answer is always bolded
    optionButtons[correctAnswer].style.fontWeight = "bold";
    boldedOptions++;
    
    while (boldedOptions < numOfBoldOptions) {
    const randomIndex = Math.floor(Math.random() * 4);
    const optionButton = optionButtons[randomIndex];
    if (!optionButton.style.fontWeight) {
    optionButton.style.fontWeight = "bold";
    boldedOptions++;
    }
 }
}
    
startGame();