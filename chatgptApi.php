<?php
$text=$_GET['text'];
$id=$_GET['id'];
$key=$_GET['apikey'];
if($_GET['apikey']==""){
$key="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";//只需要改这一个地方
}


if($id==1){
session_start();
if (!$_SESSION['chatgptSessionPrompt']) {
        $_SESSION['chatgptSessionPrompt'] = '';
}
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
$prompt=$_SESSION['chatgptSessionPrompt'] .'\n提问:' . $text . '\n Ai:';
$chatgptaray=array('\n提问:','\nAI:');
curl_setopt($ch, CURLOPT_URL, "https://api.openai.com/v1/completions");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, '{
  "model": "text-davinci-003",
  "prompt": "'.$prompt.'",
  "max_tokens": 2048
}');
curl_setopt($ch, CURLOPT_POST, 1);
 
// Set the API key as an HTTP header
$headers = array();
$headers[] = "Content-Type: application/json";
$headers[] = "Authorization: Bearer ".$key;
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

// Send the request and parse the response
$response = curl_exec($ch);
$response_data = json_decode($response, true);
$_SESSION['chatgptSessionPrompt'] = $prompt . $response_data['data'];
// echo($response);
if (curl_errno($ch)) {
  // If there was an error executing the cURL request, print it out
  echo 'Error: ' . curl_error($ch);
} else {

  $result = array(
      'code'=> 200,
      'msg'=>"获取成功",
      'data'=>array(
          'html'=> $response_data['choices'][0]['text'],
          'title'=>$text
      ),
  );
  echo json_encode($result,320);
  exit();
  
}
curl_close($ch);
    
}
if($id==2){
    
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.openai.com/v1/images/generations");
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, '{
  "n": 1,
  "prompt": "'.$text.'",
  "size": "256x256"
}');
curl_setopt($ch, CURLOPT_POST, 1);
 
// Set the API key as an HTTP header
$headers = array();
$headers[] = "Content-Type: application/json";
$headers[] = "Authorization: Bearer ".$key;
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

// Send the request and parse the response
$response = curl_exec($ch);
$response_data = json_decode($response, true);

if (curl_errno($ch)) {
  // If there was an error executing the cURL request, print it out
  echo 'Error: ' . curl_error($ch);
} else {

  $result = array(
      'code'=> 200,
      'msg'=>"获取成功",
      'data'=>array(
          'url'=> $response_data['data'][0]['url'],
          'title'=>$text
      ),
  );
  echo json_encode($result,320);
  exit();
  
}
curl_close($ch);
}
if($id==3){
session_start();
if (!$_SESSION['chatgptSessionPrompt']) {
        $_SESSION['chatgptSessionPrompt'] = '';
}
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
curl_setopt($ch, CURLOPT_URL, "https://api.openai.com/dashboard/billing/credit_grants");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

 
// Set the API key as an HTTP header
$headers = array();
$headers[] = "Content-Type: application/json";
$headers[] = "Authorization: Bearer ".$key;
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

// Send the request and parse the response
$response = curl_exec($ch);
$response_data = json_decode($response, true);
$_SESSION['chatgptSessionPrompt'] = $prompt . $response_data['data'];
// echo($response);
if (curl_errno($ch)) {
  // If there was an error executing the cURL request, print it out
  echo 'Error: ' . curl_error($ch);
} else {

  $result = array(
      'code'=> 200,
      'msg'=>"获取成功",
      'data'=>array(
          'html'=> $response_data['total_available'],
      ),
  );
  echo json_encode($result,320);
  exit();
  
}
curl_close($ch);
    
}
?>