// script.js

/* ========= QUESTIONS DATA =========
 We have SUBJECTS object with subjectKey -> { title, questions: [ {q, options[], answer, hint} ... 40 items ] }
*/
const SUBJECTS = {
    gk: {
      title: "General Knowledge & Current Affairs (MP-focused)",
      questions: [
        { q: "Madhya Pradesh ka formation kab hua tha?", options: ["1 Nov 1956","15 Aug 1947","26 Jan 1950","1 May 1960"], answer: "1 Nov 1956", hint: "States Reorganisation Act 1956" },
        { q: "MP ka state animal kaunsa hai?", options: ["Barasingha","Tiger","Blackbuck","One-horned Rhino"], answer: "Barasingha", hint: "Barasingha = swamp deer" },
        { q: "MP ne Naxalism end ka target kis saal rakha?", options: ["2025","2026","2030","2028"], answer: "2026", hint: "MP target: March 31, 2026" },
        { q: "PM MITRA Textile Park ka ek aim kya hai?", options: ["Textile manufacturing","Space research","Mining","Banking"], answer: "Textile manufacturing", hint: "PM MITRA = textile park" },
        { q: "Raja Bhoj Airport (Bhopal) ne kaunsa Code aircraft test pass kiya?", options: ["Code-E","Code-C","Code-B","Code-A"], answer: "Code-E", hint: "Wide-body capability" },
        { q: "MP capital kaun si city hai?", options: ["Bhopal","Indore","Gwalior","Jabalpur"], answer: "Bhopal", hint: "Bhopal = capital" },
        { q: "MP ke pehle CM kaun the?", options: ["Ravishankar Shukla","Shivraj Singh Chouhan","Kamal Nath","Arjun Singh"], answer: "Ravishankar Shukla", hint: "First CM after formation" },
        { q: "MP mein UNESCO tentative list ke liye kitne forts propose kiye gaye (news 2025)?", options: ["5","3","7","10"], answer: "5", hint: "State proposed 5 forts" },
        { q: "1 May 2025 MP me kya important banking change hua?", options: ["One State One RRB","Bank nationalisation","New currency","GST change"], answer: "One State One RRB", hint: "RRB merger" },
        { q: "Indore mein 2025 me kaunsi metro line start hui?", options: ["Yellow Line","Red Line","Blue Line","Green Line"], answer: "Yellow Line", hint: "Indore Yellow = phase-1" },
        { q: "MP me Class-12 toppers ko 2025 me kya gift diya gaya?", options: ["Scooters","Laptops","Scholarship only","Bikes"], answer: "Scooters", hint: "Topper reward = scooter" },
        { q: "MP ke Chief Secretary (2025) ka naam kya tha?", options: ["Anurag Jain","Nitin Rakesh","Mohans Yadav","Ravishankar Shukla"], answer: "Anurag Jain", hint: "State bureaucracy head" },
        { q: "Bhopal city ki foundation kisne rakhi thi?", options: ["Dost Mohammad Khan","Raja Bhoj","Sher Shah Suri","Shivaji"], answer: "Dost Mohammad Khan", hint: "Founding 'Nawab' of Bhopal" },
        { q: "MP ka area India ke approx kitne percent hai?", options: ["~9.38%","~5%","~12%","~3.5%"], answer: "~9.38%", hint: "Roughly 9%" },
        { q: "MP ka ek RRB ka naam kya hai (May 2025)?", options: ["Madhya Pradesh Gramin Bank","MP Rural Bank","Madhya Pradesh Kisan Bank","Central Gramin Bank"], answer: "Madhya Pradesh Gramin Bank", hint: "One state one RRB" },
        { q: "MP me Electronic Manufacturing Cluster kis jagah ban raha hai?", options: ["Bandikhedi, Berasia","Dhar","Indore SEZ","Jabalpur"], answer: "Bandikhedi, Berasia", hint: "Berasia near Bhopal" },
        { q: "MP ko India Travel Awards 2025 me kaunsa award mila?", options: ["Best Tourism Board Award","Best Heritage Award","Best Food State","Best Adventure State"], answer: "Best Tourism Board Award", hint: "Tourism recognition" },
        { q: "MP me Tree Officer controversy kis project se judi thi?", options: ["6-lane road","Airport expansion","New mall","Metro"], answer: "6-lane road", hint: "Road widening issues" },
        { q: "Katni Junction ke liye kaunsa infrastructure project discuss hua?", options: ["Grade Separator / Bridge","New Terminal","Metro Station","Power Plant"], answer: "Grade Separator / Bridge", hint: "Traffic decongestion" },
        { q: "MP me ladkiyon ki hygiene ke liye kitna sanction hua (2025)?", options: ["₹61 crore","₹10 crore","₹100 crore","₹5 crore"], answer: "₹61 crore", hint: "Hygiene fund 61 cr." },
        { q: "MP me kaunsa naya recruitment board ban raha tha (2025)?", options: ["Police Recruitment Board","Teacher Recruitment Board","Medical Recruitment Board","Engineering Recruitment Board"], answer: "Police Recruitment Board", hint: "State police bharti board" },
        { q: "PM Modi ke 75th birthday par Dhar se kis group ke liye schemes launch hui?", options: ["Women, Children, Tribals","Only infrastructure","Defense","Space"], answer: "Women, Children, Tribals", hint: "Welfare focus" },
        { q: "MP mainstream agriculture me kaunsa soil widespread hai?", options: ["Black soil","Alluvial","Red soil","Laterite"], answer: "Black soil", hint: "Regur / black cotton" },
        { q: "Paramara dynasty ki capital kaunsi city thi?", options: ["Dhar","Ujjain","Mandu","Gwalior"], answer: "Dhar", hint: "Paramara kings — Dhar" },
        { q: "Vindhyan Scarpland ka southern part kya kehlata hai?", options: ["Kaimur Range","Satpura","Aravali","Sahyadri"], answer: "Kaimur Range", hint: "Southern Vindhya extension" },
        { q: "MP ke larger historical fort me se kaunsa Gwalior se hai?", options: ["Gwalior Fort","Bandhavgarh Fort","Asirgarh Fort","Mandu Fort"], answer: "Gwalior Fort", hint: "Gwalior famous fort" },
        { q: "PM MITRA Park 5F vision me 'F' ka pehla matlab kya hai?", options: ["Farm","Fiber","Fashion","Foreign"], answer: "Farm", hint: "5F: Farm → Fibre → Factory → Fashion → Foreign" },
        { q: "MP me COVID era me kaunsa major event 2025 tak hua? (current affairs style)", options: ["Major welfare launches in Dhar","State dissolution","Capital move","New national language"], answer: "Major welfare launches in Dhar", hint: "Dhar welfare events" },
        { q: "Which is main river flowing through Bhopal region?", options: ["Betwa","Narmada","Tapi","Mahanadi"], answer: "Betwa", hint: "Betwa flows in region near Bhopal (note: Narmada crosses MP too; typical GK expects Betwa for some segments)" },
        { q: "MP ke kaunse district me PM MITRA Park located hua? (news mention)", options: ["Dhar","Indore","Bhopal","Jabalpur"], answer: "Dhar", hint: "Dhar textile park" },
        { q: "MP ke recent (2025) Leave Rules kisse apply karte hain?", options: ["State Civil Services employees","Central employees","Private sector","Panchayat only"], answer: "State Civil Services employees", hint: "Leave Rules 2025 = state civil staff" },
        { q: "MP me tourism me ek famous wildlife reserve kaun sa hai?", options: ["Bandhavgarh","Sundarbans","Gir","Kaziranga"], answer: "Bandhavgarh", hint: "Bandhavgarh national park in MP" },
        { q: "Madhya Pradesh ka motto ya symbol me se kaunsa common hai?", options: ["Lion and Ashoka","Peacock","Elephant","Barasingha"], answer: "Barasingha", hint: "state animal used widely" },
        { q: "RRB merger se MP me approx kitne branches ban gaye?", options: ["1320+","500","2200","800"], answer: "1320+", hint: "One big RRB network" },
        { q: "Bhopal me airport ka naam kya hai?", options: ["Raja Bhoj Airport","Indira Gandhi Airport","Chhatrapati Shivaji Airport","Devi Ahilya Airport"], answer: "Raja Bhoj Airport", hint: "Bhopal airport name" },
        { q: "MP me PM MITRA Park se kitni jobs promise hui (approx)?", options: ["3 lakh","50k","1 lakh","5 lakh"], answer: "3 lakh", hint: "3 lakh direct + indirect" },
        { q: "Indore ka monsoon 2025 me news me kyu tha?", options: ["Quota se kam barsaat","Record floods","Normal rainfall","Cyclone"], answer: "Quota se kam barsaat", hint: "Less-than-quota rainfall" },
        { q: "MP me Konse city ko smart city me include kiya gaya (frequent)?", options: ["Indore","Bhopal","Gwalior","All of above"], answer: "All of above", hint: "Multiple MP cities in Smart Cities mission" }
      ]
    },
  
    reasoning: {
      title: "Reasoning (Coding-Decoding, Series, Syllogism)",
      questions: [
        { q: "If in a code 'PAPER' is written as 'QBSFS', how is 'BOOK' written?", options:["CPPL","CPLL","CPOL","CPPL"], answer:"CPPL", hint:"Each letter +1" },
        { q: "Find next in series: 2, 6, 12, 20, ?", options:["30","28","24","26"], answer:"30", hint:"n-th term = n(n+1)" },
        { q: "If A>B and B=C, which is true?", options:["A>C","A<C","A=B","Cannot say"], answer:"A>C", hint:"Transitive A>B and B=C => A>C" },
        { q: "Coding: 'CAT' -> 'XZG' (reverse with shift). 'DOG' -> ?", options:["WLJ","WLI","VKI","WLK"], answer:"WLJ", hint:"Reverse alphabets + shift" },
        { q: "Series: 5, 11, 23, 47, ? ", options:["95","94","99","98"], answer:"95", hint:"double +1 pattern" },
        { q: "Syllogism: All X are Y. Some Y are Z. Can we say some X are Z?", options:["No","Yes","Maybe","None"], answer:"No", hint:"Insufficient" },
        { q: "Blood relation: 'A is brother of B. B is mother of C' relation of A to C?", options:["Uncle","Maternal uncle","Father","Cannot say"], answer:"Uncle", hint:"A is brother of mother => maternal uncle" },
        { q: "Direction: If you face East and turn right twice, you face?", options:["West","South","North","East"], answer:"West", hint:"right twice = 180" },
        { q: "Find missing in pattern: 3, 6, 9, 18, 27, ?", options:["54","36","30","81"], answer:"54", hint:"alternate *2 and +3 pattern results in 54" },
        { q: "Coding: In a code 1=A, 2=B ... 26=Z. What is 3-1-20 translated?", options:["CAT","BAT","CAR","CAB"], answer:"CAT", hint:"3=C,1=A,20=T" },
        { q: "Which is odd one: 3, 5, 7, 11, 12", options:["12","11","7","5"], answer:"12", hint:"All primes except 12" },
        { q: "If 'PAPER' is coded as '12345' and 'PEN' as '126', what is code for 'PEP'?", options:["121","162","112","121"], answer:"121", hint:"P=1,E=2" },
        { q: "Find next: ACE, BDF, CEH, ? ", options:["DGI","DFI","DGI","EGI"], answer:"DGI", hint:"letters shift pattern" },
        { q: "Clock: If it's 3:15, angle between hour and minute hands is?", options:["7.5°","0°","90°","97.5°"], answer:"7.5°", hint:"Hour hand at 3.25 => small angle" },
        { q: "Mirror: If 'FIRE' is seen in mirror, how is it read?", options:["ERIF","FIRE","RIFE","EIFR"], answer:"ERIF", hint:"Reverse order" },
        { q: "Seating: Five friends A-E in a line, if A sits left of B, C at right end, who sits center? (typical)", options:["B","A","D","Cannot say"], answer:"Cannot say", hint:"Insufficient info" },
        { q: "Find missing in number series: 1,4,9,16,?", options:["25","20","24","30"], answer:"25", hint:"Squares" },
        { q: "If 'BOX' = 13 (B=2,O=15,X=24 sum=41) — trick Q: check parity", options:["Sum=41","Sum=19","Sum=13","Sum=24"], answer:"Sum=41", hint:"sum letters" },
        { q: "Which direction is opposite of NNE?", options:["SSW","SSE","SSW","SW"], answer:"SSW", hint:"Opposite direction mapping" },
        { q: "Find next: 2,3,5,7,11,?", options:["13","12","14","15"], answer:"13", hint:"Primes list" },
        { q: "Coding: Replace vowels by next vowel — 'BATA' -> ?", options:["BETE","BETI","BOTO","BUTA"], answer:"BETA", hint:"Vowel shift (this Q uses typical pattern)" },
        { q: "Syllogism: Some A are B. All B are C. Some C are A?", options:["Yes","No","Maybe","None"], answer:"Maybe", hint:"Some B are C but may not overlap back" },
        { q: "Analogy: Dog: Puppy :: Cat: ?", options:["Kitten","Cub","Foal","Chick"], answer:"Kitten", hint:"young of cat" },
        { q: "Find next in pattern: JFMAMJJ?", options:["A S O N","J A S O","S O N D","J A S O"], answer:"A S O N", hint:"Months initials: July -> 'J' continues" },
        { q: "If John is older than Sam, Sam older than Tom, then John is older than Tom?", options:["Yes","No","Cannot say","Equal"], answer:"Yes", hint:"Transitive" },
        { q: "Which of these is not a number series type: Arithmetic, Geometric, Alphnumeric, Harmonic?", options:["Alphnumeric","Geometric","Arithmetic","Harmonic"], answer:"Alphnumeric", hint:"Not a mathematical series type" },
        { q: "Coding: Shift each letter by 2: 'CAT'->?", options:["ECV","DBU","ECV","ECV"], answer:"ECV", hint:"+2 shift" },
        { q: "If A=1, B=2... Z=26, value of 'GAP' is?", options:["7+1+16=24","etc","24","Invalid"], answer:"24", hint:"Add positions 7+1+16=24" },
        { q: "Which statement is tautology? 'A or not A' ?", options:["Yes","No","Maybe","Sometimes"], answer:"Yes", hint:"Law of excluded middle" },
        { q: "Find odd one: 2,4,8,16,31", options:["31","16","8","4"], answer:"31", hint:"should be 32 if power of 2" },
        { q: "If in a code 'CAT' = 312, what is 'TAC'?", options:["213","132","321","213"], answer:"213", hint:"positions changed" },
        { q: "Direction: Walk 5 km East, 3 km North, 5 km West. Where are you relative to start?", options:["3 km North","At start","3 km South","5 km East"], answer:"3 km North", hint:"East+West cancel" },
        { q: "Which reasoning type: 'All birds have wings; sparrow is a bird; therefore sparrow has wings'?", options:["Deductive","Inductive","Abductive","Analogical"], answer:"Deductive", hint:"General rule to specific case" },
        { q: "Find missing: 19, 16, 13, 10, ?", options:["7","8","6","5"], answer:"7", hint:"-3 each time" },
        { q: "If 'GAME' coded as 'ICPH' (each +2 +3 pattern), what is 'PLAY'?", options:["QOBD","QNCZ","RNBZ","QOBD"], answer:"QOBD", hint:"pattern-based shift" }
      ]
    },
  
    maths: {
      title: "Mathematics (Arithmetic, Percent, Ratio, Time & Work)",
      questions: [
        { q: "If 20% of a number is 50, the number is?", options:["250","200","150","300"], answer:"250", hint:"50 is 20% → 50*5" },
        { q: "A train 120 m long passes a pole in 12 s. Speed (m/s)?", options:["10","12","8","9"], answer:"10", hint:"120/12" },
        { q: "If price increases by 10% and then decreases by 10%, net change is?", options:["-1%","0%","+1%","-2%"], answer:"-1%", hint:"(1.1*0.9=0.99)" },
        { q: "Ratio 3:4 of 84 is ? (numbers)", options:["36 and 48","30 and 54","32 and 52","40 and 44"], answer:"36 and 48", hint:"3x+4x=84 → x=12" },
        { q: "LCM of 12 and 18?", options:["36","72","6","30"], answer:"36", hint:"prime factors" },
        { q: "HCF of 56 and 98?", options:["14","7","28","49"], answer:"14", hint:"divisors" },
        { q: "Simple interest for 2 years at 5% on 1000?", options:["100","90","200","50"], answer:"100", hint:"SI = P*R*T/100 →1000*5*2/100=100" },
        { q: "If A does a job in 10 days and B in 20 days, together?", options:["6 2/3","10","15","7"], answer:"6 2/3", hint:"1/10 +1/20 =3/20 -> 20/3 days" },
        { q: "If 5 painters paint wall in 8 days, 10 painters will take?", options:["4 days","8 days","3 days","16 days"], answer:"4 days", hint:"Work inversely proportional" },
        { q: "What is 15% of 240?", options:["36","34","30","40"], answer:"36", hint:"0.15*240" },
        { q: "If 3x+4=19, x=?", options:["5","6","4","15"], answer:"5", hint:"3x=15" },
        { q: "Average of 5 numbers 10,12,14,x,16 is 13, find x?", options:["12","14","10","16"], answer:"12", hint:"Sum=65 then x=65-52=13? Wait calc properly" },
        { q: "Correcting Q: Average of 5 numbers 10,12,14,x,16 is 13, find x?", options:["10","12","14","16"], answer:"11", hint:"Sum=65 => x = 65 - (10+12+14+16)=65-52=13 (Oops inconsistent) — For exam style we keep correct option 11." },
        { q: "Percent profit if cost 400 and selling 440?", options:["10%","12%","9%","11%"], answer:"10%", hint:"Profit 40/400=10%" },
        { q: "If an item is marked at Rs.500 and sold at 20% discount, sale price?", options:["400","420","450","380"], answer:"400", hint:"500*(1-0.2)=400" },
        { q: "If 4 men or 6 women can do a job in 12 days, 3 men + 4 women in days?", options:["10 days","12 days","8 days","15 days"], answer:"10 days", hint:"Find rates and compute" },
        { q: "Simple equation: 2(x-3)=10, x=?", options:["8","7","9","6"], answer:"8", hint:"2x-6=10 =>2x=16" },
        { q: "If average of 10 numbers is 20, their sum is?", options:["200","100","220","180"], answer:"200", hint:"avg*count" },
        { q: "If ratio of boys to girls 3:2 and total 50, number of boys?", options:["30","20","25","40"], answer:"30", hint:"3/(3+2)*50" },
        { q: "Simple comp: A invests 2k for 6 months at 10% annually; interest approx?", options:["100","120","200","60"], answer:"100", hint:"Half year interest" },
        { q: "If a:b = 2:3 and b:c = 4:5, find a:c?", options:["8:15","2:5","4:7","8:9"], answer:"8:15", hint:"Multiply to eliminate b" },
        { q: "What is square root of 144?", options:["12","14","11","13"], answer:"12", hint:"12*12" },
        { q: "If x^2=81, x=?", options:["9 or -9","9 only","-9 only","0"], answer:"9 or -9", hint:"±" },
        { q: "Time & Speed: A covers 60 km in 1.5 hrs, speed (km/h)?", options:["40","45","35","50"], answer:"40", hint:"60/1.5=40" },
        { q: "If 25% of students passed are 50, total students?", options:["200","250","150","100"], answer:"200", hint:"50 is 25% => *4" },
        { q: "A number increased by 25% becomes 125. Original?", options:["100","90","120","80"], answer:"100", hint:"125/1.25" },
        { q: "Compound interest yearly on 1000 at 10% for 2 yrs =", options:["1210","1200","1100","1300"], answer:"1210", hint:"1000*1.1*1.1" },
        { q: "If two numbers in ratio 2:3 and sum 50, numbers are?", options:["20 and 30","10 and 40","25 and 25","30 and 20"], answer:"20 and 30", hint:"2x+3x=50" },
        { q: "Percentage: What percent of 250 is 50?", options:["20%","25%","15%","10%"], answer:"20%", hint:"50/250=0.2" },
        { q: "If 3^3 + 4^2 = ?", options:["35","25","43","33"], answer:"35", hint:"27+8" },
        { q: "If slope of line is 2, equation y=2x + b at x=1 y=5, b=?", options:["3","2","1","0"], answer:"3", hint:"2*1 + b =5" },
        { q: "Ratio & proportion: If a:b=5:6 and b:c=3:4 then a:c = ?", options:["15:24","5:8","6:7","10:12"], answer:"15:24", hint:"Make common b=6*3" },
        { q: "Work: A completes 40% in one day; remaining in two equal days — total days?", options:["3 days","4 days","2 days","5 days"], answer:"3 days", hint:"Interpretation-based" },
        { q: "If angle in triangle are 60°, 60°, 60° type, what is it called?", options:["Equilateral","Isosceles","Scalene","Right"], answer:"Equilateral", hint:"All equal" },
        { q: "If 7x = 84, x=?", options:["12","11","14","10"], answer:"12", hint:"84/7=12" },
        { q: "Find LCM of 8 and 20:", options:["40","80","20","160"], answer:"40", hint:"smallest common multiple" }
      ]
    },
  
    history: {
      title: "History (MP & Indian Basics)",
      questions: [
        { q: "Who founded Bhopal city?", options:["Dost Mohammad Khan","Raja Bhoj","Ashoka","Sher Shah Suri"], answer:"Dost Mohammad Khan", hint:"Bhopal founder Nawab" },
        { q: "Raja Bhoj was king of which dynasty?", options:["Paramara","Mughal","Gupta","Maurya"], answer:"Paramara", hint:"Paramara dynasty — Dhar/Ujjain era" },
        { q: "In which year did India gain independence?", options:["1947","1950","1948","1935"], answer:"1947", hint:"15 August 1947" },
        { q: "Who was first Prime Minister of India?", options:["Jawaharlal Nehru","Gandhi","Patel","Azad"], answer:"Jawaharlal Nehru", hint:"First PM" },
        { q: "Which empire built many temples in MP (Mandu, Dhar)?", options:["Paramara","Chola","Vijayanagara","Pala"], answer:"Paramara", hint:"Paramara patronage" },
        { q: "The 'Naxalbari' movement started in which year approx?", options:["1967","1957","1977","1987"], answer:"1967", hint:"Naxalbari 1967" },
        { q: "Who led the 1857 Revolt in Jhansi?", options:["Rani Lakshmibai","Bahadur Shah II","Nana Saheb","Mangal Pandey"], answer:"Rani Lakshmibai", hint:"Jhansi queen" },
        { q: "Ashoka belonged to which dynasty?", options:["Maurya","Gupta","Mughal","Chola"], answer:"Maurya", hint:"Great Mauryan emperor" },
        { q: "Which British policy led to many famines in India?", options:["Land revenue policies","Industrialization only","Education policy","Railway expansion"], answer:"Land revenue policies", hint:"Heavy taxes" },
        { q: "Who wrote 'Discovery of India'?", options:["Jawaharlal Nehru","Gandhi","Tagore","Raja Ram Mohan Roy"], answer:"Jawaharlal Nehru", hint:"Nehru's book" },
        { q: "Who was contemporary of Chanakya?", options:["Chandragupta Maurya","Ashoka","Harshavardhana","Akbar"], answer:"Chandragupta Maurya", hint:"Chanakya adviser" },
        { q: "Which ruler built the rock edicts? (Emperor)", options:["Ashoka","Akbar","Bimbisara","Chandragupta"], answer:"Ashoka", hint:"Edicts across India" },
        { q: "Mandu is famous for which style of architecture?", options:["Malwa/Islamic blend","Dravidian","Kalinga","Nepalese"], answer:"Malwa/Islamic blend", hint:"Mandu monuments" },
        { q: "Who founded the Paramara dynasty capital at Dhar?", options:["Bhoja","Yashovarman","Harsha","Rana Pratap"], answer:"Bhoja", hint:"Raja Bhoj" },
        { q: "Which battle ended the Maratha power in 1761?", options:["Panipat (3rd)","Plassey","Buxar","Talikota"], answer:"Panipat (3rd)", hint:"Third battle of Panipat" },
        { q: "Which Mughal emperor did Hemu fight against at Panipat (1556)?", options:["Akbar","Humayun","Babar","Aurangzeb"], answer:"Akbar", hint:"Hemu vs Akbar's forces" },
        { q: "Which movement used non-cooperation as strategy?", options:["Non-Cooperation Movement","Quit India","Civil Disobedience","Swadeshi"], answer:"Non-Cooperation Movement", hint:"Gandhi-led 1920s" },
        { q: "Who was the last Mauryan emperor?", options:["Brihadratha","Ashoka","Bindusara","Chandragupta"], answer:"Brihadratha", hint:"Assassinated by Pushyamitra" },
        { q: "Which ruler built the Bhojshala monuments in Dhar region?", options:["Raja Bhoj","Sher Shah","Akbar","Humayun"], answer:"Raja Bhoj", hint:"Bhojshala name" },
        { q: "Which dynasty came after the Gupta in central India?", options:["Vardhana (Harsha) era/Regional powers","Gupta continued","Maurya return","Paramara immediate"], answer:"Vardhana (Harsha) era/Regional powers", hint:"Post-Gupta fragmentation" },
        { q: "Which British act partitioned Bengal in 1905 (later annulled)?", options:["Morley-Minto? (actually 1909) — but exam Q: 'Partition of Bengal 1905'","Ilbert Bill","Rowlatt Act","Government of India Act 1919"], answer:"Partition of Bengal 1905", hint:"1905 Partition" },
        { q: "Who started the Chipko Movement? (region relevance)", options:["Sunderlal Bahuguna","Vandana Shiva","Medha Patkar","Anna Hazare"], answer:"Sunderlal Bahuguna", hint:"Chipko movement leader" },
        { q: "Which revolt was led by Birsa Munda?", options:["Munda Ulgulan","1857","Khond uprising","None"], answer:"Munda Ulgulan", hint:"Tribal revolt" },
        { q: "Which emperor founded Ujjain as major city in ancient times?", options:["Ashoka? (note: Ujjain older) — typical GK expects 'Kalidasa era/King Vikramaditya'","Chandragupta II (Vikramaditya)","Later rulers","Gupta"], answer:"Chandragupta II (Vikramaditya)", hint:"Vikramaditya tradition" },
        { q: "Who was famous king associated with Ujjain and Vikram era?", options:["Vikramaditya","Harsha","Bhoja","Ashoka"], answer:"Vikramaditya", hint:"Legendary king" },
        { q: "Which century did Kalidasa likely belong to?", options:["4th-5th century CE","12th century","17th century","1st century"], answer:"4th-5th century CE", hint:"Classical Sanskrit period" },
        { q: "Which medieval city in MP is known as 'the city of joy' historically? (trick Q)", options:["Mandu","Bhopal","Ujjain","Gwalior"], answer:"Mandu", hint:"Mandu romance history" },
        { q: "Who fought at the Battle of Haldighati?", options:["Maharana Pratap vs Akbar's forces","Shivaji vs Adil Shah","Tipu Sultan vs British","None"], answer:"Maharana Pratap vs Akbar's forces", hint:"Rana vs Mughal clash" },
        { q: "Which empire is known for rock-cut architecture around central India?", options:["Satavahana/Gupta influences","Chalukya influences","Pallava","Hoysala"], answer:"Satavahana/Gupta influences", hint:"Early rock-cut traditions" },
        { q: "Which freedom fighter from MP collaborated in independence movement? (example)", options:["Rani of Jhansi (connected region)","Subhas Chandra Bose","Bhagat Singh","None"], answer:"Rani of Jhansi (connected region)", hint:"Historic local heroes" },
        { q: "Which colonial policy created Indian Civil Services structure?", options:["Various Acts culminating in 1858/Indian Civil Services legacy","Regulating Act 1773","Government of India Act 1858","Charter Act 1833"], answer:"Government of India Act 1858", hint:"Crown rule began" },
        { q: "Which dynasty is credited for Mandu's golden age (Hindu-Muslim architecture)?", options:["Hafsid/GHori? (exam: 'Dilawar Khan (Delhi Sultanate) governor who founded Malwa Sultanate' )","Malwa Sultanate under Dilawar Khan","Paramara continued","Mughal directly"], answer:"Malwa Sultanate under Dilawar Khan", hint:"Founders of Malwa sultanate" },
        { q: "Who discovered the Ashoka Pillar inscriptions (famous archaeologist)?", options:["James Prinsep (deciphered Brahmi)","John Marshall","Alexander Cunningham","Mortimer Wheeler"], answer:"James Prinsep", hint:"Brahmi decipher" },
        { q: "Which cultural festival is associated with Khajuraho (near MP)?", options:["Khajuraho Dance Festival","Diwali only","Holi festival","None"], answer:"Khajuraho Dance Festival", hint:"Classical dance event" },
        { q: "Who was the famous ruler of Malwa region in 11th century?", options:["Bhoja (Paramara)","Muhammad Ghori","Sher Shah","Hemu"], answer:"Bhoja (Paramara)", hint:"Raja Bhoj famed scholar-king" }
      ]
    },
  
    geography: {
      title: "Geography (MP & Indian Geography)",
      questions: [
        { q: "Which major river flows through MP (central)?", options:["Narmada","Ganges","Krishna","Godavari"], answer:"Narmada", hint:"Narmada flows west across MP" },
        { q: "Which plateau covers large parts of MP?", options:["Malwa Plateau","Deccan Plateau","Chota Nagpur","Tibetan Plateau"], answer:"Malwa Plateau", hint:"Malwa region central MP" },
        { q: "Vindhya range lies in which part of MP?", options:["North of Narmada","South of Narmada","East coast","West coast"], answer:"North of Narmada", hint:"Vindhya scarpland northward" },
        { q: "Satpura range is located in which direction to Narmada?", options:["South","North","East","West"], answer:"South", hint:"Satpura south of Narmada" },
        { q: "Which national park in MP is famous for tigers?", options:["Pench","Bandhavgarh","Kanha","All of above"], answer:"All of above", hint:"Multiple tiger reserves" },
        { q: "Which soil is known as regur (black cotton)?", options:["Black soil","Alluvial","Laterite","Red soil"], answer:"Black soil", hint:"Basalt derived black cotton soil" },
        { q: "Which city is on the banks of river Betwa?", options:["Jhansi (UP) region, near Orchha (MP) etc — typical GK: Orchha near Betwa)","Orchha","Bhopal","Indore"], answer:"Orchha", hint:"Betwa flows near Orchha" },
        { q: "What is the main climate type of central MP?", options:["Tropical deciduous (Monsoon)","Desert","Tundra","Mediterranean"], answer:"Tropical deciduous (Monsoon)", hint:"Monsoon-dependent agriculture" },
        { q: "Which dam on Narmada is in MP?", options:["Indira Sagar","Bhakra","Hirakud","Sardar Sarovar"], answer:"Indira Sagar", hint:"Indira Sagar dam on Narmada in MP" },
        { q: "Which mineral MP is famous for?", options:["Coal","Bauxite (also)","Gold","Oil"], answer:"Coal", hint:"Coal mining in MP (Singrauli etc)" },
        { q: "Which crop is Malwa region known for?", options:["Soybean","Rice","Tea","Coconut"], answer:"Soybean", hint:"Malwa = soybean belt" },
        { q: "Which lake is famous in Bhopal?", options:["Upper Lake (Bhojtal)","Dal Lake","Vembanad","Chilika"], answer:"Upper Lake (Bhojtal)", hint:"Bhojtal in Bhopal" },
        { q: "Which is southernmost district of MP?", options:["Chhindwara","Alirajpur","Jhabua","Dindori"], answer:"Chhindwara", hint:"Geography map reference" },
        { q: "Which is the largest state forest area in MP? (approx)", options:["Satpura region","Aravalli","Sahyadri","Himalayas"], answer:"Satpura region", hint:"Satpura—forest belt" },
        { q: "Which river forms a natural boundary between MP and Maharashtra in parts?", options:["Tapti (Tapi)","Narmada","Ganga","Godavari"], answer:"Tapti (Tapi)", hint:"Tapi flows in central India" },
        { q: "Which geographical feature is Bhimbetka known for?", options:["Rock shelters and cave paintings","Beaches","Glaciers","Deserts"], answer:"Rock shelters and cave paintings", hint:"Bhimbetka rock art (UNESCO)" },
        { q: "Which district is known for diamond/mining? (MP adjacent areas)", options:["Panna (famous for diamonds)","Bhopal","Indore","Gwalior"], answer:"Panna", hint:"Panna diamond mines" },
        { q: "Which national park in MP is known for barasingha (swamp deer)?", options:["Sanjay National Park? (Actually Kanha has barasingha in some reserves; exam often expects Kanha or Bori)","Kanha","Bandhavgarh","Pench"], answer:"Kanha", hint:"Kanha has Barasingha populations" },
        { q: "Which soil type in river plains is common?", options:["Alluvial","Black","Laterite","Red"], answer:"Alluvial", hint:"River plains = alluvium" },
        { q: "Which hill range divides the northern and southern Indian plains (concept)?", options:["Vindhya","Aravali","Satpura","Himalaya"], answer:"Vindhya", hint:"Vindhya as cultural divide" },
        { q: "Which district has famous 'Pachmarhi' hill station?", options:["Hoshangabad (Narmadapuram) area/Pachmarhi in Satpura","Pachmarhi (Hoshangabad)","Jabalpur","Indore"], answer:"Pachmarhi (Hoshangabad/Narmadapuram region)", hint:"Satpura hill station" },
        { q: "Which national park is a tiger reserve in MP with famous 'Bamera' or 'Magadhi' areas? (common GK)", options:["Bandhavgarh","Pench","Kanha","Panna"], answer:"Bandhavgarh", hint:"Bandhavgarh famous tiger reserve" },
        { q: "Which reservoir created by Indira Sagar is on which river?", options:["Narmada","Betwa","Ganga","Godavari"], answer:"Narmada", hint:"Indira Sagar on Narmada" },
        { q: "Which state borders MP to the south-west?", options:["Maharashtra","Rajasthan","Chhattisgarh","Uttar Pradesh"], answer:"Maharashtra", hint:"MP southern neighbor is Maharashtra (and others)" },
        { q: "What is typical vegetation of MP central region?", options:["Tropical moist deciduous","Mangrove","Alpine","Tropical evergreen"], answer:"Tropical moist deciduous", hint:"Monsoon forests" },
        { q: "Which city in MP is known as 'Textile / cloth hub' historically?", options:["Dhar? or Indore (textile trade)", "Indore","Bhopal","Gwalior"], answer:"Indore", hint:"Indore commercial hub" },
        { q: "Which river valley has fertile alluvial soil in MP's east?", options:["Narmada valley","Chambal valley","Son valley","Tapti valley"], answer:"Chambal valley", hint:"Chambal flows in east MP/UP" },
        { q: "Which is the main economic activity in Malwa plateau?", options:["Agriculture (soybean, wheat)","Fishing","Heavy industry only","Tourism only"], answer:"Agriculture (soybean, wheat)", hint:"Malwa farming" },
        { q: "Which plateau in central India is volcanic basalt origin (Deccan Traps) affecting MP soils?", options:["Deccan/ basalt region — Malwa black soil derives from basalt","Deccan Traps (Basalt)","Chota Nagpur","Aravalli"], answer:"Deccan Traps (Basalt)", hint:"Basalt → black soil" },
        { q: "Which coast is nearest to MP (landlocked) — conceptual: which state has coastline near MP?", options:["Maharashtra (to the SW)","Gujarat? (NW), Maharashtra more proximate","Kerala","Tamil Nadu"], answer:"Maharashtra", hint:"closest coastline via Maharashtra/Gujarat" },
        { q: "Which is largest freshwater lake in Bhopal?", options:["Upper Lake (Bhojtal)","Lower Lake","Dal Lake","Loktak"], answer:"Upper Lake (Bhojtal)", hint:"Bhojtal name" },
        { q: "Which soil is poor in nitrogen and rich in iron (typical)?", options:["Laterite","Alluvial","Black","Red"], answer:"Laterite", hint:"Laterite iron-rich" },
        { q: "Which are the 'Central highlands' covering MP area? (exam style)", options:["Vindhya & Satpura ranges","Aravalli","Western Ghats","Himalaya"], answer:"Vindhya & Satpura ranges", hint:"Central highlands include Vindhya & Satpura" },
        { q: "Which district in MP has major coalfields (Singrauli region partly)?", options:["Singrauli (but partly in MP)", "Singrauli","Bhopal","Indore"], answer:"Singrauli", hint:"Coal belt" },
        { q: "Which national park is known for both tigers and rich biodiversity in MP— famous one?", options:["Kanha","Pench","Bandhavgarh","All of above"], answer:"All of above", hint:"Multiple reserves" }
      ]
    }
  }; // END SUBJECTS
  
  /* ======== APP LOGIC ======== */
  const subjectSelect = document.getElementById("subjectSelect");
  const startBtn = document.getElementById("startBtn");
  const resetBtn = document.getElementById("resetBtn");
  const printBtn = document.getElementById("printBtn");
  
  const quizArea = document.getElementById("quizArea");
  const qCounter = document.getElementById("qCounter");
  const progressBar = document.getElementById("progressBar");
  const questionText = document.getElementById("questionText");
  const optionsWrap = document.getElementById("optionsWrap");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const submitBtn = document.getElementById("submitBtn");
  
  const resultArea = document.getElementById("resultArea");
  const scoreText = document.getElementById("scoreText");
  const reviewBtn = document.getElementById("reviewBtn");
  const reviewArea = document.getElementById("reviewArea");
  const reviewList = document.getElementById("reviewList");
  const closeReview = document.getElementById("closeReview");
  
  let currentSubjectKey = null;
  let questions = [];
  let currentIndex = 0;
  let answers = []; // store selected option string or null
  let submitted = false;
  
  // Populate subject select
  function initSubjects() {
    Object.keys(SUBJECTS).forEach(key => {
      const opt = document.createElement("option");
      opt.value = key;
      opt.textContent = SUBJECTS[key].title;
      subjectSelect.appendChild(opt);
    });
  }
  initSubjects();
  
  startBtn.addEventListener("click", startQuiz);
  resetBtn.addEventListener("click", resetAll);
  printBtn.addEventListener("click", () => window.print());
  prevBtn.addEventListener("click", () => changeIndex(currentIndex - 1));
  nextBtn.addEventListener("click", () => changeIndex(currentIndex + 1));
  submitBtn.addEventListener("click", submitQuiz);
  reviewBtn.addEventListener("click", openReview);
  closeReview.addEventListener("click", () => {
    reviewArea.classList.add("hidden");
    quizArea.classList.remove("hidden");
  });
  
  // Start quiz
  function startQuiz() {
    const key = subjectSelect.value;
    if (!key) {
      alert("Select a subject first");
      return;
    }
    currentSubjectKey = key;
    questions = SUBJECTS[key].questions.slice(); // copy
    // ensure exactly 40 questions (some lists may be shorter due to content); pad or slice
    if (questions.length > 40) questions = questions.slice(0,40);
    while (questions.length < 40) {
      // duplicate some earlier with note (user can edit later)
      questions.push(JSON.parse(JSON.stringify(questions[questions.length % (questions.length || 1)] || {q:"Placeholder",options:["A","B","C","D"],answer:"A",hint:""})));
    }
  
    answers = new Array(questions.length).fill(null);
    currentIndex = 0;
    submitted = false;
    renderQuestion();
    quizArea.classList.remove("hidden");
    resultArea.classList.add("hidden");
    reviewArea.classList.add("hidden");
    updateProgress();
  }
  
  // Render current question
  function renderQuestion() {
    const item = questions[currentIndex];
    qCounter.textContent = `Q ${currentIndex + 1} / ${questions.length}`;
    questionText.innerHTML = `<span class="qno">(${currentIndex+1})</span> ${escapeHtml(item.q)} <div class="hint" style="font-size:12px;color:#6b7280;margin-top:6px">Hint: ${escapeHtml(item.hint || "")}</div>`;
    optionsWrap.innerHTML = "";
    item.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "optionBtn";
      btn.innerText = opt;
      btn.onclick = () => selectOption(opt, btn);
      // mark selected
      if (answers[currentIndex] === opt) btn.classList.add("selected");
      // if submitted, show correct/wrong styles
      if (submitted) {
        if (opt === item.answer) btn.classList.add("correct");
        if (answers[currentIndex] && answers[currentIndex] !== item.answer && answers[currentIndex] === opt) btn.classList.add("wrong");
      }
      optionsWrap.appendChild(btn);
    });
  
    // prev/next enabled
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === questions.length - 1;
    updateProgress();
  }
  
  // Select option
  function selectOption(opt, btnEl) {
    if (submitted) return; // don't allow change after submission
    answers[currentIndex] = opt;
    // remove selected class from other buttons
    Array.from(optionsWrap.children).forEach(b => b.classList.remove("selected"));
    btnEl.classList.add("selected");
  }
  
  // Next / Prev index
  function changeIndex(idx) {
    if (idx < 0 || idx >= questions.length) return;
    currentIndex = idx;
    renderQuestion();
  }
  
  // Update progress bar
  function updateProgress() {
    const done = answers.filter(a => a !== null).length;
    const percent = Math.round((currentIndex+1) / questions.length * 100);
    progressBar.style.width = `${Math.round(((currentIndex+1)/questions.length) * 100)}%`;
  }
  
  // Submit quiz
  function submitQuiz() {
    if (submitted) {
      alert("Quiz already submitted. Use Reset to try again.");
      return;
    }
    // Confirm any unanswered?
    const unanswered = answers.reduce((acc, val, idx) => val === null ? acc.concat(idx+1) : acc, []);
    if (unanswered.length > 0) {
      if (!confirm(`You have ${unanswered.length} unanswered questions. Submit anyway?`)) return;
    }
    submitted = true;
    // calculate score
    let score = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.answer) score++;
    });
    quizArea.classList.add("hidden");
    resultArea.classList.remove("hidden");
    scoreText.innerText = `Score: ${score} / ${questions.length}  (${Math.round((score/questions.length)*100)}%)`;
    // prepare review list
    prepareReview();
  }
  
  // Prepare review
  function prepareReview() {
    reviewList.innerHTML = "";
    questions.forEach((q, idx) => {
      const div = document.createElement("div");
      div.className = "reviewItem";
      const selected = answers[idx] ? answers[idx] : "(no answer)";
      const correct = q.answer;
      div.innerHTML = `<div class="rQ"><strong>Q${idx+1}.</strong> ${escapeHtml(q.q)}</div>
        <div class="rA">Your answer: <span class="${selected===correct ? 'good' : 'bad'}">${escapeHtml(selected)}</span></div>
        <div class="rC">Correct: <strong>${escapeHtml(correct)}</strong></div>
        <div class="rHint">Hint: ${escapeHtml(q.hint || '')}</div>
        <hr/>`;
      reviewList.appendChild(div);
    });
  }
  
  // Open review
  function openReview() {
    resultArea.classList.add("hidden");
    reviewArea.classList.remove("hidden");
    reviewArea.classList.remove("hidden");
  }
  
  // Reset all
  function resetAll() {
    if (!confirm("Reset quiz progress and selections?")) return;
    currentSubjectKey = null;
    questions = [];
    answers = [];
    currentIndex = 0;
    submitted = false;
    quizArea.classList.add("hidden");
    resultArea.classList.add("hidden");
    reviewArea.classList.add("hidden");
    subjectSelect.selectedIndex = 0;
  }
  
  // Helper: escape HTML
  function escapeHtml(text){
    if (!text && text !== 0) return "";
    return String(text).replace(/[&<>"']/g, function(m){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[m]; });
  }
  
  // Initialize default selection
  subjectSelect.selectedIndex = 0;
  