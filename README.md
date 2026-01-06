# Assignment 2

## **AI-Powered Email Template Generator (Backend Service)**

This project is a backend microservice built using **Node.js** and **Express.js**.
It generates **customer-friendly email templates** using an **AI model (Google Gemini)** based on user-provided input fields.

The service exposes a **single POST API endpoint** that accepts email intent details and returns:

* a generated email
* the AI response time (in milliseconds)

---

## @PREREQUISITES

Before running the project, ensure you have the following installed:

* **Node.js** (version 18 or above recommended)
* **npm** (comes bundled with Node.js)
* A valid **Google Gemini API key**

---

## @PROJECT SETUP

### Step 1: Clone the repository

```bash
git clone https://github.com/ghoshOFahan/assignment
```

### Step 2: Navigate to the backend folder

```bash
cd backend
```

### Step 3: Install dependencies

```bash
npm install
```

This installs:

* Express.js
* dotenv
* Google Generative AI SDK

---

## @ENVIRONMENT VARIABLE SETUP

### Step 4: Create a `.env` file

In the root of the backend project, create a file named:

```
.env
```

### Step 5: Add your Gemini API key

Inside the `.env` file, add:

```
GEMINI_API_KEY=your_api_key_here
```

## @RUNNING THE SERVER

### Step 6: Start the server

```bash
node server.js
```

If everything is set up correctly, you should see:

```
Server running on port 3001
```

---

## @API USAGE

### Base URL

```
http://localhost:3001
```

### Endpoint

```
POST /api/generate
```

### Request Headers

```
Content-Type: application/json
```

---

**AI PROMPT DESIGN**

Write an *${ **tone** }* toned email to *${ **recipient_name** }* with the purpose of *${ **purpose** }*

OUTPUT RULES:

- 1.Include a subject line related to the topic within 10 words
- 2.Avoid giving suggestions
- 3.Give proper designations and salutations
- 4.Email should be customer-friendly
- 3.Every email body should be within 4 sentences
- 4.Use a realistic sender's name

---

## @SAMPLE REQUEST & RESPONSE

### **1st Example**

### Request Body

```json
{
  "purpose": "feedback on the new dashboard user experience",
  "recipient_name": "Product Team",
  "tone": "neutral"
}
```

### Response

```json
{
  "email": "Subject: New Dashboard User Experience Feedback\n\nDear Product Team,\n\nWe are writing to provide feedback regarding the recently updated dashboard user experience. We have observed several modifications to the interface and navigation flow. Specifically, the new placement of certain key metrics has introduced a different interaction pattern. We value your continuous efforts to improve the platform.\n\nSincerely,\n\nSarah Jenkins\nCustomer Relations",
  "ai_response_time": 5164
}
```

---

### **2nd Example**

###  Request Body

```json
{
  "purpose": "complaint about incorrect billing amount",
  "recipient_name": "Billing Team",
  "tone": "frustrated"
}
```

### Response

```json
{
  "email": "Subject: Urgent: Incorrect Billing Amount on Latest Invoice\n\nDear Billing Team,\n\nI am writing to express my significant frustration with the incorrect billing amount on my most recent invoice. The charge reflected is substantially higher than expected, which is deeply disappointing. I request that this issue be reviewed and corrected at the earliest.\n\nSincerely,\n\nSarah Jenkins",
  "ai_response_time": 8079
}
```

---

## @POSTMAN TESTING

A Postman collection file is included in the repository.

