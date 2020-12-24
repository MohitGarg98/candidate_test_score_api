# candidate_test_score_api

1. Insert Candidate
  // api for insert a candidate into database
  localhost:3000/candidate/insert-candidate

  // candidate data which we send 
  {
    "email": "mohit@gmail.com",
    "name": "Mohit Garg"
  }
  //like this here we can store many candidates

2. Assign Score
  // api for assign score for a candidate
  localhost:3000/candidate/assign-score

  // data which we send to assign score
  {
      "email": "mohit@gmail.com",
      "first_round": 7,
      "second_round": 8,
      "third_round": 9
  }
  //like this here we can assign scores for all the candidates

3. Highest score
  // api for Highest score
  localhost:3000/candidate/highest-score
  
  //output:
  Heighest Marks <heighest_marks> out of 30
  EmailId: <candidate_email_id>
  
4. Average scores
  // api for Average scores
  localhost:3000/candidate/average-score
  
  //output:
  Average Scores
  First Round <average_score_of_first_round>
  Second Round <average_score_of_second_round>
  Third Round <average_score_of_third_round>
