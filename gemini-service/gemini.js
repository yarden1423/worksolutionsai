/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash-latest",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];
  
  async function run() {
    const chatSession = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [
            {text: "based on a users cv, break down which traits they are good at and which jobs are most suited to them"},
            {text: "John Doe\n1234 Elm Street\nCity, State, ZIP\nEmail: john.doe@example.com\nPhone: (123) 456-7890\nLinkedIn: linkedin.com/in/johndoe\n\n---------------------------------------------\nOBJECTIVE\n---------------------------------------------\nExperienced transportation professional seeking a position as a Logistics Manager to utilize my skills in logistics management, vehicle operation, and fleet management to improve efficiency and customer satisfaction.\n\n---------------------------------------------\nPROFESSIONAL EXPERIENCE\n---------------------------------------------\n\nTransportation Coordinator\nXYZ Logistics, City, State\nJanuary 2018 - Present\n- Coordinated the transportation of goods and materials for a leading logistics company.\n- Managed a fleet of 50+ vehicles, ensuring timely maintenance and compliance with safety regulations.\n- Developed and implemented efficient routing plans, reducing fuel costs by 15%.\n- Supervised a team of 20 drivers, providing training and support to improve performance and adherence to company policies.\n- Handled customer inquiries and resolved issues promptly to maintain high levels of customer satisfaction.\n\nLogistics Assistant\nABC Transport, City, State\nJune 2015 - December 2017\n- Assisted in the planning and execution of transportation logistics for a regional transport company.\n- Monitored shipment schedules and coordinated with drivers to ensure timely deliveries.\n- Maintained accurate records of vehicle maintenance and fuel usage.\n- Collaborated with the warehouse team to optimize loading and unloading processes.\n- Prepared reports on transportation activities and performance metrics.\n\n---------------------------------------------\nEDUCATION\n---------------------------------------------\n\nBachelor of Science in Logistics and Supply Chain Management\nUniversity of State, City, State\nGraduated: May 2015\n\n---------------------------------------------\nCERTIFICATIONS\n---------------------------------------------\n\n- Certified Logistics Associate (CLA), Manufacturing Skill Standards Council\n- Commercial Driver's License (CDL), State Department of Motor Vehicles\n\n---------------------------------------------\nSKILLS\n---------------------------------------------\n\n- Logistics Management\n- Fleet Management\n- Route Planning and Optimization\n- Vehicle Operation and Maintenance\n- Customer Service\n- Team Leadership\n- Data Analysis and Reporting\n- Proficiency in logistics software (e.g., SAP, Oracle Transportation Management)\n\n---------------------------------------------\nLANGUAGES\n---------------------------------------------\n\n- English (Native)\n- Spanish (Conversational)\n\n---------------------------------------------\nREFERENCES\n---------------------------------------------\n\nAvailable upon request"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "## John Doe's Skills and Suited Jobs\n\n**Based on John Doe's CV, he demonstrates strong skills in the following areas:**\n\n**Core Skills:**\n\n* **Logistics Management:**  John possesses a strong understanding of logistics principles and processes, as evidenced by his experience in coordinating transportation, managing fleets, and implementing efficient routing plans.\n* **Fleet Management:**  His experience managing a fleet of 50+ vehicles and ensuring their maintenance and compliance with regulations demonstrates his expertise in this area.\n* **Route Planning & Optimization:** John's success in reducing fuel costs through efficient routing plans highlights his analytical skills and ability to optimize transportation logistics.\n* **Vehicle Operation & Maintenance:** John's CDL and experience managing fleet maintenance demonstrate his understanding of vehicle operation and maintenance.\n* **Customer Service:**  His experience handling customer inquiries and resolving issues points to his customer-centric approach and communication skills.\n\n**Additional Skills:**\n\n* **Team Leadership:** John has supervised a team of 20 drivers, providing training and support to improve their performance.\n* **Data Analysis & Reporting:**  His experience preparing reports on transportation activities and performance metrics demonstrates his ability to analyze data and present information clearly.\n* **Logistics Software Proficiency:** John's proficiency in logistics software like SAP and Oracle Transportation Management adds value to his skillset.\n\n**Jobs Suited to John Doe:**\n\nBased on his skills and experience, John would be a strong candidate for the following positions:\n\n* **Logistics Manager:**  His experience in coordinating transportation, managing fleets, and implementing efficient routing plans makes him well-suited for this role.\n* **Transportation Supervisor/Coordinator:** His experience managing drivers and overseeing daily operations would be valuable in this position.\n* **Fleet Manager:** John's expertise in managing vehicle maintenance and compliance would make him a suitable candidate for this role.\n* **Supply Chain Analyst:** His data analysis skills and understanding of logistics processes would be valuable in this position.\n* **Operations Manager (Logistics Focused):** His experience in both logistics and team leadership would be beneficial in this role.\n\n**Additional Considerations:**\n\n* **Industry Specific:** John's experience in the logistics industry makes him a strong candidate for similar roles within transportation and logistics companies.\n* **Certifications & Education:**  His CLA and Bachelor's degree add credibility and demonstrate his commitment to professional development.\n* **Transferable Skills:** John's strong communication, analytical, and problem-solving skills are transferable to other industries.\n\n**Overall:**  John Doe possesses a strong combination of skills and experience that would make him a valuable asset to any organization in the transportation and logistics sector. \n"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage("yoyoyo broski");
    console.log(result.response.text());
  }
  
  run();