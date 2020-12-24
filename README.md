## 1. Insert Candidate
&nbsp;&nbsp;&nbsp;// api for insert a candidate into database  
&nbsp;&nbsp;&nbsp;__localhost:3000/candidate/insert-candidate__  
  
&nbsp;&nbsp;&nbsp;// candidate data which we send  
&nbsp;&nbsp;&nbsp;`{
   "email": "mohit@gmail.com",
   "name": "Mohit Garg"
}`  
&nbsp;&nbsp;&nbsp;// like this here we can store all the candidates  
  
## 2. Assign Score  
&nbsp;&nbsp;&nbsp;// api for assign score for a candidate  
&nbsp;&nbsp;&nbsp;__localhost:3000/candidate/assign-score__  
  
&nbsp;&nbsp;&nbsp;// data which we send to assign score  
&nbsp;&nbsp;&nbsp;`{
"email": "mohit@gmail.com",
"first_round": 7,
"second_round": 8,
"third_round": 9
}`  
&nbsp;&nbsp;&nbsp;//like this here we can assign scores for all the candidates  
  
## 3. Highest score
&nbsp;&nbsp;&nbsp;// api for get Highest score  
&nbsp;&nbsp;&nbsp;__localhost:3000/candidate/highest-score__  
  
&nbsp;&nbsp;&nbsp;//output:  
&nbsp;&nbsp;&nbsp;Heighest Marks <heighest_marks> out of 30  
&nbsp;&nbsp;&nbsp;EmailId: <candidate_email_id>  
  
## 4. Average scores
&nbsp;&nbsp;&nbsp;// api for get Average scores  
&nbsp;&nbsp;&nbsp;__localhost:3000/candidate/average-score__  
  
&nbsp;&nbsp;&nbsp;//output:  
&nbsp;&nbsp;&nbsp;Average Scores  
&nbsp;&nbsp;&nbsp;First Round <average_score_of_first_round>  
&nbsp;&nbsp;&nbsp;Second Round <average_score_of_second_round>  
&nbsp;&nbsp;&nbsp;Third Round <average_score_of_third_round>  
