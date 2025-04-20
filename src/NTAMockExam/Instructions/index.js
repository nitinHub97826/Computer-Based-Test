import React from 'react';
import './Style.scss'; // Import the CSS for styling
import { useScreen } from '../NTARouting';

const Instructions = (props) => {
    return (
        <div className="instruction-page">
            <div className="instructions-container">
                <h2>Please read the instructions carefully </h2>

                
                <b>General Instructions: </b>
 <p>
                    1. The clock will be set on the server. The countdown timer in the top right corner of the 
screen will display the remaining time available for you to complete the examination. 
When the timer reaches zero, the examination will end by itself. You will not be 
required to end or submit your examination. 
               <br/>

                2. The Question Palette displayed on the right side of the screen will show the status of 
each question using one of the following symbols:  
<img src={`${process.env.PUBLIC_URL}/images/typeOfButtons.png`} alt='Type of button'/>
<br/>
4. The ‘Marked for Review’ status for a question simply indicates that you would like 
to look at that question again. <br/>
5. You can click on the "&gt;" arrow which appears to the left of the question palette to 
collapse the question palette thereby maximizing the question window. To view the 
question palette again, you can click on "&lt; " which appears on the right side of the 
question window. <br/>
6. You can click on your "Profile" image on the top right corner of your screen to change 
the language during the exam for the entire question paper. On clicking on the Profile 
image, you will get a drop-down to change the question content to the desired 
language. <br/>
7. You can click on to navigate to the bottom and to navigate to the top of the 
question area, without scrolling. 
<br/>
<b>Navigating to a Question: </b> <br/>
8. To answer a question, do the following:  <br/>
a. Click on the question number in the Question Palette at the right of your screen 
to go to that question directly. Note that using this option does NOT save your 
answer to the current question.  <br/>
b. Click on Save & Next to save your answer for the current question and then go 
to the next question.  <br/>
c. Click on Mark for Review & Next to save your answer for the current 
question, mark it for review, and then go to the next question. <br/>
<b>Answering a Question : </b>  <br/>
9. Procedure for answering a Multiple Choice Type question:   <br/>
 
a. To select your answer, click on the button of one of the options.  <br/>
b. To deselect your chosen answer, click on the button of the chosen option again  <br/>
or click on the Clear Response button.  <br/>
c. To change your chosen answer, click on the button of another option.  <br/>
d. To save your answer, you must click on the Save & Next button  <br/>
e. To mark the question for review, click on the <strong>Mark for Review & Next </strong> button.  <br/>
</p>          
 <p>
    
10. To change your answer to a question that has already been answered, first select that 
question for answering and then follow the procedure for answering that type of 
question. <br/>
<b>Navigating through sections: </b><br/>
11. Sections in this question paper are displayed on the top bar of the screen. Questions 
in a section can be viewed by clicking on the Section name. The section you are 
currently viewing is highlighted. <br/>
12. After clicking the Save and Next button on the last question for a Section, you will 
automatically be taken to the first question of the next section. <br/>
13. You can shuffle between sections and questions anytime during the examination as 
per your convenience only during the time stipulated. <br/>
14. The candidate can view the corresponding section summary as part of the legend 
that appears in every section above the question palette. <br/>
Instruction for Question: <br/>
15. For the correctness of the translation for a particular language, only the English 
version will be considered as the final version for evaluation purposes. <br/>
 
The keyboard attached to the computer, if any, will be disabled during the entire duration 
of the examination. Depending on the type of question, the answers to questions can either 
be entered by clicking on the virtual on-screen keyboard (numeric or otherwise) using the 
computer mouse or by clicking the chosen option(s) using the computer mouse. Candidates 
will have the option to change/modify answers already entered at any time during the 
entire duration of the examination. <br/>
In case the computer/mouse allotted to any candidate malfunctions during the test, he/she 
will be immediately allotted another computer system and the time lost due to this will be 
adjusted in the server so as to give the candidate the full allotted time. <br/>
The on-screen computer clock counter of every candidate will be set on the server. The 
countdown timer on the top right side of the computer screen will display the time 
remaining (in minutes) available for the candidate to complete the examination. When the 
timer reaches zero, the examination will end by itself. The candidates will not be required 
to end or submit the examination. <br/>
 
The Question Palette displayed on the screen will show the status of each question using 
one of the following symbols: <br/>
 
 
The question(s) “Answered and Marked for Review” status for a question indicates that 
the candidates would like to have a relook at that question again. A candidate has the 
option of answering a question and simultaneously “Marked for Review”, these answers 
will be considered for evaluation. However, if a candidate has simply put “Marked for 
Review” for a question without answering it, the corresponding question marked for 
review without an answer will not be considered for evaluation. It may be noted that a 
candidate can return to any “Marked for Review” question at any time during the 
examination by clicking on the corresponding question number icon displayed on the 
Question Palette of the corresponding section. <br/>
(d)  The candidates can click on the “&gt;” arrow which appears to the left of the question 
palette to collapse the question palette thereby maximizing the question viewing 
window. To view the question palette again, the candidate can click on “&lt;” which 
appears on the right side of the question window.  <br/>
 

(e) Candidates can click to navigate to the bottom and to navigate to the top of the 
question area, without scrolling. Using the computer mouse the candidate can scroll 
up and down the question viewing area for viewing the entire question.  <br/>
(f) The full paper can be viewed by clicking the “Question Paper” icon on the top right 
corner of the screen.  <br/>
(g) Blank Sheets for doing Rough Work/calculations shall be provided to the candidates. 
The blank sheets would have a Header page for the candidates to write down his/her 
Name and Roll Number. All calculations/writing work is to be done only in the 
Blank Sheets provided at the Centre in the Examination Room/Hall and on 
completion of the test candidates must hand over the rough sheets to the invigilator 
on duty in the Room/Hall. <br/>
(h) Navigating to a Question To navigate between questions within a Paper, the 
candidate needs to do the following:  <br/>
(a) Click on the question number in the Question Palette at the right of the 
screen to go to that numbered question directly. Note that using this option 
does NOT save the answer to the currently displayed question.  <br/>
(b) Click on “Save and Next” to save the answer to any question. Clicking on 
“Save and Next” will save the answer for the current question and the next 
question will be displayed on the candidate’s computer screen. <br/>
(c) Click on “Mark for Review and Next” to mark a question for review (without 
answering it) and proceed to the next question. <br/>
 
(i)<b> Answering a Question</b> <br/>
To navigate between questions within a Paper, the candidate needs to do the following: 
Procedure for answering a Multiple-Choice type question: <br/>
(a) To select the option(s), click on the corresponding button(s) of the 
option(s). <br/>
(b) To deselect the chosen answer, click on the button of the chosen option 
again or click on the “Clear Response” button. <br/>
 
 
(c) To save the answer, the candidate MUST click on the “Save and Next” 
button. <br/>
(d) To mark the question for review (without answering it), click on the “Mark 
for Review and Next” button. 
<br/>
(j) Navigating through sections: <br/>
(i) Sections in the question paper are displayed on the top bar of the screen. <br/>
Questions in a section can be viewed by clicking on the section name. The 
section in which the candidate is currently viewing will be highlighted. 
(ii) After clicking the “Save and Next” button on the last question for a <br/>
section, the candidate will automatically be taken to the first question of 
the next section. <br/>
(iii) Candidates can shuffle between sections and questions within sections 
anytime during the examination as per convenience only during the time 
stipulated. <br/>
(iv) The candidate can view the corresponding section summary as part of the 
legend that appears in every section above the question palette. 
<br/>
(k) Procedure for answering questions that require inputs from the on-screen 
virtual keyboard (numeric or otherwise): 
<br/>
(a)  The candidate will have to use the on-screen virtual keyboard (that would 
be displayed just below the question statement of these types of questions) 
and the attached computer mouse to enter his/her answer in the space 
provided for the answer. 
<br/>
 
<b>On-Screen Virtual Keyboard </b>
<br/>
 
 
(b) The answer can be changed, if required, anytime during the test. To save 
the answer, the candidate MUST click on the “Save and Next” button. 
 
<br/>
(c) To mark the question for review (without answering it), click on the 
“Mark for Review and Next” button. 
<br/>
 The candidates will have the option to change previously saved 
answers to any question, anytime during the entire duration of the test. 
To change the answer to a question that has already been answered, first 
select the corresponding question from the Question Palette, then click 
on “Clear Response” to clear the previously entered answer and 
subsequently follow the procedure for answering that type of question. 
</p>
              
            </div>

            <footer>
                <button className="start-btn" onClick={()=>props.nextScreen(useScreen.ExamBoard)}>Start Test</button>
            </footer>
        </div>
    );
};

export default Instructions;
