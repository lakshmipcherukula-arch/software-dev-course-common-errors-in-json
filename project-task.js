/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================
/*
Identified the following JSON syntax errors:
    1) JSON was embedded inside backticks which will fail at JSON parsing.
    2) JSON does not support the identifier `undefined`; use `null` or omit the property. 
    3) Comma (,) is missing after "checkInDate": "2024-05-15"
*/


const correctedBookingJSON = {
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15", 
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]
  }
};

// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong? JSON syntax was invalid.
  • Why is it a problem in JSON?
     1) JSON was embedded inside backticks which will fail at JSON parsing.
     2) JSON does not support the identifier `undefined`; use `null` or omit the property. 
     3) Comma (,) is missing after "checkInDate": "2024-05-15"
  • What did you change to fix it?
     1) Removed backticks sorrounding JSON.
     2) Replaced `undefined` with `null` 
     3) Added Comma (,) after "checkInDate": "2024-05-15"
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors? Used https://jsonlint.com/ to identify the JSON syntax errors.

2️⃣ How did you confirm that your corrected JSON file was valid? Validated the updated JSON using https://jsonlint.com/. 

3️⃣ Which errors were the most difficult to spot? Why? Those errors were easy to spot.

4️⃣ What strategies can help you avoid these kinds of errors in the future? Using linters can save time in identifying the errors quickly.
   (e.g., syntax highlighting, linters, writing JSON by example)
*/
